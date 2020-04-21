import React, { useCallback } from 'react'

import { View, Text, ActivityIndicator } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import styles from './styles'
import useAnalyticsInfo from './useAnalyticsInfo'
import { size, get } from 'lodash'
import { colors } from 'react-native-elements'



export default () => {

    const { top } = useSafeArea()
    const { api_state, summary, getRegionalList, getRegionDetails } = useAnalyticsInfo()

    if (api_state.loading && size(summary) === 0) {
        return (
            <View style={{ paddingTop: top }}>
                <Text style={styles.heading}>Analytics</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color={colors.grey4} />
                </View>
            </View>
        )
    }

    console.log("data => ", summary, getRegionalList(), getRegionDetails("Gujarat"))

    return (
        <View style={{ paddingTop: top }}>
            <Text style={styles.heading}>Analytics</Text>
            {(api_state.loading && size(summary) > 0) && (
                <View style={{ padding: 8, alignItems: 'center', backgroundColors: colors.warning }}>
                    <Text style={{ fontSize: 12 }}>Refreshing</Text>
                </View>
            )}
            <View style={{ flex: 1 }}>
                <View>
                    <Text>{get(summary, "total", "")}</Text>
                </View>
            </View>
        </View>
    )
}