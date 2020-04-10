import React from "react"

import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../styles'

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
            <Text maxFontSizeMultiplier={1} style={styles.queQuestion}>
                {question}
            </Text>
            {ans_selected ?
                <View style={styles.queOptionsWrapper}>
                    <View style={[styles.queOption, styles.selected]}>
                        <Text maxFontSizeMultiplier={1}>
                            {get(answer, 'text', '')}
                        </Text>
                    </View>
                </View>
                :
                <View style={styles.queOptionsWrapper}>
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