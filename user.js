//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 115                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);
user_pref("browser.startup.preXulSkeletonUI", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);

/** GFX ***/
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 131072);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 2560000);
user_pref("media.cache_readahead_limit", 9000);
user_pref("media.cache_resume_threshold", 6000);

/** BROWSER CACHE ***/
user_pref("browser.cache.memory.max_entry_size", 153600);

/** NETWORK ***/
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.ssl_tokens_cache_capacity", 32768);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.cert_pinning.enforcement_level", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.privacy_level", 2);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SPECULATIVE CONNECTIONS ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST MODE ***/
user_pref("dom.security.https_first", true);

/** PROXY / SOCKS / IPv6 ***/
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.file.disable_unc_paths", true);
user_pref("network.gio.supported-protocols", "");

/** PASSWORDS AND AUTOFILL ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false);
user_pref("editor.truncate_user_pastes", false);

/** ADDRESS + CREDIT CARD MANAGER ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.formfill.enable", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("permissions.delegation.enabled", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("accessibility.force_disabled", 1);
user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false); // WINDOWS
user_pref("geo.provider.use_corelocation", false); // MAC
user_pref("geo.provider.use_gpsd", false); // LINUX
user_pref("geo.provider.use_geoclue", false); // LINUX
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** TELEMETRY ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("default-browser-agent.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("app.update.suppressPrompts", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("findbar.highlightAll", true);
user_pref("middlemouse.contentLoadURL", false);
user_pref("browser.privatebrowsing.enable-new-indicator", false);

/** FULLSCREEN ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/*** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("layout.css.has-selector.enabled", true);
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/master/Smoothfox.js
// Enter your scrolling prefs below this line:

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// Enter your personal prefs below this line:
user_pref("identity.fxaccounts.enabled", true);
user_pref("gfx.webrender.super-resolution.nvidia", false);

// PREF: increase network predictions
user_pref("network.http.speculative-parallel-limit", 18); // default=6; overrides SecureFox
user_pref("network.dns.disablePrefetch", false); // overrides SecureFox
user_pref("network.dns.disablePrefetchFromHTTPS", false);
user_pref("network.early-hints.enabled", true);
user_pref("network.early-hints.preconnect.enabled", true);
user_pref("network.early-hints.preconnect.max_connections", 20); // FF113
user_pref("browser.urlbar.speculativeConnect.enabled", true); // overrides SecureFox
user_pref("browser.places.speculativeConnect.enabled", true); // overrides SecureFox
user_pref("network.prefetch-next", true); // overrides SecureFox
user_pref("network.predictor.enabled", true); // overrides SecureFox
user_pref("network.predictor.enable-prefetch", true); // overrides SecureFox
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.preresolve-min-confidence", 40); // default=60; alt=10
user_pref("network.predictor.preconnect-min-confidence", 60); // default=90; alt=20
user_pref("network.predictor.prefetch-min-confidence", 80); // default=100; alt=30
user_pref("network.predictor.prefetch-force-valid-for", 3600); // default=10
user_pref("network.predictor.prefetch-rolling-load-count", 120); // default=10
user_pref("network.predictor.max-resources-per-entry", 250); // default=100
user_pref("network.predictor.max-uri-length", 1000); // default=500|

// PREF: lower the priority of network loads for resources on the tracking protection list [NIGHTLY]
// [NOTE] Applicable because we allow for some social embeds
// [1] https://github.com/arkenfox/user.js/issues/102#issuecomment-298413904
user_pref("privacy.trackingprotection.lower_network_priority", true);

// PREF: increase media cache limits
// For higher-end PCs; helps with video playback/buffering
// [1] https://github.com/arkenfox/user.js/pull/941
user_pref("browser.cache.memory.capacity", 1024000); // -1; 256000=256MB, 512000=512MB, 1024000=1GB
user_pref("media.memory_cache_max_size", 512000); // 65536
user_pref("media.memory_caches_combined_limit_kb", 2560000); // 524288
user_pref("media.memory_caches_combined_limit_pc_sysmem", 10); // default=5
user_pref("media.cache_size", 2048000); // 512000
user_pref("media.cache_readahead_limit", 99999); // 60
user_pref("media.cache_resume_threshold", 99999); // 30

// PREF: Preconnect to the autocomplete URL in the address bar
// Firefox preloads URLs that autocomplete when a user types into the address bar.
// Connects to destination server ahead of time, to avoid TCP handshake latency.
// [NOTE] Firefox will perform DNS lookup (if enabled) and TCP and TLS handshake,
// but will not start sending or receiving HTTP data.
// [1] https://www.ghacks.net/2017/07/24/disable-preloading-firefox-autocomplete-urls/
user_pref("browser.urlbar.speculativeConnect.enabled", true);

// PREF: disable mousedown speculative connections on bookmarks and history
user_pref("browser.places.speculativeConnect.enabled", true);

// PREF: disable automatic authentication on Microsoft sites [WINDOWS]
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1695693,1719301
user_pref("network.http.windows-sso.enabled", false);

// PREF: disable all DRM content (EME: Encryption Media Extension)
// EME is a JavaScript API for playing DRMed (not free) video content in HTML.
// A DRM component called a Content Decryption Module (CDM) decrypts, decodes, and displays the video.
// e.g. Netflix, Amazon Prime, Hulu, HBO, Disney+, Showtime, Starz, DirectTV
// [SETTING] General>DRM Content>Play DRM-controlled content
// [TEST] https://bitmovin.com/demos/drm
// [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next
// [2] https://old.reddit.com/r/firefox/comments/10gvplf/comment/j55htc7
user_pref("media.eme.enabled", false); // Fuck DRM

// PREF: number of usages of the web console
// If this is less than 5, then pasting code into the web console is disabled
user_pref("devtools.selfxss.count", 9999); // https://www.youtube.com/watch?v=OgIRAjnnJzI

// PREF: disable Push Notifications API [FF44+]
// Push is an API that allows websites to send you (subscribed) messages even when the site
// isn't loaded, by pushing messages to your userAgentID through Mozilla's Push Server.
// You shouldn't need to disable this.
// [WHY] Push requires subscription
// [NOTE] To remove all subscriptions, reset "dom.push.userAgentID"
// [1] https://support.mozilla.org/en-US/kb/push-notifications-firefox
// [2] https://developer.mozilla.org/en-US/docs/Web/API/Push_API
// [3] https://www.reddit.com/r/firefox/comments/fbyzd4/the_most_private_browser_isnot_firefox/
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");

// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
// from https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", 1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting", 1.0);
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400

// PREF: smoother font
// [1] https://old.reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);

// PREF: use DirectWrite everywhere like Chrome [WINDOWS]
// [1] https://kb.mozillazine.org/Thunderbird_6.0,_etc.#Font_rendering_and_performance_issues
// [2] https://old.reddit.com/r/firefox/comments/wvs04y/comment/ilklzy1/?context=3
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref(
  "gfx.font_rendering.cleartype_params.force_gdi_classic_for_families",
  ""
);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 6);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);

// PREF: use macOS Appearance Panel text smoothing setting when rendering text [macOS]
user_pref("gfx.use_text_smoothing_setting", true);

// PREF: URL bar suggestions (bookmarks, history, open tabs) / dropdown options in the URL bar
user_pref("browser.urlbar.suggest.bookmarks", true);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.openpage", true);

// PREF: Enforce user interaction for security by always asking where to download
// [SETTING] General>Downloads>Always ask you where to save files
// false=the user is asked what to do
user_pref("browser.download.useDownloadDir", true);

// PREF: Disable Reader mode
// Firefox will not have to parse webpage for Reader when navigating.
// Minimal performance impact.
user_pref("reader.parse-on-load.enabled", false);

// PREF: JPEG XL image format [NIGHTLY]
// [1] https://cloudinary.com/blog/the-case-for-jpeg-xl
user_pref("image.jxl.enabled", true);

// PREF: disable efficiency mode [WINDOWS]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1796525
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1800412
// [3] https://old.reddit.com/r/firefox/comments/107fj69/how_can_i_disable_the_efficiency_mode_on_firefox/
user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

// Compact mode enabled
user_pref("browser.uidensity", 1);

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
