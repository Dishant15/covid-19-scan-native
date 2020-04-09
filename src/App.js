import React , { useEffect } from 'react'
import { SafeAreaView, View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native'

import SplashScreen from 'react-native-splash-screen'


const App = () => {

    useEffect(() => {
        SplashScreen.hide()
    },[])

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>this is test string</Text>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
})

export default App;
