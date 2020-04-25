import React, { useState } from "react";

import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import FastImage from 'react-native-fast-image'
import styles from '../styles'

import DOC_ICON from '../../assets/doc.png'
import MALE_ICON from '../../assets/male.png'

import find from 'lodash/find'
import get from 'lodash/get'



export default ({ index, question, options, confirm_text, ans, ans_selected, setAns }) => {

    const [selAns, setSelAns] = useState([])

    const handleSelectedAns = (value) => {
        if (!Boolean(value)) {
            // user selected none of this
            setAns(index, [value])
        }

        let curr_ans = [...selAns]
        const ind = curr_ans.indexOf(value)

        if (ind === -1) {
            curr_ans.push(value)
        } else {
            curr_ans.splice(ind, 1)
        }

        setSelAns(curr_ans)
    }

    let answer = '';
    if (ans_selected) {
        for (let index = 0; index < ans.length; index++) {
            const match = find(options, ['value', ans[index]])

            if (index === 0) {
                answer = get(match, 'text', '')
            } else {
                answer = answer + ', ' + get(match, 'text', '')
            }
        }
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
                            {answer}
                        </Text>
                    </View>
                </View>
                :
                <View style={[styles.queOptionsWrapper, styles.rightAlign, styles.queOtpBlock]}>
                    {options.map((option, i) => {
                        const is_selected = selAns.indexOf(option.value) !== -1
                        return (
                            <TouchableOpacity style={[styles.queOption, is_selected && styles.active]} key={i} onPress={() => handleSelectedAns(option.value)}>
                                <Text maxFontSizeMultiplier={1} style={styles.selectedText}>
                                    {option.text}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                    {Boolean(selAns.length) &&
                        <Button onPress={() => setAns(index, selAns)}
                            buttonStyle={[styles.queOption, styles.confirm]}
                            title={confirm_text} titleStyle={{ fontSize: 14 }} />
                    }
                </View>
            }
        </View>
    )
}