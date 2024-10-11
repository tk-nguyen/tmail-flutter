import '../base/base_scenario.dart';
import '../robots/composer_robot.dart';
import '../robots/thread_robot.dart';
import 'login_with_basic_auth.dart';

class SendEmail extends BaseScenario {
  const SendEmail(
    super.$, 
    {
      required this.loginWithBasicAuthScenario,
      required this.additionalRecipient,
      required this.subject,
      required this.content
    }
  );

  final LoginWithBasicAuth loginWithBasicAuthScenario;
  final String additionalRecipient;
  final String subject;
  final String content;

  @override
  Future<void> execute() async {
    final threadRobot = ThreadRobot($);
    final composerRobot = ComposerRobot($);

    await loginWithBasicAuthScenario.execute();

    await threadRobot.openComposer();
    await threadRobot.expectComposerViewVisible();

    await composerRobot.grantContactPermission();

    await composerRobot.addReceipient(loginWithBasicAuthScenario.email);
    await composerRobot.addReceipient(additionalRecipient);
    await composerRobot.addSubject(subject);
    await composerRobot.addContent(content);
    await composerRobot.sendEmail();
    await composerRobot.expectSendEmailSuccessToast();
  }
}