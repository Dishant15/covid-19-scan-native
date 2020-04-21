import React from 'react'

import { View, Text } from 'react-native'

import styles from '../styles'
import { has, get } from 'lodash'



export default ({ cardTitle, data }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.sectionTitle}>{cardTitle}</Text>
            {has(data, "totalConfirmed") ? (
                <View style={styles.infoBlock}>
                    <Text maxFontSizeMultiplier={1} style={styles.label}>Total Cases</Text>
                    <Text maxFontSizeMultiplier={1} style={styles.value}>{get(data, "totalConfirmed", "")}</Text>
                </View>
            ) : (
                    <View style={styles.infoBlock}>
                        <Text maxFontSizeMultiplier={1} style={styles.label}>Total Cases</Text>
                        <Text maxFontSizeMultiplier={1} style={styles.value}>{get(data, "total", "")}</Text>
                    </View>
                )}
            <View style={[styles.infoBlock, styles.highlight]}>
                <Text maxFontSizeMultiplier={1} style={styles.label}>Discharged</Text>
                <Text maxFontSizeMultiplier={1} style={styles.value}>{get(data, "discharged", "")}</Text>

            </View>
            <View style={styles.infoBlock}>
                <Text maxFontSizeMultiplier={1} style={styles.label}>Deaths</Text>
                <Text maxFontSizeMultiplier={1} style={styles.value}>{get(data, "deaths", "")}</Text>
            </View>
            <View style={[styles.infoBlock, styles.highlight]}>
                <Text maxFontSizeMultiplier={1} style={styles.label}>Confirmed Indian</Text>
                <Text maxFontSizeMultiplier={1} style={styles.value}>{get(data, "confirmedCasesIndian", "")}</Text>
            </View>
            <View style={styles.infoBlock}>
                <Text maxFontSizeMultiplier={1} style={styles.label}>Confirmed Foreign</Text>
                <Text maxFontSizeMultiplier={1} style={styles.value}>{get(data, "confirmedCasesForeign", "")}</Text>
            </View>
            {has(data, "confirmedButLocationUnidentified") && (
                <View style={[styles.infoBlock, styles.highlight]}>
                    <Text maxFontSizeMultiplier={1} style={styles.label}>Confirmed But Location Unknown</Text>
                    <Text maxFontSizeMultiplier={1} style={styles.value}>{get(data, "confirmedButLocationUnidentified", "")}</Text>
                </View>
            )}
        </View>
    )
}