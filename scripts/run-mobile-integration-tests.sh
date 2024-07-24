#!/bin/bash

# This is to generate gradlew
flutter build apk --config-only

# This builds and uploads APK to browserstack
export BS_PROJECT=tmail-flutter

if [[ "$RUNNER_OS" == "Linux" ]]; then
    sed -i 's/pl.leancode.patrol.PatrolJUnitRunner/pl.leancode.patrol.BrowserstackPatrolJUnitRunner/' android/app/build.gradle
    # List of supported devices: https://www.browserstack.com/list-of-browsers-and-platforms/app_automate
    export BS_ANDROID_DEVICES='["Samsung Galaxy S24-14.0"]'
    bs_android --verbose
elif [[ "$RUNNER_OS" == "macOS" ]]; then
    bs_ios --verbose
fi
