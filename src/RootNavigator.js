import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import Questions from './questions/Questions';
import UploadScan from './upload/UploadScan';
import Analytics from './analytics/Analytics';


const Tab = createBottomTabNavigator();


/**
 * Parent
 *      App
 */
export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Assessment"
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
                name="Result"
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
                name="Updates"
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