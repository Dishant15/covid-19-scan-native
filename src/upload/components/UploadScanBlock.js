import React, { useRef, useState, useEffect } from 'react'

import { View, Text, ScrollView, Platform } from 'react-native'
import { Icon, Button, Input } from 'react-native-elements'

import ImageBlock from './ImageBlock'
import useGallaryPicker from '../useGallaryPicker'
import { useUploadScanData } from '../../utils/data'
import styles, { listStyles } from '../styles'
import { size, get, toLower, trim, isNaN } from 'lodash'



const UploadScanBlock = ({ onCompleteUpload }) => {
    const nameRef = useRef(null)
    const ageRef = useRef(null)
    const [api_state, data, uploadScannedData] = useUploadScanData()

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [errors, setErrors] = useState({})
    const { hasPickedImage, pickImageFromGallary, pickedImage, removeImage, cropImage } = useGallaryPicker()

    let isMounted = false
    useEffect(() => {
        let isMounted = true
        return () => {
            isMounted = false
        }
    }, [])

    const resetFields = () => {
        setAge('')
        setName('')
        removeImage()
    }

    /**
     * check empty field and valid age
     */
    const validData = () => {
        if (!hasPickedImage) {
            alert("Please select image")
            return false
        }

        let errors = {}
        if (size(name) === 0) {
            errors = { name: "Please enter your name" }
        }
        if (size(age) === 0) {
            errors = { ...errors, age: "Please Enter Age" }
        } else if (isNaN(Number(age))) {
            errors = { ...errors, age: "Please Enter Valid Age" }
        }

        if (size(errors) > 0) {
            setErrors(errors)
            return false
        }
        setErrors({})
        return true
    }

    /**
     * functiona to upload image through API
     */
    const uploadImage = () => {

        if (!validData()) {
            return
        }

        let typeArr = pickedImage.mime.split("/")
        let imageBlock = {
            name: get(pickedImage, "filename", `${name}-${age}-${get(pickedImage, "modificationDate", "img")}.${typeArr[1]}`),
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
            onCompleteUpload(toLower(trim(result)) === 'covid', resetFields)
        }).catch(_ => {
            onCompleteUpload(null)
        })
    }


    /**
     * render Empty View
     */
    if (!hasPickedImage) {
        return (
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
        )
    }

    return (
        <React.Fragment>
            <ScrollView
                style={styles.block}>
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
                        }}
                        errorMessage={get(errors, "name", "")}
                        errorStyle={{ marginHorizontal: 0 }} />

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
                        }}
                        errorMessage={get(errors, "age", "")}
                        errorStyle={{ marginHorizontal: 0 }} />
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
        </React.Fragment>
    )
}

export default UploadScanBlock