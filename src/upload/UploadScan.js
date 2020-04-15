import React, { useRef } from 'react'

import { View, Text, ScrollView } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { Icon, Button, Input } from 'react-native-elements'


import ImageBlock from './components/ImageBlock'
import useGallaryPicker from './useGallaryPicker'

import styles, { listStyles, formStyles } from './styles'



export default () => {

    const nameRef = useRef(null)
    const ageRef = useRef(null)
    const { top } = useSafeArea()

    const { hasPickedImage, pickImageFromGallary, pickedImage, removeImage } = useGallaryPicker()

    const uploadImage = () => {

    }

    if (!hasPickedImage) {
        return (
            <View style={{ paddingTop: top, flex: 1 }}>
                <Text style={styles.heading}>Upload</Text>
                <View style={styles.emptyContainer}>
                    <Icon
                        name="cloud-upload"
                        type="material-community"
                        color="#c8c8c8"
                        size={80} />
                    <Text maxFontSizeMultiplier={1} style={[styles.infoText]}>Upload chest X-ray and Get result by AI</Text>
                    <Button
                        title="Select Image"
                        buttonStyle={styles.buttonStyle}
                        titleStyle={styles.titleStyle}
                        titleProps={{ maxFontSizeMultiplier: 1 }}
                        onPress={pickImageFromGallary} />
                </View>
            </View>
        )
    }

    return (
        <View style={{ paddingTop: top, flex: 1 }}>
            <ScrollView
                style={styles.block}>
                <Text style={styles.heading}>Upload</Text>
                <View style={styles.inputBlock}>
                    <Input
                        ref={nameRef}
                        placeholder="eg. John Smith"
                        returnKeyType='next'
                        blurOnSubmit={false}
                        underlineColorAndroid='transparent'
                        label="Name"
                        labelProps={{
                            maxFontSizeMultiplier: 1
                        }}
                        labelStyle={{
                            fontSize: 12,
                            fontWeight: "bold"
                        }}
                        inputStyle={{
                            fontSize: 14
                        }}
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={{
                            borderBottomWidth: 0
                        }}
                        onSubmitEditing={() => {
                            ageRef.current.focus()
                        }} />

                    <View style={styles.smallSeperator} />

                    <Input
                        ref={ageRef}
                        label="Age"
                        labelProps={{
                            maxFontSizeMultiplier: 1
                        }}
                        labelStyle={{
                            fontSize: 12,
                            fontWeight: "bold"
                        }}
                        inputStyle={{
                            fontSize: 14
                        }}
                        placeholder="eg. 22"
                        returnKeyType="done"
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={{
                            borderBottomWidth: 0
                        }} />
                </View>

                <ImageBlock
                    data={pickedImage}
                    changeImage={pickImageFromGallary}
                    removeImage={removeImage} />

            </ScrollView>
            <Button
                title="Upload"
                buttonStyle={[listStyles.btn, listStyles.primary]}
                titleStyle={listStyles.primaryText}
                onPress={uploadImage} />
        </View>
    )
}