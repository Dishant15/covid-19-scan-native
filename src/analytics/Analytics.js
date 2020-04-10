import React from 'react'

import { View, Text } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import styles from './styles'

export default () => {

    const { top } = useSafeArea()
    return (
        <View style={{ paddingTop: top }}>
            <Text style={styles.heading}>Analytics</Text>
        </View>
    )
}