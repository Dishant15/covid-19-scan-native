import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'

import styles from '../styles'


/**
 * parent
 *      QueList
 */
export default ({ index, question, ans, ans_selected, placeholder, buttonText, info, setAns }) => {

    const [text, setText] = useState(ans)

    return (
        <View style={styles.quePill}>
            {Boolean(info) &&
                <Text maxFontSizeMultiplier={1} style={styles.queQuestion}>
                    {info}
                </Text>
            }
            <Text maxFontSizeMultiplier={1} style={styles.queQuestion}>
                {question}
            </Text>

            {ans_selected ?
                <View style={styles.queOptionsWrapper}>
                    <View style={[styles.queOption, styles.selected]}>
                        <Text maxFontSizeMultiplier={1}>
                            {ans}
                        </Text>
                    </View>
                </View>
                :
                <View style={styles.queOptionsWrapper}>
                    <TextInput
                        placeholder={placeholder}
                        value={text}
                        maxFontSizeMultiplier={1}
                        onChangeText={(value) => setText(value)} />

                    <Button
                        title={buttonText}
                        buttonStyle={[styles.queOption, styles.selected]}
                        onPress={() => setAns(index, text)} />
                </View>
            }
        </View>
    )
}