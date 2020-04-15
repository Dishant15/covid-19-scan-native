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
export default ({ loading, data, removeImage, changeImage }) => {

    if (size(data) === 0) {
        return null
    }

    console.log(data)

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
                        onPress={() => removeImage()} />
                </View>
                <View style={listStyles.imgWrapper}>
                    <Image
                        source={{ uri: data.path }}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                </View>
            </View>
            <Button
                type='outline'
                title='Change Image'
                buttonStyle={[listStyles.btn, listStyles.outlined]}
                titleStyle={listStyles.outlinedText}
                titleProps={{ maxFontSizeMultiplier: 1 }}
                onPress={changeImage} />
        </View>
    )
}