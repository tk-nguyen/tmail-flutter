import 'package:core/presentation/resources/image_paths.dart';
import 'package:core/presentation/utils/responsive_utils.dart';
import 'package:core/presentation/views/button/tmail_button_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:tmail_ui_user/features/thread/presentation/styles/empty_emails_widget_styles.dart';
import 'package:tmail_ui_user/main/localizations/app_localizations.dart';

typedef OnCreateFiltersActionCallback = Function();

class EmptyEmailsWidget extends StatelessWidget {

  final bool isSearchActive;
  final bool isFilterMessageActive;
  final bool isNetworkConnectionAvailable;
  final OnCreateFiltersActionCallback? onCreateFiltersActionCallback;

  final _responsiveUtils = Get.find<ResponsiveUtils>();
  final _imagePaths = Get.find<ImagePaths>();

  EmptyEmailsWidget({
    Key? key,
    this.isSearchActive = false,
    this.isFilterMessageActive = false,
    this.isNetworkConnectionAvailable = true,
    this.onCreateFiltersActionCallback,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final childWidget = Padding(
      padding: EmptyEmailsWidgetStyles.padding,
      child: Column(
        mainAxisAlignment: _responsiveUtils.isScreenWithShortestSide(context)
          ? MainAxisAlignment.start
          : MainAxisAlignment.center,
        children: [
          SvgPicture.asset(
            _imagePaths.icEmptyEmail,
            width: _getIconSize(context, _responsiveUtils),
            height: _getIconSize(context, _responsiveUtils),
            fit: BoxFit.fill
          ),
          Padding(
            padding: EmptyEmailsWidgetStyles.labelPadding,
            child: Text(
              key: const Key('empty_email_message'),
              _getMessageEmptyEmail(context),
              style: const TextStyle(
                color: EmptyEmailsWidgetStyles.labelTextColor,
                fontSize: EmptyEmailsWidgetStyles.createFilterLabelTextSize,
                fontWeight: EmptyEmailsWidgetStyles.createFilterLabelFontWeight
              ),
              textAlign: TextAlign.center,
            ),
          ),
          if (_validateShowCreateRuleButton)
            TMailButtonWidget.fromText(
              key: const Key('create_filter_rule_button_within_empty_email'),
              text: AppLocalizations.of(context).createFilters,
              padding: EmptyEmailsWidgetStyles.createFilterButtonPadding,
              margin: EmptyEmailsWidgetStyles.createFilterButtonMargin,
              backgroundColor: EmptyEmailsWidgetStyles.createFilterButtonBackgroundColor,
              borderRadius: EmptyEmailsWidgetStyles.createFilterButtonBorderRadius,
              width: _responsiveUtils.isPortraitMobile(context) ? double.infinity : null,
              textAlign: TextAlign.center,
              textStyle: const TextStyle(
                fontSize: EmptyEmailsWidgetStyles.createFilterButtonTextSize,
                fontWeight: EmptyEmailsWidgetStyles.createFilterButtonFontWeight,
                color: EmptyEmailsWidgetStyles.createFilterButtonTextColor
              ),
              onTapActionCallback: onCreateFiltersActionCallback,
            )
        ],
      ),
    );
    return Container(
      constraints: const BoxConstraints(maxWidth: EmptyEmailsWidgetStyles.maxWidth),
      alignment: AlignmentDirectional.center,
      child: _responsiveUtils.isScreenWithShortestSide(context)
        ? SingleChildScrollView(child: childWidget)
        : CustomScrollView(
            slivers: [
              SliverFillRemaining(child: childWidget)
            ]
          )
    );
  }

  double _getIconSize(BuildContext context, ResponsiveUtils responsiveUtils) {
    if (responsiveUtils.isMobile(context)) {
      return EmptyEmailsWidgetStyles.mobileIconSize;
    } else if (responsiveUtils.isDesktop(context)) {
      return EmptyEmailsWidgetStyles.desktopIconSize;
    } else {
      return EmptyEmailsWidgetStyles.tabletIconSize;
    }
  }

  bool get _validateShowCreateRuleButton => isNetworkConnectionAvailable
    && !isFilterMessageActive && !isSearchActive && onCreateFiltersActionCallback != null;

  String _getMessageEmptyEmail(BuildContext context) {
    if (!isNetworkConnectionAvailable) {
      return AppLocalizations.of(context).no_internet_connection_try_again_later;
    }
    
    if (isSearchActive) {
      return AppLocalizations.of(context).no_emails_matching_your_search;
    } else {
      if (isFilterMessageActive) {
        return AppLocalizations.of(context).noEmailMatchYourCurrentFilter;
      } else {
        return AppLocalizations.of(context).noEmailInYourCurrentFolder;
      }
    }
  }
}