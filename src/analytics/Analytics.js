import React, { useCallback, useState, useEffect } from 'react'

import { View, Text, ActivityIndicator, RefreshControl, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSafeArea } from 'react-native-safe-area-context'
import useAnalyticsInfo from './useAnalyticsInfo'

import styles from './styles'

import { size, get } from 'lodash'
import { colors } from 'react-native-elements'
import AnalyticsBlock from './components/AnalyticsBlock'
import CustomPicker from './components/CustomPicker'



export default () => {

    const { top } = useSafeArea()
    const { api_state, summary, regionalList, getRegionDetails, getApiData } = useAnalyticsInfo()
    const [selectedRegion, setSelectedRegion] = useState({ label: 'Gujarat', value: 'Gujarat' })


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

    // console.log(regionalList)

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
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.dropdownLabel}>Select State</Text>
                            <Text style={[styles.dropdownValue, styles.activeHeaderValue]}>{selectedRegion.label}</Text>
                        </View>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal>
                            {regionalList.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedRegion(item)
                                        }}
                                        key={item.value}>
                                        <View style={[styles.dropdownValueWrapper, selectedRegion.value === item.value && styles.activeValue]}>
                                            <Text style={selectedRegion.value === item.value && { color: 'white', fontWeight: 'bold' }}>{item.label}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <AnalyticsBlock cardTitle={selectedRegion.label} data={getRegionDetails(selectedRegion.value)} />
                    <AnalyticsBlock cardTitle="India" data={summary} />
                </View>
            </ScrollView>
        </View >
    )
}