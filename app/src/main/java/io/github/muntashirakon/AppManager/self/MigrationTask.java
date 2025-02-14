// SPDX-License-Identifier: GPL-3.0-or-later

package io.github.muntashirakon.AppManager.self;

import io.github.muntashirakon.AppManager.BuildConfig;

abstract class MigrationTask implements Runnable {
    public final long fromVersionAtLeast;
    public final long fromVersionAtMost;
    public final long toVersion;
    public final boolean mainThread;

    public MigrationTask(long fromVersion) {
        this(fromVersion, false);
    }

    public MigrationTask(long fromVersion, boolean mainThread) {
        this(fromVersion, fromVersion, mainThread);
    }

    public MigrationTask(long fromVersionAtLeast, long fromVersionAtMost) {
        this(fromVersionAtLeast, fromVersionAtMost, false);
    }

    public MigrationTask(long fromVersionAtLeast, long fromVersionAtMost, boolean mainThread) {
        this(fromVersionAtLeast, fromVersionAtMost, BuildConfig.VERSION_CODE, mainThread);
    }

    public MigrationTask(long fromVersionAtLeast, long fromVersionAtMost, long toVersion, boolean mainThread) {
        this.fromVersionAtLeast = fromVersionAtLeast;
        this.fromVersionAtMost = fromVersionAtMost;
        this.toVersion = toVersion;
        this.mainThread = mainThread;
    }

    boolean shouldRunMigration(long fromVersion) {
        if (fromVersionAtMost == -1) {
            // Any version
            return true;
        }
        return fromVersion >= fromVersionAtLeast && fromVersion <= fromVersionAtMost;
    }
}
