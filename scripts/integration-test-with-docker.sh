#!/bin/bash

# Install ngrok
echo "Installing tunnelmole..."
npm install -g tunnelmole

# Install patrol CLI
echo "Installing patrol CLI..."
dart pub global activate patrol_cli
flutter build apk --config-only

# Forward traffic to tmail-backend
tmole --port 80 >tmole.log 2>&1 &
until grep 'https' tmole.log; do
    echo "Waiting for tunnelmole to connect..."
    sleep 2
done

export BASIC_AUTH_URL=$(grep 'https' tmole.log | awk '{ print $1 }')

cd backend-docker

# Generate keys for tmail backend
echo "Generating keys for tmail-backend..."
openssl genpkey -algorithm rsa -pkeyopt rsa_keygen_bits:4096 -out jwt_privatekey
openssl rsa -in jwt_privatekey -pubout -out jwt_publickey

# Replace content of jmap.properties with url.prefix=$BASIC_AUTH_URL
sed -i "s|url.prefix=.*|url.prefix=$BASIC_AUTH_URL|" jmap.properties

echo "Starting services and adding users..."
docker compose up -d
# Wait till the service is started to add users
until (docker compose logs tmail-backend | grep -i "JAMES server started"); do
    echo "Waiting for tmail-backend to start..."
    sleep 2
done
export BOB="bob"
export ALICE="alice"
export DOMAIN="example.com"
docker exec tmail-backend james-cli AddUser "$BOB@$DOMAIN" "$BOB"
docker exec tmail-backend james-cli AddUser "$ALICE@$DOMAIN" "$ALICE"

cd ..

echo "Building the app and running tests..."
flutter build apk --config-only
patrol build android -v \
    --dart-define=USERNAME="$BOB" \
    --dart-define=PASSWORD="$BOB" \
    --dart-define=ADDITIONAL_MAIL_RECIPIENT="$ALICE@$DOMAIN" \
    --dart-define=BASIC_AUTH_EMAIL="$BOB@$DOMAIN" \
    --dart-define=BASIC_AUTH_URL="$BASIC_AUTH_URL"
gcloud firebase test android run \
    --type instrumentation \
    --app build/app/outputs/apk/debug/app-debug.apk \
    --test build/app/outputs/apk/androidTest/debug/app-debug-androidTest.apk \
    --device 'model=oriole,version=33,locale=en,orientation=portrait' \
    --timeout 10m \
    --use-orchestrator \
    --environment-variables clearPackageData=true
