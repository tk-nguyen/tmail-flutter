
import 'package:core/utils/app_logger.dart';
import 'package:jmap_dart_client/jmap/mail/email/email.dart';
import 'package:model/extensions/email_extension.dart';
import 'package:model/extensions/list_email_header_extension.dart';
import 'package:tmail_ui_user/features/email/presentation/model/smime_signature_status.dart';
import 'package:tmail_ui_user/features/email/presentation/utils/smime_signature_constant.dart';

extension EmailExtension on Email {

  SMimeSignatureStatus get sMimeStatus {
    final status = sMimeStatusHeaderParsed.isNotEmpty
      ? sMimeStatusHeaderParsed
      : headers?.toSet().sMimeStatus;
    log('EmailExtension::sMimeStatus: $status');
    if (status == SMimeSignatureConstant.GOOD_SIGNATURE) {
      return SMimeSignatureStatus.goodSignature;
    } else  if (status == SMimeSignatureConstant.BAD_SIGNATURE) {
      return SMimeSignatureStatus.badSignature;
    } else {
      return SMimeSignatureStatus.notSigned;
    }
  }
}