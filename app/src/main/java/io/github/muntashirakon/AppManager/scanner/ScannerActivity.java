// SPDX-License-Identifier: Apache-2.0 AND GPL-3.0-or-later

package io.github.muntashirakon.AppManager.scanner;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.ParcelFileDescriptor;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.StringRes;
import androidx.appcompat.app.ActionBar;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

import com.google.android.material.progressindicator.LinearProgressIndicator;

import java.io.File;
import java.io.FileNotFoundException;

import io.github.muntashirakon.AppManager.BaseActivity;
import io.github.muntashirakon.AppManager.R;
import io.github.muntashirakon.AppManager.apk.installer.PackageInstallerActivity;
import io.github.muntashirakon.AppManager.fm.FmProvider;
import io.github.muntashirakon.AppManager.intercept.IntentCompat;
import io.github.muntashirakon.AppManager.settings.FeatureController;
import io.github.muntashirakon.AppManager.utils.FileUtils;
import io.github.muntashirakon.io.IoUtils;
import io.github.muntashirakon.io.Paths;

// Copyright 2015 Google, Inc.
public class ScannerActivity extends BaseActivity {
    public static final String EXTRA_IS_EXTERNAL = "is_external";

    @Nullable
    private ActionBar mActionBar;
    @Nullable
    private LinearProgressIndicator mProgressIndicator;
    @Nullable
    private ParcelFileDescriptor fd;
    @Nullable
    private Uri apkUri;
    private boolean isExternalApk;

    @Override
    protected void onDestroy() {
        Paths.get(getCodeCacheDir()).delete();
        IoUtils.closeQuietly(fd);
        super.onDestroy();
    }

    @Override
    protected void onAuthenticated(Bundle savedInstanceState) {
        setContentView(R.layout.activity_fm);
        setSupportActionBar(findViewById(R.id.toolbar));
        ScannerViewModel model = new ViewModelProvider(this).get(ScannerViewModel.class);
        mActionBar = getSupportActionBar();
        Intent intent = getIntent();
        isExternalApk = intent.getBooleanExtra(EXTRA_IS_EXTERNAL, true);

        mProgressIndicator = findViewById(R.id.progress_linear);
        mProgressIndicator.setVisibilityAfterHide(View.GONE);
        showProgress(true);

        apkUri = IntentCompat.getDataUri(intent);
        if (apkUri == null) {
            Toast.makeText(this, getString(R.string.error), Toast.LENGTH_LONG).show();
            finish();
            return;
        }

        File apkFile = null;
        if (Intent.ACTION_VIEW.equals(intent.getAction())) {
            if (!FmProvider.AUTHORITY.equals(apkUri.getAuthority())) {
                try {
                    fd = getContentResolver().openFileDescriptor(apkUri, "r");
                    if (fd == null) {
                        throw new FileNotFoundException("FileDescription cannot be null");
                    }
                    apkFile = FileUtils.getFileFromFd(fd);
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                }
            }
        } else {
            String path = apkUri.getPath();
            if (path != null) apkFile = new File(path);
        }

        model.setApkFile(apkFile);
        model.setApkUri(apkUri);

        loadNewFragment(new ScannerFragment());
    }

    @Override
    public void onBackPressed() {
        if (getSupportFragmentManager().getBackStackEntryCount() > 1) {
            super.onBackPressed();
        } else this.finish();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_scanner, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onPrepareOptionsMenu(@NonNull Menu menu) {
        menu.findItem(R.id.action_install).setVisible(isExternalApk && FeatureController.isInstallerEnabled());
        return super.onPrepareOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();
        if (id == android.R.id.home) {
            onBackPressed();
            return true;
        } else if (id == R.id.action_install) {
            if (apkUri != null) {
                startActivity(PackageInstallerActivity.getLaunchableInstance(getApplicationContext(), apkUri));
                return true;
            }
        }
        return super.onOptionsItemSelected(item);
    }

    public void setSubtitle(CharSequence subtitle) {
        if (mActionBar != null) {
            mActionBar.setSubtitle(subtitle);
        }
    }

    public void setSubtitle(@StringRes int subtitle) {
        if (mActionBar != null) {
            mActionBar.setSubtitle(subtitle);
        }
    }

    void showProgress(boolean willShow) {
        if (mProgressIndicator == null) {
            return;
        }
        if (willShow) {
            mProgressIndicator.show();
        } else {
            mProgressIndicator.hide();
        }
    }

    public void loadNewFragment(Fragment fragment) {
        getSupportFragmentManager()
                .beginTransaction()
                .replace(R.id.main_layout, fragment)
                .addToBackStack(null)
                .commit();
    }
}
