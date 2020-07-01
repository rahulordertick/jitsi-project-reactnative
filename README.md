mkdir -p android/app/src/main/assets && rm -rf android/app/build && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android && ./gradlew clean assembleRelease && cd ../

Then you can get apk in app/build/outputs/apk/debug/app-debug.apk



Duplicate Resources Error

Here is the simple solution :

Delete build inside android/app folder
Delete build inside android folder
run rm -rf $HOME/.gradle/caches/
Open build.gradle --> android/app/build.gradle
comment this line
//apply from: "../../node_modules/react-native/react.gradle"

Delete index.android.bundle file from assets folder and re-create using react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

run react-native run-android Or run react-native run-android --variant=release

Happy Coding..