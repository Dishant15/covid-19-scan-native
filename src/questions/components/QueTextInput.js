import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import FastImage from 'react-native-fast-image'

import styles from '../styles'
import DOC_ICON from '../../assets/doc.png'
import MALE_ICON from '../../assets/male.png'


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
                            {ans}
                        </Text>
                    </View>
                </View>
                :
                <View style={[styles.queOptionsWrapper, styles.rightAlign, styles.queOtpBlock]}>
                    <View style={styles.block}>
                        <Input
                            placeholder={placeholder}
                            value={text}
                            maxFontSizeMultiplier={1}
                            keyboardType='decimal-pad'
                            returnKeyType="done"
                            onSubmitEditing={() => setAns(index, text)}
                            onChangeText={(value) => setText(value)}
                            inputStyle={{
                                fontSize: 14
                            }} />
                    </View>
                    <Button
                        title={buttonText}
                        buttonStyle={[styles.queOption, styles.selected]}
                        onPress={() => setAns(index, text)}
                        titleStyle={{ fontSize: 14 }} />
                </View>
            }
        </View>
    )
}