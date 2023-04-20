## [0.7.7] - 2023-04-14
### Added
- \#1599 Remove notification when read and delete permanent email
- \#1100 Display Answered / Forwarded keywords
- \#1600 No notification for content of Draft, Sent, Outbox, email already seen

### Changed
- \#1598 Dismiss should mark emails in the spam box as seen

### Fixed
- \#1613 When network is down, Tmail shouldn't prompt for a password
- \#1699 Support hide suggestion when scrolling list email to, cc, bcc.
- \#1681 Add a dot at the end of the description
- \#1687 Set name email and counter displayed in a single line
- \#1685 Fix hover and click to button show all or hide attachments
- \#1694 The Cancel/Save button is hidden in IdentityCreatorView
- \#1688 \[Identity\] \[Crashed\] Tmail UI is broken after user create identity successfully by html style
- \#1684 \[Identity\] User click on blank area but system redirect user to 404 not found page <weird link>
- \#1679 \[Identity\] Button 'X' : Sometime it's hidden, sometime it's displayed
- \#1693 \[Identity\] There are 2 cursors on Create Identity screen
- \#1667 \[Energy-Economy\] Do not request spam on every email I move
- \#1698 \[Mailbox\] System not redirect correct url when user double click many times to view email in mailbox
- \#1677 \[ManageAccount\]\[Fowarding\] Email validation is not working well
- \#1655 Add a line break after signature in composer
- \#1665 App grid: Manage 3 apps and less beautifully
- \#1544 \[UX\] User can not move to another fields by press TAB
- \#1663 \[Compose\] Use cannot click to compose after system display an error message
- \#1654 \[SLO\] Redirect to SLO page of the OIDC provider
- \#1631 \[Notification\] User cannot receive new email notification
- \#1666 \[COMPOSER\] Keyboard overriding rich text context menu on mobile
- \#1569 \[BackgroundApp\] Android system keeps showing an app that run at background
- \#1749 \[Drats\] User cannot save drafts or send email if that email already at drafts mailbox

## [0.7.6] - 2023-04-06
### Added
- \#1510 right click for app grid item
- Handle text, contact in Share with TeamMail in Android
- Translation
- \#1581 Support RTL
- \#1606 support relative path in Session

### Changed
- \#1487 upgrade to Flutter 3.7.5
- Update the error handler with BadCredentialException
- Increase minimum supported iOS version to 11
- Cache settings for nginx
- \#997 new design for date-range-picker

### Fixed
- Auto scroll when expand mailbox
- \#1472 fix position of Toast in mobile
- \#1513 richtext toolbar is lost in mobile
- \#1477 fix search
- \#1521 fix can not scroll to read long email in Android
- \#1527 fix focus in composer
- \#1162 fix open link
- \#1549 fix overlapped long text
- \#1539 support space for inputing name in auto suggestion in Search
- \#1528 input indicator is cut at the bottom of composer
- \#1594 can not send email because Controller is killed
- Fix drag n drop email
- \#1573 fix cursor in Android
- \#1611 prevent blocking when user input html in vacation
- \#1604 missing capability for team mailbox
- \#1440 user can not sign in with OIDC when press back button in auth page
- \#1657 fix broked infinite scroll

### Removed
- Remove menu action of Team Mailbox
- \#1508 setBackgroundMessageHandler
- \#1512 remove plain text input for signature
- \#1469 remove animation when navigating screen

[0.7.7]: https://github.com/linagora/tmail-flutter/releases/tag/v0.7.7
[0.7.6]: https://github.com/linagora/tmail-flutter/releases/tag/v0.7.6