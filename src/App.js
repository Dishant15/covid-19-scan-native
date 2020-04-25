import React , { useEffect } from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from 'react-native-splash-screen'
import RootNavigator from './RootNavigator'



const App = () => {

    useEffect(() => {
        SplashScreen.hide()
    },[])


    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </>
    )
}

export default App;
