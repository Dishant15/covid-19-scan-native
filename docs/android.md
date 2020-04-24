# Android Build Issues

**Build Failed due to flipper**

- check the sequence of build.gridle (root level) import they should be in following format

```
allprojects {
    repositories {
        mavenLocal()
        jcenter()

        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url("$rootDir/../node_modules/react-native/android")
        }
        maven { url 'https://www.jitpack.io' }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }
        google()
    }
}

```

- add soloader impor in build.gridle (app level)

```
debugImplementation 'com.facebook.soloader:soloader:0.9.0'
```

- clean gradle 
```
./gradlew clean
```


**File upload not working in 0.62**

this issue is due to Flipper network

- comment all flipper code from build.gridle
- comment whole ReactNativeFlipper File
- comment initializeFlipper code from MainApplication.js