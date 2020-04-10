import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import Questions from './questions/Questions';
import UploadScan from './upload/screens/UploadScan';
import Analytics from './analytics/screens/Analytics';


const Tab = createBottomTabNavigator();


/**
 * Parent
 *      App
 */
export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Q & A"
                component={Questions}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="comment-question-outline"
                            type='material-community'
                            color={color}
                            size={size} />
                    )
                }} />
            <Tab.Screen
                name="Upload"
                component={UploadScan}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="cloud-upload-outline"
                            type='material-community'
                            color={color}
                            size={size} />
                    )
                }} />
            <Tab.Screen
                name="Analytics"
                component={Analytics}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="chart-line"
                            type='material-community'
                            color={color}
                            size={size} />
                    )
                }} />
        </Tab.Navigator>
    )
}