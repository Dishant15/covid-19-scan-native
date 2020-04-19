import React from 'react'
import { View, Text } from 'react-native'

import Modal from 'react-native-modal'
import { Button } from 'react-native-elements'
import styles from '../styles'



const ResultModal = ({ show, isPositive, toggleModal }) => {
    return (
        <View>
            <Modal
                isVisible={show}
                onBackdropPress={toggleModal}
                onBackButtonPress={toggleModal}
                style={styles.modal}>

                <View style={[styles.alertModal, isPositive ? styles.fail : styles.success]}>
                    <Text style={styles.text} maxFontSizeMultiplier={1}>COVID-19</Text>
                    <View style={[styles.block, styles.centerInParent]}>
                        <Text style={[styles.text, styles.large]} maxFontSizeMultiplier={1}>{isPositive ? "Positive" : "Negative"}</Text>
                    </View>
                    <Button
                        type='clear'
                        title='Ok'
                        titleStyle={styles.text}
                        onPress={toggleModal} />
                </View>

            </Modal>
        </View>
    )
}

export default ResultModal