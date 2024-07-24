#!/bin/bash

# Install patrol CLI
dart pub global activate patrol_cli

# Enable integration with BrowserStack
if [[ "$RUNNER_OS" == "Linux" ]]; then
    sed -i 's/pl.leancode.patrol.PatrolJUnitRunner/pl.leancode.patrol.BrowserstackPatrolJUnitRunner/' android/app/build.gradle
elif [[ "$RUNNER_OS" == "macOS" ]]; then
    (\
        cd ios; \
        echo "$APPLE_CERTIFICATES_SSH_KEY" > apple-cert-key; \
        fastlane match appstore git_private_key:"$(pwd)/apple-cert-key" --readonly; \
        rm apple-cert-key \
    )
fi

# Secrets
echo "$TMAIL_PATROL_CREDENTIALS" > secrets.env

# Install helper scripts
brew tap leancodepl/tools
brew install mobile-tools

# Run prebuild.sh
./scripts/prebuild.sh
