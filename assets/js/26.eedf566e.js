(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{382:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"settings-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings-page"}},[e._v("#")]),e._v(" Settings Page")]),e._v(" "),a("p",[e._v("Settings can be used to customise the behaviour of the app.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Table of Contents")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#language"}},[e._v("Language")])]),a("li",[a("a",{attrs:{href:"#app-theme"}},[e._v("App Theme")])]),a("li",[a("a",{attrs:{href:"#mode-of-operation"}},[e._v("Mode of Operation")])]),a("li",[a("a",{attrs:{href:"#usage-access"}},[e._v("Usage Access")])]),a("li",[a("a",{attrs:{href:"#apk-signing"}},[e._v("APK Signing")]),a("ul",[a("li",[a("a",{attrs:{href:"#signature-schemes"}},[e._v("Signature schemes")])])])]),a("li",[a("a",{attrs:{href:"#rules"}},[e._v("Rules")]),a("ul",[a("li",[a("a",{attrs:{href:"#global-component-blocking"}},[e._v("Global Component Blocking")])]),a("li",[a("a",{attrs:{href:"#import-export-blocking-rules"}},[e._v("Import/Export Blocking Rules")])]),a("li",[a("a",{attrs:{href:"#remove-all-rules"}},[e._v("Remove all rules")])])])]),a("li",[a("a",{attrs:{href:"#installer"}},[e._v("Installer")]),a("ul",[a("li",[a("a",{attrs:{href:"#show-users-in-installer"}},[e._v("Show users in installer")])]),a("li",[a("a",{attrs:{href:"#sign-apk"}},[e._v("Sign APK")])]),a("li",[a("a",{attrs:{href:"#install-location"}},[e._v("Install location")])]),a("li",[a("a",{attrs:{href:"#installer-app"}},[e._v("Installer App")])])])]),a("li",[a("a",{attrs:{href:"#backup-restore"}},[e._v("Backup/Restore")]),a("ul",[a("li",[a("a",{attrs:{href:"#compression-method"}},[e._v("Compression method")])]),a("li",[a("a",{attrs:{href:"#backup-options"}},[e._v("Backup Options")])]),a("li",[a("a",{attrs:{href:"#backup-apps-with-android-keystore"}},[e._v("Backup apps with Android KeyStore")])]),a("li",[a("a",{attrs:{href:"#encryption"}},[e._v("Encryption")])])])]),a("li",[a("a",{attrs:{href:"#device-info"}},[e._v("Device Info")])])])]),a("p")]),e._v(" "),a("h2",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),a("p",[e._v("Configure in-app language. App Manager current supports 12 (twelve) languages.")]),e._v(" "),a("h2",{attrs:{id:"app-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-theme"}},[e._v("#")]),e._v(" App Theme")]),e._v(" "),a("p",[e._v("Configure in-app theme.")]),e._v(" "),a("h2",{attrs:{id:"mode-of-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-of-operation"}},[e._v("#")]),e._v(" Mode of Operation")]),e._v(" "),a("p",[e._v("You can select one of the four options:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Auto.")]),e._v(" Let AM select the suitable option for you. Although this is the default option, it may cause problems in some devices.")]),e._v(" "),a("li",[a("strong",[e._v("Root.")]),e._v(" Select root mode. AM will request for root permission if not already granted. But when selected, AM will run in root mode even if you don't allow root. This may cause crashes, therefore, you shouldn't enable it if you haven't granted root.")]),e._v(" "),a("li",[a("strong",[e._v("ADB over TCP.")]),e._v(" Enable "),a("RouterLink",{attrs:{to:"/guide/adb-over-tcp.html"}},[e._v("ADB over TCP")]),e._v(" mode. AM may hang indefinitely if you haven't enabled ADB over TCP.")],1),e._v(" "),a("li",[a("strong",[e._v("No-root.")]),e._v(" AM runs in no-root mode. AM will perform better if this is enabled but all the root/ADB features will be disabled.")])]),e._v(" "),a("h2",{attrs:{id:"usage-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-access"}},[e._v("#")]),e._v(" Usage Access")]),e._v(" "),a("p",[e._v("Turning off this option disables the "),a("strong",[e._v("App Usage")]),e._v(" page as well as "),a("em",[e._v("data usage")]),e._v(" and "),a("em",[e._v("app storage info")]),e._v(" in the "),a("RouterLink",{attrs:{to:"/guide/app-details-page.html#app-info-tab"}},[e._v("App Info tab")]),e._v(". With this option turned off, App Manager will never ask for "),a("em",[e._v("Usage Access")]),e._v(" permission.")],1),e._v(" "),a("h2",{attrs:{id:"apk-signing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apk-signing"}},[e._v("#")]),e._v(" APK Signing")]),e._v(" "),a("h3",{attrs:{id:"signature-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature-schemes"}},[e._v("#")]),e._v(" Signature schemes")]),e._v(" "),a("p",[e._v("Select the "),a("a",{attrs:{href:"https://source.android.com/security/apksigning",target:"_blank",rel:"noopener noreferrer"}},[e._v("signature schemes"),a("OutboundLink")],1),e._v(" to use. It is recommended that you use at least v1 and v2 signature schemes. Use the "),a("em",[e._v("Reset to Default")]),e._v(" button in case you're confused.")]),e._v(" "),a("h2",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[e._v("#")]),e._v(" Rules")]),e._v(" "),a("h3",{attrs:{id:"global-component-blocking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-component-blocking"}},[e._v("#")]),e._v(" Global Component Blocking")]),e._v(" "),a("p",[e._v("Enable component blocking globally. By default, blocking rules are not applied unless they are applied in the "),a("RouterLink",{attrs:{to:"/guide/app-details-page.html"}},[e._v("App Details")]),e._v(" page for any package. Upon enabling this option, all (old and new) rules are applied immediately for all apps without explicitly enabling blocking for any app.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),a("p",[e._v("Enabling this setting may have some unintended side-effects, such as rules that are not completely removed will get applied. So, proceed with caution. This option should be kept disabled if not required for some reasons.")])]),e._v(" "),a("p",[a("em",[e._v("See also: "),a("RouterLink",{attrs:{to:"/faq/app-components.html#what-is-global-component-blocking"}},[e._v("What is global component blocking?")])],1)]),e._v(" "),a("h3",{attrs:{id:"import-export-blocking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-export-blocking-rules"}},[e._v("#")]),e._v(" Import/Export Blocking Rules")]),e._v(" "),a("p",[e._v("It is possible to import or export blocking rules within App Manager for all apps. There is a choice to export or import only certain rules (components, app ops or permissions) instead of all of them. It is also possible to import blocking rules from "),a("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blocker"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Watt"),a("OutboundLink")],1),e._v(". If it is necessary to export blocking rules for a single app, use the corresponding "),a("RouterLink",{attrs:{to:"/guide/app-details-page.html"}},[e._v("App Details")]),e._v(" page to export rules, or for multiple apps, use "),a("RouterLink",{attrs:{to:"/guide/main-page.html#batch-operations"}},[e._v("batch operations")]),e._v(".")],1),e._v(" "),a("p",[a("em",[e._v("See also: "),a("RouterLink",{attrs:{to:"/tech/rules-specification.html"}},[e._v("App Manager: Rules Specification")])],1)]),e._v(" "),a("h4",{attrs:{id:"export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[e._v("#")]),e._v(" Export")]),e._v(" "),a("p",[e._v("Export blocking rules for all apps configured within App Manager. This may include "),a("RouterLink",{attrs:{to:"/faq/app-components.html#what-are-the-app-components"}},[e._v("app components")]),e._v(", app ops and permissions based on what options is/are selected in the multichoice options.")],1),e._v(" "),a("h4",{attrs:{id:"import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" Import")]),e._v(" "),a("p",[e._v("Import previously exported blocking rules from App Manager. Similar to export, this may include "),a("RouterLink",{attrs:{to:"/faq/app-components.html#what-are-the-app-components"}},[e._v("app components")]),e._v(", app ops and permissions based on what options is/are selected in the multi-choice options.")],1),e._v(" "),a("h4",{attrs:{id:"import-existing-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-existing-rules"}},[e._v("#")]),e._v(" Import Existing Rules")]),e._v(" "),a("p",[e._v("Add components disabled by other apps to App Manager. App Manager only keeps track of component disabled within App Manager. If you use other tools to block app components, you can use this tools to import these disabled components. Clicking on this option triggers a search for disabled components and will lists apps with components disabled by user. For safety, all the apps are unselected by default. You can manually select the apps in the list and re-apply the blocking through App Manager.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Caution")]),e._v(" "),a("p",[e._v("Be careful when using this tool as there can be many false positives. Choose only the apps that you are certain about.")])]),e._v(" "),a("h4",{attrs:{id:"import-from-watt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-from-watt"}},[e._v("#")]),e._v(" Import from Watt")]),e._v(" "),a("p",[e._v("Import configuration files from "),a("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Watt"),a("OutboundLink")],1),e._v(", each file containing rules for a single package and file name being the name of the package with "),a("code",[e._v(".xml")]),e._v(" extension.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Location of configuration files in Watt: "),a("tt",[e._v("/sdcard/Android/data/com.tuyafeng.watt/files/ifw")])],1)]),e._v(" "),a("h4",{attrs:{id:"import-from-blocker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-from-blocker"}},[e._v("#")]),e._v(" Import from Blocker")]),e._v(" "),a("p",[e._v("Import blocking rules from "),a("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blocker"),a("OutboundLink")],1),e._v(", each file containing rules for a single package. These files have a "),a("code",[e._v(".json")]),e._v(" extension.")]),e._v(" "),a("h3",{attrs:{id:"remove-all-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-all-rules"}},[e._v("#")]),e._v(" Remove all rules")]),e._v(" "),a("p",[e._v("One-click option to remove all rules configured within App Manager. This will enable all blocked components, app ops will be set to their default values and permissions will be granted.")]),e._v(" "),a("h2",{attrs:{id:"installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installer"}},[e._v("#")]),e._v(" Installer")]),e._v(" "),a("p",[e._v("Installer specific options")]),e._v(" "),a("h3",{attrs:{id:"show-users-in-installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-users-in-installer"}},[e._v("#")]),e._v(" Show users in installer")]),e._v(" "),a("p",[e._v("For root/ADB users, a list of users will be displayed before installing the app. The app will be installed only for the specified user (or all users if selected).")]),e._v(" "),a("h3",{attrs:{id:"sign-apk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-apk"}},[e._v("#")]),e._v(" Sign APK")]),e._v(" "),a("p",[e._v("Whether to sign the APK files before installing the app. See "),a("a",{attrs:{href:"#apk-signing"}},[e._v("APK signing")]),e._v(" section above to configure signing.")]),e._v(" "),a("h3",{attrs:{id:"install-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-location"}},[e._v("#")]),e._v(" Install location")]),e._v(" "),a("p",[e._v("Choose APK install location. This can be one of "),a("em",[e._v("auto")]),e._v(", "),a("em",[e._v("internal only")]),e._v(" and "),a("em",[e._v("prefer external")]),e._v(". Depending on Android version, the last option may not always install the app in the external storage.")]),e._v(" "),a("h3",{attrs:{id:"installer-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installer-app"}},[e._v("#")]),e._v(" Installer App")]),e._v(" "),a("p",[e._v("Select the installer app, useful for some apps which explicitly checks for installer. This only works for root/ADB users.")]),e._v(" "),a("h2",{attrs:{id:"backup-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-restore"}},[e._v("#")]),e._v(" Backup/Restore")]),e._v(" "),a("p",[e._v("Settings related to "),a("RouterLink",{attrs:{to:"/guide/backup-restore.html"}},[e._v("backup/restore")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"compression-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compression-method"}},[e._v("#")]),e._v(" Compression method")]),e._v(" "),a("p",[e._v("Set which compression method to be used during backups. App Manager supports GZip and BZip2 compression methods, GZip being the default compression method. It doesn't affect the restore of an existing backup.")]),e._v(" "),a("h3",{attrs:{id:"backup-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-options"}},[e._v("#")]),e._v(" Backup Options")]),e._v(" "),a("p",[e._v("Customise the backup/restore dialog.")]),e._v(" "),a("h3",{attrs:{id:"backup-apps-with-android-keystore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-apps-with-android-keystore"}},[e._v("#")]),e._v(" Backup apps with Android KeyStore")]),e._v(" "),a("p",[e._v("Allow backup of apps that has entries in the Android KeyStore (disabled by default). Some apps (such as Signal) may crash if restored. KeyStore backup also doesn't work from Android 9 but still kept as many apps having KeyStore can be restored without problem.")]),e._v(" "),a("h3",{attrs:{id:"encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),a("p",[e._v("Set an encryption method for the backups. AM currently supports OpenPGP only.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Caution")]),e._v(" "),a("p",[e._v("In v2.5.16, App Manager doesn't remember key IDs for a particular backup. You have to remember them yourself. This has been fixed in v2.5.18.")])]),e._v(" "),a("h2",{attrs:{id:"device-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-info"}},[e._v("#")]),e._v(" Device Info")]),e._v(" "),a("p",[e._v("Display Android version, security, CPU, GPU, battery, memory, screen, languages, user info, etc.")])])}),[],!1,null,null,null);t.default=o.exports}}]);