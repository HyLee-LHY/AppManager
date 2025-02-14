// SPDX-License-Identifier: GPL-3.0-or-later

package io.github.muntashirakon.AppManager.settings.crypto;

import static io.github.muntashirakon.AppManager.crypto.AESCrypto.AES_KEY_ALIAS;

import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextUtils;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentActivity;

import java.nio.CharBuffer;
import java.security.SecureRandom;
import java.util.Arrays;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.security.auth.DestroyFailedException;

import aosp.libcore.util.HexEncoding;
import io.github.muntashirakon.AppManager.R;
import io.github.muntashirakon.AppManager.backup.CryptoUtils;
import io.github.muntashirakon.AppManager.crypto.ks.KeyStoreManager;
import io.github.muntashirakon.AppManager.crypto.ks.SecretKeyCompat;
import io.github.muntashirakon.AppManager.logs.Log;
import io.github.muntashirakon.AppManager.settings.Prefs;
import io.github.muntashirakon.AppManager.utils.UIUtils;
import io.github.muntashirakon.AppManager.utils.Utils;
import io.github.muntashirakon.dialog.TextInputDialogBuilder;
import io.github.muntashirakon.dialog.TextInputDropdownDialogBuilder;

public class AESCryptoSelectionDialogFragment extends DialogFragment {
    public static final String TAG = "AESCryptoSelectionDialogFragment";

    private FragmentActivity activity;
    private TextInputDialogBuilder builder;
    @Nullable
    private KeyStoreManager keyStoreManager;
    @Nullable
    private char[] keyChars;

    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        activity = requireActivity();
        builder = new TextInputDialogBuilder(activity, R.string.input_key)
                .setTitle(R.string.aes)
                .setNeutralButton(R.string.generate_key, null)
                .setNegativeButton(R.string.cancel, null)
                .setPositiveButton(R.string.save, null);
        AlertDialog alertDialog = builder.create();
        alertDialog.setOnShowListener(dialog -> {
            AlertDialog dialog1 = (AlertDialog) dialog;
            Button positiveButton = dialog1.getButton(AlertDialog.BUTTON_POSITIVE);
            Button neutralButton = dialog1.getButton(AlertDialog.BUTTON_NEUTRAL);
            // Save
            positiveButton.setOnClickListener(v -> {
                Editable inputText = builder.getInputText();
                if (TextUtils.isEmpty(inputText)) return;
                if (keyStoreManager == null) {
                    UIUtils.displayLongToast(R.string.failed_to_initialize_key_store);
                    return;
                }
                keyChars = new char[inputText.length()];
                inputText.getChars(0, inputText.length(), keyChars, 0);
                byte[] keyBytes;
                try {
                    keyBytes = HexEncoding.decode(keyChars);
                } catch (IllegalArgumentException e) {
                    UIUtils.displayLongToast(R.string.invalid_aes_key_size);
                    return;
                }
                if (keyBytes.length != 16 && keyBytes.length != 32) {
                    UIUtils.displayLongToast(R.string.invalid_aes_key_size);
                    return;
                }
                SecretKey secretKey = new SecretKeySpec(keyBytes, "AES");
                try {
                    keyStoreManager.addSecretKey(AES_KEY_ALIAS, secretKey, true);
                    Prefs.Encryption.setEncryptionMode(CryptoUtils.MODE_AES);
                } catch (Exception e) {
                    Log.e(TAG, e);
                    UIUtils.displayLongToast(R.string.failed_to_save_key);
                }
                Utils.clearBytes(keyBytes);
                try {
                    SecretKeyCompat.destroy(secretKey);
                } catch (DestroyFailedException e) {
                    Log.e(TAG, e);
                }
                dialog.dismiss();
            });
            // Key generator
            neutralButton.setOnClickListener(v -> new TextInputDropdownDialogBuilder(activity, R.string.crypto_key_size)
                    .setDropdownItems(Arrays.asList(128, 256), 0, false)
                    .setTitle(R.string.generate_key)
                    .setNegativeButton(R.string.cancel, null)
                    .setPositiveButton(R.string.generate_key, (dialog2, which, inputText, isChecked) -> {
                        if (TextUtils.isEmpty(inputText)) return;
                        int keySize = 128 / 8;
                        try {
                            //noinspection ConstantConditions
                            keySize = Integer.decode(inputText.toString().trim()) / 8;
                        } catch (NumberFormatException ignore) {
                        }
                        SecureRandom random = new SecureRandom();
                        byte[] key = new byte[keySize];
                        random.nextBytes(key);
                        keyChars = HexEncoding.encode(key);
                        builder.setInputText(CharBuffer.wrap(keyChars));
                    })
                    .show());
        });
        new Thread(() -> {
            try {
                keyStoreManager = KeyStoreManager.getInstance();
                SecretKey secretKey = keyStoreManager.getSecretKey(AES_KEY_ALIAS);
                if (secretKey != null) {
                    keyChars = HexEncoding.encode(secretKey.getEncoded());
                    try {
                        SecretKeyCompat.destroy(secretKey);
                    } catch (Exception ex) {
                        Log.e(TAG, ex);
                    }
                    activity.runOnUiThread(() -> builder.setInputText(CharBuffer.wrap(keyChars)));
                }
            } catch (Exception e) {
                Log.e(TAG, e);
            }
        }).start();
        return alertDialog;
    }

    @Override
    public void onDismiss(@NonNull DialogInterface dialog) {
        if (keyChars != null) Utils.clearChars(keyChars);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (keyChars != null) Utils.clearChars(keyChars);
    }
}
