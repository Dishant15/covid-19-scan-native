import React from 'react'

import { View, FlatList, Image } from 'react-native'
import { Icon, colors, Button } from 'react-native-elements'

import { get, size } from 'lodash'
import styles, { listStyles } from '../styles'


/**
 * render image list
 * 
 * Parent
 *      UploadScan
 */
export default ({ loading, data, removeImage, changeImage, cropImage }) => {

    if (size(data) === 0) {
        return null
    }

    return (
        <View style={styles.block}>
            <View style={listStyles.block}>
                <View style={listStyles.cancelBtnWrapper}>
                    <Icon
                        name="close-circle"
                        type="material-community"
                        containerStyle={listStyles.cancelBtn}
                        size={28}
                        color={colors.error}
                        onPress={() => {
                            if (!loading) removeImage()
                        }} />
                </View>
                <View style={listStyles.imgWrapper}>
                    <Image
                        source={{ uri: data.path }}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                </View>
            </View>
            <View style={styles.secondaryBtnWrapper}>
                <View style={styles.block}>
                    <Button
                        type='outline'
                        title='Crop Image'
                        buttonStyle={[listStyles.btn, listStyles.outlined]}
                        titleStyle={listStyles.outlinedText}
                        titleProps={{ maxFontSizeMultiplier: 1 }}
                        disabled={loading}
                        onPress={cropImage} />
                </View>
                <View style={styles.block}>
                    <Button
                        type='outline'
                        title='Change Image'
                        buttonStyle={[listStyles.btn, listStyles.outlined]}
                        titleStyle={listStyles.outlinedText}
                        titleProps={{ maxFontSizeMultiplier: 1 }}
                        disabled={loading}
                        onPress={changeImage} />
                </View>
            </View>
        </View>
    )
}