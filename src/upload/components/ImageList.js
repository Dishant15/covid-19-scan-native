import React from 'react'

import { View, FlatList, Image } from 'react-native'
import { Icon, colors, Button } from 'react-native-elements'

import { get, size } from 'lodash'
import { listStyles } from '../styles'


/**
 * render image list
 * 
 * Parent
 *      UploadScan
 */
export default ({ loading, data, removeImage, addImage }) => {

    if (size(data) === 0) {
        return null
    }

    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => (
                <View style={listStyles.block}>
                    <View style={listStyles.cancelBtnWrapper}>
                        <Icon
                            name="close-circle"
                            type="material-community"
                            containerStyle={listStyles.cancelBtn}
                            size={28}
                            color={colors.error}
                            onPress={() => removeImage(index)} />
                    </View>
                    <View style={listStyles.imgWrapper}>
                        <Image
                            source={{ uri: item.path }}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                    </View>
                </View>
            )}
            ItemSeparatorComponent={() => (
                <View style={listStyles.seperator} />
            )}
            ListFooterComponent={() => (
                <Button
                    type='outline'
                    title='Add Image'
                    buttonStyle={[listStyles.btn, listStyles.outlined]}
                    titleStyle={listStyles.outlinedText}
                    titleProps={{ maxFontSizeMultiplier: 1 }}
                    onPress={addImage} />
            )}
            keyExtractor={(item, index) => item.filename + String(index)} />
    )
}