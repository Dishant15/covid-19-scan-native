import React from "react"

import { View, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

import styles from '../styles'
import DOC_ICON from '../../assets/doc.png'
import MALE_ICON from '../../assets/male.png'

import get from 'lodash/get'
import find from 'lodash/find'


/**
 * parent
 *      Questions
 */
export default ({ index, question, options, ans, ans_selected, setAns }) => {

    let answer;
    if (ans_selected) {
        answer = find(options, ['value', ans])
    }

    return (
        <View style={styles.quePill}>
            <View style={styles.queQuestionBlock}>
                <View style={styles.containerStyle}>
                    <FastImage
                        source={DOC_ICON}
                        resizeMode={FastImage.resizeMode.contain}
                        style={styles.avatar}
                    />
                </View>
                <Text maxFontSizeMultiplier={1} style={[styles.queQuestion, styles.extraPadding]}>
                    {question}
                </Text>
            </View>
            {ans_selected ?
                <View style={[styles.queOptionsWrapper, styles.rightAlign, styles.ansBlock]}>
                    <View style={styles.containerStyle}>
                        <FastImage
                            source={MALE_ICON}
                            resizeMode={FastImage.resizeMode.contain}
                            style={styles.avatar}
                        />
                    </View>
                    <View style={[styles.queOption, styles.selected, styles.invertedExtraPadding]}>
                        <Text maxFontSizeMultiplier={1} style={styles.selectedText}>
                            {get(answer, 'text', '')}
                        </Text>
                    </View>
                </View>
                :
                <View style={[styles.queOptionsWrapper, styles.rightAlign, styles.queOtpBlock]}>
                    {options.map((option, i) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => setAns(index, option.value)}
                                style={styles.queOption}>
                                <Text maxFontSizeMultiplier={1} style={styles.queOptionText}>
                                    {option.text}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            }
        </View>
    )
}