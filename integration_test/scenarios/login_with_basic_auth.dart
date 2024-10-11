import '../base/base_scenario.dart';
import '../robots/login_robot.dart';
import '../robots/thread_robot.dart';

class LoginWithBasicAuth extends BaseScenario {
  const LoginWithBasicAuth(
    super.$, 
    {
      required this.username,
      required this.hostUrl,
      required this.email,
      required this.password,
    }
  );

  final String username;
  final String hostUrl;
  final String email;
  final String password;

  @override
  Future<void> execute() async {
    final loginRobot = LoginRobot($);
    final threadRobot = ThreadRobot($);

    await loginRobot.expectLoginViewVisible();
    await loginRobot.enterEmail(username);
    await loginRobot.enterHostUrl(hostUrl);

    await loginRobot.enterBasicAuthEmail(email);
    await loginRobot.enterBasicAuthPassword(password);
    await loginRobot.loginBasicAuth();

    await threadRobot.grantNotificationPermission();

    await threadRobot.expectThreadViewVisible();
  }
}