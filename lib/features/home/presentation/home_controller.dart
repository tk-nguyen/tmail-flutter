import 'package:core/utils/platform_info.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_downloader/flutter_downloader.dart';
import 'package:jmap_dart_client/jmap/core/session/session.dart';
import 'package:tmail_ui_user/features/base/reloadable/reloadable_controller.dart';
import 'package:tmail_ui_user/features/caching/config/hive_cache_config.dart';
import 'package:tmail_ui_user/features/cleanup/domain/model/cleanup_rule.dart';
import 'package:tmail_ui_user/features/cleanup/domain/model/email_cleanup_rule.dart';
import 'package:tmail_ui_user/features/cleanup/domain/model/recent_login_url_cleanup_rule.dart';
import 'package:tmail_ui_user/features/cleanup/domain/model/recent_login_username_cleanup_rule.dart';
import 'package:tmail_ui_user/features/cleanup/domain/model/recent_search_cleanup_rule.dart';
import 'package:tmail_ui_user/features/cleanup/domain/usecases/cleanup_email_cache_interactor.dart';
import 'package:tmail_ui_user/features/cleanup/domain/usecases/cleanup_recent_login_url_cache_interactor.dart';
import 'package:tmail_ui_user/features/cleanup/domain/usecases/cleanup_recent_login_username_interactor.dart';
import 'package:tmail_ui_user/features/cleanup/domain/usecases/cleanup_recent_search_cache_interactor.dart';
import 'package:tmail_ui_user/main/routes/app_routes.dart';
import 'package:tmail_ui_user/main/routes/route_navigation.dart';
import 'package:tmail_ui_user/main/routes/route_utils.dart';
import 'package:tmail_ui_user/main/utils/email_receive_manager.dart';
import 'package:tmail_ui_user/main/utils/ios_notification_manager.dart';

class HomeController extends ReloadableController {
  final CleanupEmailCacheInteractor _cleanupEmailCacheInteractor;
  final EmailReceiveManager _emailReceiveManager;
  final CleanupRecentSearchCacheInteractor _cleanupRecentSearchCacheInteractor;
  final CleanupRecentLoginUrlCacheInteractor _cleanupRecentLoginUrlCacheInteractor;
  final CleanupRecentLoginUsernameCacheInteractor _cleanupRecentLoginUsernameCacheInteractor;

  IOSNotificationManager? _iosNotificationManager;

  HomeController(
    this._cleanupEmailCacheInteractor,
    this._emailReceiveManager,
    this._cleanupRecentSearchCacheInteractor,
    this._cleanupRecentLoginUrlCacheInteractor,
    this._cleanupRecentLoginUsernameCacheInteractor,
  );

  @override
  void onInit() {
    if (PlatformInfo.isMobile) {
      _initFlutterDownloader();
      _registerReceivingFileSharing();
    }
    if (PlatformInfo.isIOS) {
      _registerNotificationClickOnIOS();
    }
    super.onInit();
  }

  @override
  void onReady() {
    _cleanupCache();
    super.onReady();
  }

  @override
  void handleReloaded(Session session) {
    pushAndPopAll(
      RouteUtils.generateNavigationRoute(AppRoutes.dashboard),
      arguments: session);
  }

  void _initFlutterDownloader() {
    FlutterDownloader
      .initialize(debug: kDebugMode)
      .then((_) => FlutterDownloader.registerCallback(downloadCallback));
  }

  static void downloadCallback(String id, DownloadTaskStatus status, int progress) {}

  Future<void> _cleanupCache() async {
    await HiveCacheConfig.instance.onUpgradeDatabase(cachingManager);

    await Future.wait([
      _cleanupEmailCacheInteractor.execute(EmailCleanupRule(Duration.defaultCacheInternal)),
      _cleanupRecentSearchCacheInteractor.execute(RecentSearchCleanupRule()),
      _cleanupRecentLoginUrlCacheInteractor.execute(RecentLoginUrlCleanupRule()),
      _cleanupRecentLoginUsernameCacheInteractor.execute(RecentLoginUsernameCleanupRule()),
    ], eagerError: true).then((_) => getAuthenticatedAccountAction());
  }

  void _registerReceivingFileSharing() {
    _emailReceiveManager.registerReceivingFileSharingStreamWhileAppClosed();
  }

  void _registerNotificationClickOnIOS() {
    _iosNotificationManager = getBinding<IOSNotificationManager>();
    _iosNotificationManager?.listenClickNotification();
  }
}