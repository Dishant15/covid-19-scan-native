import React from 'react'

import { View, Text, StyleSheet, InteractionManager } from 'react-native'
import { Icon } from 'react-native-elements'
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context'
import UploadScanBlock from '../../upload/components/UploadScanBlock';



const UploadScanModal = ({ show, onComplete, toggleModal }) => {
    return (
        <View>
            <Modal
                isVisible={show}
                style={styles.model}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.row}>
                        <Text maxFontSizeMultiplier={1} style={styles.heading}>Upload</Text>
                        <Icon
                            name="md-close"
                            type='ionicon'
                            containerStyle={styles.containerStyle}
                            size={28}
                            onPress={toggleModal} />
                    </View>
                    <UploadScanBlock onCompleteUpload={onComplete} />
                </SafeAreaView>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    model: {
        margin: 0,
        padding: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 38,
        fontWeight: 'bold',
        margin: 16
    },
    containerStyle: {
        padding: 16
    }
})

export default UploadScanModal