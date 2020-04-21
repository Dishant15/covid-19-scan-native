import React, { useCallback, useState, useEffect } from 'react'

import { View, Text, ActivityIndicator, RefreshControl } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSafeArea } from 'react-native-safe-area-context'
import useAnalyticsInfo from './useAnalyticsInfo'

import styles from './styles'

import { size, get } from 'lodash'
import { colors } from 'react-native-elements'
import AnalyticsBlock from './components/AnalyticsBlock'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'



export default () => {

    const { top } = useSafeArea()
    const { api_state, summary, regionalList, getRegionDetails, getApiData } = useAnalyticsInfo()
    const [selecteRegion, setSelectedRegion] = useState({ label: 'Gujarat', value: 'Gujarat' })


    if (api_state.loading && size(summary) === 0) {
        return (
            <View style={{ paddingTop: top, flex: 1 }}>
                <Text style={styles.heading}>Analytics</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color={colors.grey4} />
                </View>
            </View>
        )
    }

    return (
        <View style={{ paddingTop: top, flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => {
                            getApiData()
                        }} />
                }>
                <Text style={styles.heading}>Analytics</Text>
                <View style={{ flex: 1 }}>
                    <View style={styles.dropdownWrapper}>
                        <Text style={styles.dropdownLabel}>Select State</Text>
                        <View style={styles.block}>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.row}>
                                    <View style={styles.block}>
                                        <Text style={styles.dropdownValue}>{selecteRegion.label}</Text>
                                    </View>
                                    <Icon
                                        name="md-arrow-dropdown"
                                        type="ionicon" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <AnalyticsBlock cardTitle={selecteRegion.label} data={getRegionDetails(selecteRegion.value)} />
                    <AnalyticsBlock cardTitle="India" data={summary} />
                </View>
            </ScrollView>
        </View>
    )
}