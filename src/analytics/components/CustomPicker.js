import React, { useState } from 'react'
import { bool, array, func, object, oneOfType } from 'prop-types'

import { View, Text, Platform, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

import { Icon } from 'react-native-elements'
import Modal from 'react-native-modal'
import { Picker } from '@react-native-community/picker'
import { find } from 'lodash'




const CustomPicker = props => {
    /**
     * provides search input and picker 
     * 
     * picker array will be change based on search value
     * 
     * Children
     *      1. Modal
     *      2. Icon
     *      3. Picker // for iOS
     * 
     * Parent / Call From
     *      1. AddressForm
     */
    const { mapLabel, mapValue, keyExtractor, onPickerValueChange, options, initialValues, containerStyle } = props

    const [selectedValue, setSelectedValue] = useState(mapValue(initialValues))
    const [show, setPickerModal] = useState(false)


    const togglePicker = () => setPickerModal(!show)

    const onClick = () => {
        let selectedObject = find(options, (opt) => mapValue(opt) === selectedValue)
        onPickerValueChange(selectedObject)
        togglePicker()
    }

    /**
     * render default picker for ios
     */
    const renderIOSPicker = () => {
        return (
            <View>
                <TouchableOpacity style={{ padding: 16, alignSelf: 'flex-end' }} onPress={onClick}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Done</Text>
                </TouchableOpacity>
                <Picker
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue)
                    }}
                    selectedValue={selectedValue}
                    itemStyle={{ fontSize: 16, ...fonts.regular }}>
                    {options.map((item, index) => {
                        let label = mapLabel(item)
                        let value = mapValue(item)
                        let key = keyExtractor(item)
                        return (
                            <Picker.Item label={label} value={value} key={key} />
                        )
                    })}
                </Picker>
            </View>
        )
    }


    /**
     * render customer scrolling items
     */
    const renderAndroidPicker = () => {
        return (
            <ScrollView>
                <TouchableOpacity onPress={togglePicker}>
                    <Icon
                        name="md-close"
                        type="ionicon"
                        containerStyle={styles.cancelIcon} />
                </TouchableOpacity>
                {options.map((item, index) => {
                    let label = mapLabel(item)
                    let value = mapValue(item)
                    let key = keyExtractor(item)
                    return (
                        <TouchableOpacity
                            style={styles.opt}
                            onPress={() => {
                                onPickerValueChange(item)
                                togglePicker()
                            }}
                            key={key}>
                            <Text style={styles.optText}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }


    // provide search input for soac
    return (
        <View>
            <TouchableOpacity onPress={togglePicker} style={containerStyle}>
                <View pointerEvents="none">
                    {props.children}
                </View>
            </TouchableOpacity>
            <Modal
                isVisible={show}
                onBackdropPress={togglePicker}
                style={styles.modalWrapper}>
                <View style={styles.modal}>
                    {Platform.OS === 'ios' ? renderIOSPicker() : renderAndroidPicker()}
                </View>
            </Modal>
        </View>
    )
}

CustomPicker.propTypes = {
    enableSearch: bool,
    options: array.isRequired, //options
    mapLabel: func.isRequired,
    mapValue: func.isRequired,
    keyExtractor: func.isRequired,
    initialValues: object,
    containerStyle: oneOfType([object, array]),
    onPickerValueChange: func.isRequired
}


CustomPicker.defaultProps = {
    enableSearch: false,
    containerStyle: {},
}


const styles = StyleSheet.create({
    modalWrapper: {
        margin: 0,
        padding: 0,
        justifyContent: "flex-end"
    },
    modal: {
        backgroundColor: '#fff'
    },
    //=====================================
    // android
    //=====================================
    opt: {
        padding: 16
    },
    optText: {
        fontSize: 14,
        ...fonts.regular
    },
    cancelIcon: {
        alignSelf: 'flex-end',
        padding: 16,
    }
})

export default CustomPicker