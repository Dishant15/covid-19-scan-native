import React, { useRef, useState, useEffect } from 'react'

import { View, Text, ScrollView, Platform, InteractionManager } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { Icon, Button, Input } from 'react-native-elements'


import ImageBlock from './components/ImageBlock'
import useGallaryPicker from './useGallaryPicker'

import styles, { listStyles, formStyles } from './styles'
import { useUploadScanData } from '../utils/data'
import { size, get, toLower, trim } from 'lodash'
import ResultModal from './components/ResultModal'



export default () => {

    const nameRef = useRef(null)
    const ageRef = useRef(null)
    const { top } = useSafeArea()
    const [api_state, data, uploadScannedData] = useUploadScanData()

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [result, setResult] = useState({ show: false, isPositive: false })

    const { hasPickedImage, pickImageFromGallary, pickedImage, removeImage, cropImage } = useGallaryPicker()


    const toggleResult = (isPositive = null) => {
        if (isPositive == null) {
            setResult({
                show: false,
                isPositive: result.isPositive
            })
            return
        }
        setResult({
            show: !result.show,
            isPositive
        })
    }


    /**
     * functiona to upload image through API
     */
    const uploadImage = () => {
        if (!hasPickedImage) return

        let imageBlock = {
            name: pickedImage.filename,
            type: pickedImage.mime,
            uri: Platform.OS === 'android' ? pickedImage.path : pickedImage.path.replace("file://", ""),
        }
        uploadScannedData({
            name,
            lat: 22.2587,
            long: 71.192,
            age,
            image: imageBlock
        }).then((res) => {
            let result = get(res, "result", '')
            toggleResult(toLower(trim(result)) === 'covid')
        }).catch(_ => { })
    }


    /**
     * render Empty View
     */
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
        <React.Fragment>
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
                            value={name}
                            onChangeText={(value) => setName(value)}
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
                            value={age}
                            onChangeText={(value) => setAge(value)}
                            containerStyle={styles.containerStyle}
                            inputContainerStyle={{
                                borderBottomWidth: 0
                            }} />
                    </View>

                    <ImageBlock
                        loading={api_state.loading}
                        data={pickedImage}
                        changeImage={pickImageFromGallary}
                        removeImage={removeImage}
                        cropImage={cropImage} />

                </ScrollView>
                <Button
                    title="Upload"
                    buttonStyle={[listStyles.btn, listStyles.primary]}
                    titleStyle={listStyles.primaryText}
                    disabled={api_state.loading}
                    loading={api_state.loading}
                    onPress={uploadImage} />
            </View>
            <ResultModal
                show={result.show}
                toggleModal={() => {
                    InteractionManager.runAfterInteractions(() => {
                        toggleResult()
                    })
                }}
                isPositive={result.isPositive} />
        </React.Fragment>
    )
}