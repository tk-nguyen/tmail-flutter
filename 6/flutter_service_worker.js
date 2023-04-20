'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_1.part.js": "2ce4fcbc0d14cc9a90299718cd2e1121",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"login-callback.html": "e17f83d4982ea3cce6e692b31c4b4beb",
"index.html": "a885cfbdcbbbeebb7f1a78c0f5e6eef3",
"/": "a885cfbdcbbbeebb7f1a78c0f5e6eef3",
"main.dart.js_3.part.js": "19106e5291ce838468621e315a5025df",
"main.dart.js_7.part.js": "2de1f30ba829c7cd1ecfd18c1e1cc94e",
"main.dart.js": "451571d9c1fe957a1d5b749a4f2f320d",
"icons/Icon-maskable-192.png": "a20f18ca2acdeb0f82221e73d5ca96c0",
"icons/Icon-512.png": "bec1c499090c3b4697183702b7e7287e",
"icons/Icon-maskable-512.png": "bec1c499090c3b4697183702b7e7287e",
"icons/Icon-192.png": "a20f18ca2acdeb0f82221e73d5ca96c0",
"main.dart.js_6.part.js": "48f843b6b57a9ada4d64ffdc0a6cec19",
"manifest.json": "349bf3eb9699317dca24e90c8c657f3c",
"main.dart.js_2.part.js": "8851f28ffbc3994cd147de247c793d5c",
"favicon.svg": "836063f2415781870f72c38e4f983e6f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"firebase-messaging-sw.js": "f0896b660cb3697e942d86bbe07ebc69",
"main.dart.js_10.part.js": "62b56d7904f42801f9db4d97cc099e1c",
"main.dart.js_4.part.js": "fbc6d8a8b83a6fb081340c31ffdf7f97",
"main.dart.js_8.part.js": "101d8341641415f896433cdded72e615",
"logout-callback.html": "999326dc9a0f37c9a9a4280b4a35dc51",
"main.dart.js_9.part.js": "d237420247b08949188585a75079acb6",
"version.json": "e462c5633aa76d0dd81849f3a2c7d9e8",
"assets/env.file": "e8b2d85ce5fa466de83d8ca7b236724c",
"assets/configurations/icons/ic_inbox_app.svg": "0a14343b2c77456f832136155b210104",
"assets/configurations/icons/ic_calendar_app.svg": "4e330b1094bfd2884116e2acc5995616",
"assets/configurations/icons/ic_contacts_app.svg": "e1c57d1b05a1a35ef7b8097edef5bb0c",
"assets/configurations/icons/ic_linshare_app.png": "39ceaf19663de3886128723d908b79b3",
"assets/configurations/icons/ic_twake_app.svg": "385644d434d599694464ed0214a64c70",
"assets/configurations/env.fcm": "97d6804936ef04db13fcc840787c67cd",
"assets/configurations/app_dashboard.json": "2b7bca138d3e78b9913761082e429513",
"assets/packages/rich_text_composer/assets/images/ic_attachments_composer.svg": "694d8aaff5805aad6498911606f87f37",
"assets/packages/rich_text_composer/assets/images/ic_background_color.svg": "14340728f65219c5c373201d623f0499",
"assets/packages/rich_text_composer/assets/images/ic_bullet_order.svg": "4a568c145c9beb93c3786814ae81592a",
"assets/packages/rich_text_composer/assets/images/ic_back.svg": "64c4d396dc8896dd66c81c729ca18480",
"assets/packages/rich_text_composer/assets/images/ic_indent_format.svg": "2ece9943787281dbce9d183cdf7472d0",
"assets/packages/rich_text_composer/assets/images/ic_align_center.svg": "697ab86e70c0dbc4806cc38f85564c11",
"assets/packages/rich_text_composer/assets/images/ic_insert_image.svg": "0ba41f01086e80bf3bc5bddd223d2a7c",
"assets/packages/rich_text_composer/assets/images/ic_rich_text.svg": "aa0934304bf6b259f4b68f6657c1e071",
"assets/packages/rich_text_composer/assets/images/ic_arrow_right.svg": "f368d1d36bdcc88880c9886ac7f83616",
"assets/packages/rich_text_composer/assets/images/ic_align_left.svg": "d01f80c21222f8bfdcbdff9f7daeb35d",
"assets/packages/rich_text_composer/assets/images/ic_text_color.svg": "b81ac47f382ef4af7c4fd3c16cc2b1ff",
"assets/packages/rich_text_composer/assets/images/ic_strike_through.svg": "805154f85caab87f3d94af557d9cef56",
"assets/packages/rich_text_composer/assets/images/ic_outdent_format.svg": "bca9e9d52482cd8ebe7ac6b6f0b90ebb",
"assets/packages/rich_text_composer/assets/images/ic_bold_style.svg": "4bd91f73098b905e30fb3198a6419a6b",
"assets/packages/rich_text_composer/assets/images/ic_under_line.svg": "ddec8799e738f5c4e9ddf03bbd5f572e",
"assets/packages/rich_text_composer/assets/images/ic_dismiss.svg": "6f3a3a7c96d87c1bb476396b2e4ac57b",
"assets/packages/rich_text_composer/assets/images/ic_align_right.svg": "f68f0f121d71b2e31b462e447b8aa461",
"assets/packages/rich_text_composer/assets/images/ic_number_order.svg": "4f493dda1e48be8dd1c000ba4f193d8e",
"assets/packages/rich_text_composer/assets/images/ic_italic_style.svg": "693c3c397757ef318adf9a445d80854b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_date_range_picker/assets/images/ic_calendar.svg": "b74013e1ffd12d43f38b4401e9c1ed79",
"assets/packages/flutter_date_range_picker/assets/images/ic_date_range.svg": "d230e034d2dc232bec9314bac9e66272",
"assets/packages/flutter_date_range_picker/assets/images/ic_close.svg": "a1f2e6b8d675af3d2cf602f7c87636cc",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "b043b84f5aab87d7dffddbcf72fa253f",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "dc5e7f18c8d36ac1d3d4753a87c98d0a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "f7b0bb288494226c94e71b514cd2c060",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "5d950c9d8d53ff7a2fce2a385ef93505",
"assets/packages/html_editor_enhanced/assets/summernote.html": "0a4697b4b9d3eba6074a152e66b83aaf",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "b11db8ec59b494470e6a9ecfe498e67a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "1ab07b822bdb41c14c6fab2d4d041d4a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "4dfd5e5693c0331263a39042fc45fa43",
"assets/NOTICES": "b2b64ed10adc2342fecd67607de5a0a8",
"assets/AssetManifest.json": "8d1f7f9874dcc7cb2bfb5fc7d6efb151",
"assets/assets/icons/icon_launcher.png": "9a72c770f62762ce0d9fa175dc412431",
"assets/assets/icons/icon_branding.png": "1571a89b62ccd25570c70620d7bae08c",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/assets/fonts/Inter/Inter-Medium.ttf": "1aa99aa25c72307cb7f16fae35e8c9d1",
"assets/assets/fonts/Inter/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/assets/images/ic_mailbox_sent.svg": "f39350a31dd3e977a78538720e767b3d",
"assets/assets/images/ic_composer_menu.svg": "53a63903bf144915755486a317dd34c9",
"assets/assets/images/ic_attachments_composer.svg": "cf85e494677f7ac06cb0471f45f44486",
"assets/assets/images/ic_reply_all.svg": "1d33b3fde39c9512373c53a6eff88055",
"assets/assets/images/logo_tmail.png": "55cefbea2f2bdc8a0758a913073168e1",
"assets/assets/images/ic_send_mobile.svg": "a76cce0607b568c9b0f1c6da700a8719",
"assets/assets/images/ic_email_rules.svg": "416b2e53f29f13fc9189151f074249b9",
"assets/assets/images/ic_style_strikethrough.svg": "bb810ddd9d32ba522142927c61066a78",
"assets/assets/images/ic_delete_mailbox.svg": "14a8434ef7879906ae5f30beedc746e6",
"assets/assets/images/ic_delete_rule_mobile.svg": "aaa74b81304d14dce4266b242e9d25fd",
"assets/assets/images/ic_file_epup.svg": "52ee75af6f88c6f68b94e6518c4f4bd5",
"assets/assets/images/ic_close_composer.svg": "a8898bbd675d4a4fc6d7c773e3c9cdda",
"assets/assets/images/ic_photo_library.svg": "900c84a7728469c4d0a9e207b4c6bfc5",
"assets/assets/images/ic_mailbox_template.svg": "38be3b847d66ade2eb2b3387b7ec490b",
"assets/assets/images/ic_delete_composer.svg": "ad571cc11d3fe209b193e2601fcbf478",
"assets/assets/images/ic_back.svg": "bb7d650768ee26ec1a96e42b1314910a",
"assets/assets/images/ic_compose.svg": "aaf255765e53c9e459942f5da2b11bc9",
"assets/assets/images/ic_send_success_toast.svg": "d11d51d83ee697a82ec73cd4c083a403",
"assets/assets/images/power_by_linagora.svg": "d87099a63e2b4b7c1bd9e0974ddccd18",
"assets/assets/images/ic_spam_report_enable.svg": "6bef2b0dc8c060edddcd8d7b7a77414f",
"assets/assets/images/ic_clock.svg": "8745fff66bd85ad418d17f08aaecae6d",
"assets/assets/images/ic_unselected.svg": "f99cacd744992724c85759bea03e41d8",
"assets/assets/images/ic_eye_off.svg": "148693b0ab4acfb81cbb09535cb76249",
"assets/assets/images/ic_open_edit_rule.svg": "25d7b76cb02d1558b079a3402a89aa34",
"assets/assets/images/ic_style_header.svg": "35aac968e1cf25871440f9db56eff233",
"assets/assets/images/ic_style_color.svg": "e3076ffc422a18915b0fddf07096cb82",
"assets/assets/images/ic_chevron_up.svg": "bbfe45aee1659ac9e68264b0385a2a5e",
"assets/assets/images/ic_align_indent.svg": "dacff161e9d518dab89bf7e7b265cf21",
"assets/assets/images/ic_menu_drawer.svg": "6caad7c1c5ddfc8c8ceceb4c64f30c55",
"assets/assets/images/ic_style_italic.svg": "8a894116f571bee93072407aee8b2ddb",
"assets/assets/images/ic_newer.svg": "d354d224eaa843f725234ed091709d08",
"assets/assets/images/ic_close_mailbox.svg": "6f3a3a7c96d87c1bb476396b2e4ac57b",
"assets/assets/images/ic_edit_rule_mobile.svg": "0a39a45ac40ec0a26d99c6bd7338863c",
"assets/assets/images/ic_calendar.svg": "71abe7aa08a26bda1f47647efe20d90c",
"assets/assets/images/3.0x/logo_tmail.png": "86d9ae5bfbe6e79b47eb0433fce1d2d5",
"assets/assets/images/3.0x/login_graphic.png": "a78f781de58ef75984321379ec79ad7b",
"assets/assets/images/ic_file_pdf.svg": "b6103b838016497c3470b6914bbde44f",
"assets/assets/images/ic_forwarded.svg": "d601cda12df35290072e50b9d314d0a6",
"assets/assets/images/ic_sign_out.svg": "170525d6bd63ffbefc27f9303c2b39d3",
"assets/assets/images/ic_add_email_forwards.svg": "d3a75c4582338810dba8d4f4cd6bd6c8",
"assets/assets/images/ic_close_advanced_search.svg": "6f3a3a7c96d87c1bb476396b2e4ac57b",
"assets/assets/images/ic_delete_attachment.svg": "af6adebd6a17b2b578184e00865bd0f9",
"assets/assets/images/ic_profiles.svg": "5c5b11168e2987f701f97ec327d30ca5",
"assets/assets/images/ic_request_read_receipt.svg": "25d7b76cb02d1558b079a3402a89aa34",
"assets/assets/images/ic_delete_rule.svg": "862a11cca3a8dd3ad2c2d4c15cbf02fd",
"assets/assets/images/ic_fullscreen_composer.svg": "66b304a161c49aa1e47ab788ab85518d",
"assets/assets/images/ic_mailbox_visibility.svg": "196a08bbb59cdcbf967737923d1b1d9a",
"assets/assets/images/ic_collapse_folder.svg": "213bdb791d418066bcee7aad86cb76d4",
"assets/assets/images/ic_cancel_selection.svg": "49258714b864379381e558ad5a479037",
"assets/assets/images/ic_composer_close.svg": "9fc321d5183eb49f6e560d806c7e6da1",
"assets/assets/images/ic_unspam.svg": "8392d6bf0e99e8302d816073905cc8ad",
"assets/assets/images/ic_mailbox_allmail.svg": "15f99c2e99539403673cb3b7c59ac960",
"assets/assets/images/ic_delete.svg": "068b3ada433bbf0af436d7129794a005",
"assets/assets/images/ic_switch_on.svg": "d0368f368dcee4ce7fdd92e8b68196e4",
"assets/assets/images/ic_align_center.svg": "f97c31b8f6b6bfb052fc4b110258bc0a",
"assets/assets/images/ic_edit_rule.svg": "a7550240369c715f1573f66b13f90b7d",
"assets/assets/images/ic_insert_image.svg": "2da89c1c9dfd5a2da7fa247f71c6255f",
"assets/assets/images/ic_hide_mailbox.svg": "186109f637d636b13615f560da945cd3",
"assets/assets/images/ic_quotas_warning.svg": "8fddfac9e45c58e6571da248bb0d07b1",
"assets/assets/images/ic_refresh.svg": "28870ff3261e7cf8134c016035b1ed82",
"assets/assets/images/ic_order_bullet.svg": "49eb8d65f29c5951bd77af6ce25ac01a",
"assets/assets/images/ic_share.svg": "d2e7e45a6341ab7a3fee2d5d6e3bf725",
"assets/assets/images/ic_read_receipt_message.svg": "9a6049250ddc1dac4dbb52d10e53bd54",
"assets/assets/images/ic_folder_mailbox.svg": "b91e897f543eec65257fcac6475f8ad4",
"assets/assets/images/ic_select_all.svg": "4eea61d844c4cb613ade272ae9da6c59",
"assets/assets/images/ic_clock_sb.svg": "6b11d3616dad9ab7534894e4c1bdfdd5",
"assets/assets/images/ic_delete_trash.svg": "49667f2cd1bfd99b4fc772a9d0764ed1",
"assets/assets/images/ic_minimize.svg": "cbb74d1bc55f6fd75f8e3de3d81aea67",
"assets/assets/images/ic_edit_identity.svg": "552ed0dc50da64d876d320e46e916916",
"assets/assets/images/ic_read.svg": "fbdb3580b4897c1ccfb4d3a72b3ab499",
"assets/assets/images/ic_unstar.svg": "ea65ea3f1d56d5ee8686f68524505783",
"assets/assets/images/ic_open_in_new_tab.svg": "b6b83e09af1516730cfa644c24cdadfb",
"assets/assets/images/ic_team.svg": "301e7656aaa87e36b18aaf52a4e0090a",
"assets/assets/images/ic_eye.svg": "d1d4eed6159e0f4d91d18a42084494d0",
"assets/assets/images/ic_send_toast.svg": "74be9684f6efede0b588eac370ae5f9e",
"assets/assets/images/ic_mailbox_drafts.svg": "24f416f091c45e776dd05a83f73f84d2",
"assets/assets/images/ic_file_zip.svg": "afe91c1b84760d68ae972816411f4a01",
"assets/assets/images/ic_arrow_down.svg": "0d2c5b794ebf813b30033d8d56a4b6dc",
"assets/assets/images/ic_style_code_view.svg": "291af9d0211eff203056e99b66e0ac6c",
"assets/assets/images/ic_add_identity.svg": "84ce3fa37a80b33c60ac700e9c14d821",
"assets/assets/images/ic_star.svg": "286e5718a1c028877f548a15063254d7",
"assets/assets/images/login_graphic.png": "417c900233b0a40e2b54a168fa557e4c",
"assets/assets/images/ic_mailbox_archived.svg": "4b08e48ff47df0f25b04818a90e5c251",
"assets/assets/images/ic_empty.svg": "8267e9631b86662e1193982f310f4c9c",
"assets/assets/images/ic_file_pptx.svg": "13609f02cca269fc53e2d4d5efb9b92c",
"assets/assets/images/ic_reply.svg": "44dd849ae84ecc6987379e0285d3777d",
"assets/assets/images/ic_user_sb.svg": "9d016cc35390c97879c59f3b18f46737",
"assets/assets/images/ic_read_toast.svg": "3d61bed666c30e4897ba4ddd2db151fc",
"assets/assets/images/ic_integration.svg": "023ffe95eaa96836aff8daacda51471d",
"assets/assets/images/ic_filter_message_attachments.svg": "5b3bb2d466b299521d183fffaaca226d",
"assets/assets/images/ic_align_justify.svg": "38679aed5f484938ad0b35d41ef245b7",
"assets/assets/images/ic_chevron_down_outline.svg": "f37813666a96b2c1371c44b76c9cbbf5",
"assets/assets/images/ic_checked.svg": "9ab2323d331b8403e6b82d141d5b2fd1",
"assets/assets/images/ic_selected.svg": "2d654da79ce81512b4a441d26fe2e4af",
"assets/assets/images/ic_hide_folder.svg": "235fbc8a7c1aab6ec53311140f6b8a94",
"assets/assets/images/ic_fullscreen_exit.svg": "4b01fe26706fa68d5857821cc9dd92a5",
"assets/assets/images/ic_file_xlsx.svg": "d9d193bdaac12c6dea2869dca7b633ee",
"assets/assets/images/ic_setting.svg": "02a170c8f60aa5200f1945f8949f3283",
"assets/assets/images/ic_vacation.svg": "4f1b6fbb221ed730ecf72753ca5b0bbc",
"assets/assets/images/ic_add_new_rule.svg": "d3a75c4582338810dba8d4f4cd6bd6c8",
"assets/assets/images/ic_email.svg": "95d2db306ff4ac03f4da34171dca7c31",
"assets/assets/images/ic_reply_and_forward.svg": "47c114d918b36811a8cdc39065917c92",
"assets/assets/images/ic_jmap_standard.svg": "7e6128f852ad6fd61ae2032ca9f16f58",
"assets/assets/images/ic_delete_dialog_identity.svg": "3199c2b9c9781ef2c7cdc8177356fff1",
"assets/assets/images/ic_move.svg": "f67f1bcfafaa4167748c164fbc2a8542",
"assets/assets/images/ic_align_outdent.svg": "cf63033a5f4deaa11e1674fffb9961a2",
"assets/assets/images/ic_filter_advanced.svg": "db408733ab3f5fd012c87811ff595cfb",
"assets/assets/images/ic_filter_selected.svg": "fb2fbc804967b0936bc5445dab7f9159",
"assets/assets/images/ic_unread_status.svg": "498f3d41d06bdef7ef0e29cf8f294180",
"assets/assets/images/ic_older.svg": "08f88e6ac22ab09d6ba160818b1415dc",
"assets/assets/images/ic_add_new_folder.svg": "3856b84a759917b9f5d7afae2d014196",
"assets/assets/images/ic_align_left.svg": "efe1b195f0fd625e2ed295b267b177aa",
"assets/assets/images/ic_toast_success_message.svg": "d9b3e17d7e8c451881bc70902368c222",
"assets/assets/images/ic_spam_report_disable.svg": "69d332600adfcfe4dcf153e5d733dd19",
"assets/assets/images/ic_edit.svg": "d6b8cbf8df9be9082243dbc9e2606e17",
"assets/assets/images/ic_not_spam.svg": "037338633d034d27b67aa4e90da49020",
"assets/assets/images/ic_create_new_folder.svg": "3a7bea330176543d9bebd0ef3d9462b0",
"assets/assets/images/ic_send_disable.svg": "c9a61da2e795e61d7975ec9d159ee11d",
"assets/assets/images/ic_delete_dialog_recipients.svg": "d2a4d460d9743dcf63304408d5ac0220",
"assets/assets/images/ic_not_connection.svg": "26dfc60276af474deb1319968d79279e",
"assets/assets/images/ic_selected_recipient.svg": "c4c080cb69c075375ace156a9c0d5612",
"assets/assets/images/ic_clear_search_input.svg": "f9863886f9cf0a05cc8e69060584567f",
"assets/assets/images/ic_calendar_sb.svg": "8b0e01e14df6be10046137be930b4ea4",
"assets/assets/images/ic_empty_email.svg": "49c3d7651a08aed2057af5bb95f97e5e",
"assets/assets/images/ic_file_png.svg": "1a249d9f8094cd9c8a4190eec6937724",
"assets/assets/images/ic_more_vertical.svg": "e8878f00ef59db33df0e5644366be96a",
"assets/assets/images/ic_move_mailbox.svg": "8b0ce8f56306ce3e8ccf1f4f0d4fbcfb",
"assets/assets/images/ic_unread_toast.svg": "820ed02881f71ae0e6316a2a2c7f6c70",
"assets/assets/images/ic_unread_email.svg": "e797f233041c058dad6cba9103346f29",
"assets/assets/images/ic_remove_dialog.svg": "23330f9cd6ff6ab58901ac778b22e2fe",
"assets/assets/images/ic_move_email.svg": "fd39d7b5f4470e92287be8a2d95c3f21",
"assets/assets/images/ic_delete_email_forward.svg": "ad571cc11d3fe209b193e2601fcbf478",
"assets/assets/images/ic_selected_sb.svg": "c436ed9cc6a34201fe16f77249fe99aa",
"assets/assets/images/ic_more.svg": "5d073b0cc98808e7b4cd84996fbb3454",
"assets/assets/images/ic_style_arrow_down.svg": "6dfe4fba46e92825254e16aeef4d3406",
"assets/assets/images/ic_search_bar.svg": "769c74273167329138dbee07c289669d",
"assets/assets/images/ic_mailbox_trash.svg": "d7de1f3f683774ad53d2877d8c791a44",
"assets/assets/images/ic_switch_off.svg": "1dea61b34d27477819980d1c5321ce32",
"assets/assets/images/ic_app_dashboard.svg": "e26675b473db301533ffcdb80df8b683",
"assets/assets/images/ic_reply_to.svg": "0f16369affe2ca1fc28e975d148563ca",
"assets/assets/images/ic_delete_dialog_failed.svg": "b3484275216876562a27a5a310e3f54d",
"assets/assets/images/ic_mailbox_inbox.svg": "3957aa13be4f1a9303bdf06fbaa836da",
"assets/assets/images/ic_style_bold.svg": "6d3816b944b01eec9183df76339d2f1f",
"assets/assets/images/ic_expand_folder.svg": "113a3c6b532d50cda61667001a22927d",
"assets/assets/images/ic_filter_message_all.svg": "03fb5d563f5d49e90dfec7fddca9fbe9",
"assets/assets/images/ic_new_message.svg": "f1bd20fdbfbc87af8c6f8a779fda12a1",
"assets/assets/images/ic_undo.svg": "326255be41fcc06d100eb186045552bc",
"assets/assets/images/ic_file_docx.svg": "bb83e8a8b789ed8e2062bd7ceedcbb7e",
"assets/assets/images/ic_chevron_down.svg": "0d58d5f9403396f42d7847d57da1839f",
"assets/assets/images/ic_dropdown.svg": "1dc7f5a0348f27acef2ce4a826604aeb",
"assets/assets/images/ic_order_number.svg": "919acb109d191cb35337655b6d44d332",
"assets/assets/images/ic_quotas.svg": "ebd03ae70fc0b2f34bebc0ce2a2044ce",
"assets/assets/images/ic_download.svg": "258c9a550c9cb881dad103afffb5b207",
"assets/assets/images/ic_align_right.svg": "7a57df14d83f02a37c189c1e99600f68",
"assets/assets/images/ic_logout.svg": "a88d1ac60391b25f69c1a304a154ec2f",
"assets/assets/images/ic_delete_recipient.svg": "5489d0ef86544bf1639ecf091b11a928",
"assets/assets/images/ic_spam.svg": "18a15ba90742d11772bcc06d6742c4d5",
"assets/assets/images/ic_quotas_out_of_storage.svg": "a1407e6998f3d26d6afc7e1915ba3dc2",
"assets/assets/images/ic_language.svg": "67c80df6b19fc0cff44d4acbbfdb9081",
"assets/assets/images/ic_mailbox_spam.svg": "c8cd3c65b31e631179aef0049c059f7b",
"assets/assets/images/ic_quick_creating_rule.svg": "92d1460085044348e97bc4259ba11f23",
"assets/assets/images/ic_style_underline.svg": "761e8a0da348cb1e07a06cdd588a0d92",
"assets/assets/images/ic_send_toast_error.svg": "dd4316ccfedff2a43656218eb421ab5b",
"assets/assets/images/ic_unread.svg": "46f3178ef7ec0d48e7b5defaa8fe3d95",
"assets/assets/images/ic_collapse_attachment.svg": "a674b0645dceade00d9dd7291b194086",
"assets/assets/images/ic_encrypted.svg": "7aa963738b6661e752e7eb41335ded1e",
"assets/assets/images/ic_mark_all_as_read.svg": "08da064e01087b5946a79a9b1758fb2f",
"assets/assets/images/ic_info_circle_outline.svg": "7fb6cc768ba57f5b38b7d316a6b4e06f",
"assets/assets/images/ic_rename_mailbox.svg": "820e456b3bf0808ecadf45f0a761c53f",
"assets/assets/images/ic_attachment_sb.svg": "6fad42760c166347cf22241fdd5fafec",
"assets/assets/images/ic_page_not_found.svg": "b84c5389cfa0093ac844088da5f299c1",
"assets/assets/images/ic_attachment.svg": "2cbe273175ceeadce11bbd4a83a2c105",
"assets/assets/images/ic_filter.svg": "746c63f907cba10e33b416460b4966e3",
"assets/assets/images/ic_close.svg": "de7be355436e19bc5e61aa942596cd99",
"assets/assets/images/ic_chevron.svg": "6a32bc6e648a4b27f83f72bdee00f9a0",
"assets/assets/images/ic_forward.svg": "a6d930f8c60811ab0c602f7d755ccfbb",
"assets/assets/images/ic_clear_text_search.svg": "a8b883beb3bd6d949d06220e80f16cd9",
"assets/assets/images/2.0x/logo_tmail.png": "535cf67ac70d5feca871421514b4b3de",
"assets/assets/images/2.0x/login_graphic.png": "4fd456bb74708e41b168f2663660fe1c",
"assets/assets/images/ic_show_mailbox.svg": "931ab1d9d071c29c8c458903aa1ae226",
"assets/assets/images/ic_delete_toast.svg": "c86c29d35c1f43c9bce122328113aea0",
"assets/assets/images/ic_compose_web.svg": "b6d9e2f87c5d5bdfdbc4cf349391f107",
"assets/assets/images/ic_mark_as_read.svg": "40d0de5550eaecfc61c1201097b6ca20",
"assets/assets/images/ic_download_attachment.svg": "78a424fb3aadbc5b8f591652c379817a",
"main.dart.js_5.part.js": "7dc6f9a359e79057a802e7f52031bbd8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
