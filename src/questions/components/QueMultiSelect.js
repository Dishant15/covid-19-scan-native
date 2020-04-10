import React, { useState } from "react";

import { View, Text, Button, TouchableOpacity } from 'react-native'
import styles from '../styles'

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
            <Text maxFontSizeMultiplier={1} style={styles.queQuestion}>
                {question}
            </Text>

            {ans_selected ?
                <View style={styles.queOptionsWrapper}>
                    <View style={[styles.queOption, styles.selected]}>
                        <Text maxFontSizeMultiplier={1}>
                            {answer}
                        </Text>
                    </View>
                </View>
                :
                <View style={styles.queOptionsWrapper}>
                    {options.map((option, i) => {
                        const is_selected = selAns.indexOf(option.value) !== -1
                        return (
                            <TouchableOpacity style={[styles.queOption, is_selected && styles.active]} key={i} onPress={() => handleSelectedAns(option.value)}>
                                <Text maxFontSizeMultiplier={1}>
                                    {option.text}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                    {Boolean(selAns.length) &&
                        <Button onPress={() => setAns(index, selAns)}
                            style={[styles.queOption, styles.confirm]}
                            title={confirm_text} />
                    }
                </View>
            }
        </View>
    )
}