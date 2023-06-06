import 'package:jmap_dart_client/jmap/mail/email/email.dart';
import 'package:model/extensions/email_extension.dart';
import 'package:model/extensions/email_id_extensions.dart';
import 'package:model/extensions/identity_id_extension.dart';
import 'package:model/extensions/mailbox_id_extension.dart';
import 'package:model/mailbox/select_mode.dart';
import 'package:tmail_ui_user/features/composer/domain/model/email_request.dart';
import 'package:tmail_ui_user/features/composer/domain/model/sending_email.dart';
import 'package:tmail_ui_user/features/offline_mode/model/sending_email_hive_cache.dart';

extension SendingEmailExtension on SendingEmail {
  SendingEmailHiveCache toHiveCache() {
    return SendingEmailHiveCache(
      sendingId,
      email.asString(),
      emailActionType.name,
      createTime,
      sentMailboxId?.asString,
      emailIdDestroyed?.asString,
      emailIdAnsweredOrForwarded?.asString,
      identityId?.asString,
      mailboxNameRequest?.name,
      creationIdRequest?.value
    );
  }

  EmailRequest toEmailRequest({Email? emailEdit}) {
    return EmailRequest(
      email: emailEdit ?? email,
      emailActionType: emailActionType,
      sentMailboxId: sentMailboxId,
      emailIdDestroyed: emailIdDestroyed,
      emailIdAnsweredOrForwarded: emailIdAnsweredOrForwarded,
      identityId: identityId
    );
  }

  SendingEmail toggleSelection() {
    return SendingEmail(
      sendingId: sendingId,
      email: email,
      emailActionType: emailActionType,
      createTime: createTime,
      sentMailboxId: sentMailboxId,
      emailIdDestroyed: emailIdDestroyed,
      emailIdAnsweredOrForwarded: emailIdAnsweredOrForwarded,
      identityId: identityId,
      mailboxNameRequest: mailboxNameRequest,
      creationIdRequest: creationIdRequest,
      selectMode: selectMode == SelectMode.INACTIVE ? SelectMode.ACTIVE : SelectMode.INACTIVE
    );
  }

  SendingEmail unSelected() {
    return SendingEmail(
      sendingId: sendingId,
      email: email,
      emailActionType: emailActionType,
      createTime: createTime,
      sentMailboxId: sentMailboxId,
      emailIdDestroyed: emailIdDestroyed,
      emailIdAnsweredOrForwarded: emailIdAnsweredOrForwarded,
      identityId: identityId,
      mailboxNameRequest: mailboxNameRequest,
      creationIdRequest: creationIdRequest,
      selectMode: SelectMode.INACTIVE
    );
  }
}