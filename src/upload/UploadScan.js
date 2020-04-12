import React from 'react'

import { View, Text } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { Icon, Button } from 'react-native-elements'


import ImageList from './components/ImageList'
import useGallaryPicker from './useGallaryPicker'

import styles, { listStyles } from './styles'



export default () => {

    const { top } = useSafeArea()

    const { hasPickedImages, pickImageFromGallary, pickedImages, removeImage } = useGallaryPicker()

    const uploadImages = () => {

    }

    return (
        <View style={{ paddingTop: top, flex: 1 }}>
            <Text style={styles.heading}>Upload</Text>
            {hasPickedImages ?
                <React.Fragment>
                    <ImageList
                        data={pickedImages}
                        addImage={pickImageFromGallary}
                        removeImage={removeImage} />
                    <Button
                        title="Upload"
                        buttonStyle={[listStyles.btn, listStyles.primary]}
                        titleStyle={listStyles.primaryText}
                        onPress={uploadImages} />
                </React.Fragment>
                :
                <View style={styles.emptyContainer}>
                    <Icon
                        name="cloud-upload"
                        type="material-community"
                        color="#c8c8c8"
                        size={80} />
                    <Text maxFontSizeMultiplier={1} style={[styles.infoText]}>Upload X-Ray Image(s)</Text>
                    <Button
                        title="Import Image(s)"
                        buttonStyle={styles.buttonStyle}
                        titleStyle={styles.titleStyle}
                        titleProps={{ maxFontSizeMultiplier: 1 }}
                        onPress={pickImageFromGallary} />
                </View>
            }
        </View>
    )
}