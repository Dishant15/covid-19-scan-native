import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../utils/constants'
import HTML from 'react-native-render-html'
import { get } from 'lodash'



const getRiskType = (risk) => {
    if (risk === 1) return ['low', 'lowRecommendations']
    else if (risk === 2) return ['medium', 'mediumRecommendations']
    else if (risk === 3) return ['high', 'highRecommendations']
}


/**
 * render result based on questioner
 * 
 * Parent
 *      Questions 
 */
const QuestionerResult = ({ data, risk }) => {
    const [risk_type, risk_recom] = getRiskType(risk)
    const recom = get(data, risk_recom, {})
    return (
        <View style={styles.results}>
            <View style={[styles.row, styles.spaceBetween]}>
                <Text maxFontSizeMultiplier={1} style={styles.title}>{data.header_title}</Text>
                <Text maxFontSizeMultiplier={1} style={[styles.status, styles[risk_type]]}>{data[risk_type]}</Text>
            </View>

            <View style={styles.contentWrapper}>
                <Text maxFontSizeMultiplier={1} style={styles.contentTitle}>
                    {recom.title}
                </Text>

                {recom.list.map((item, ind) => {
                    return (
                        <View style={[styles.row, styles.contentList]} key={ind}>
                            <Text maxFontSizeMultiplier={1} style={styles.number}>{ind + 1}.</Text>
                            <HTML html={item} />
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    results: {
        margin: 16,
        borderRadius: 10,
        padding: 16,
        backgroundColor: 'white',
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 3
            },
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22
            }
        })
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.accentColor
    },
    status: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    low: {
        backgroundColor: colors.success,
    },
    medium: {
        backgroundColor: colors.orange,
    },
    high: {
        backgroundColor: colors.fail
    },
    contentWrapper: {
        padding: 16
    },
    contentTitle: {
        fontSize: 14,
        color: colors.accentDark,
        marginVertical: 8,
    },
    contentList: {
        alignItems: 'flex-start',
        paddingVertical: 8
    },
    number: {
        fontSize: 12,
        marginRight: 8
    }
})

export default QuestionerResult