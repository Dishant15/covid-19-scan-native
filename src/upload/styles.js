import { StyleSheet, Platform, Dimensions } from 'react-native'
import { colors } from '../utils/constants'

const { width, height } = Dimensions.get('window')


export const listStyles = StyleSheet.create({
    block: {
        position: 'relative',
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    cancelBtnWrapper: {
        position: 'absolute',
        top: -16,
        right: -16,
        zIndex: 5
    },
    cancelBtn: {
        padding: 12
    },
    seperator: {
        height: 16
    },
    imgWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 156
    },
    img: {
        flex: 1,
        width: null,
        height: null
    },
    btn: {
        margin: 16,
        borderRadius: 10
    },
    primary: {
        padding: 12,
        backgroundColor: colors.accentDark
    },
    primaryText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    outlined: {
        padding: 10,
        borderColor: '#9e9e9e'
    },
    outlinedText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9e9e9e'
    }
})

export default StyleSheet.create({
    block: {
        flex: 1
    },
    heading: {
        fontSize: 38,
        fontWeight: 'bold',
        margin: 16
    },


    //==================================================================
    // EMPTY BLOCK
    //==================================================================


    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#c8c8c8"
    },
    buttonStyle: {
        margin: 16,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.accentDark
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: "bold",
        color: 'white'
    },


    //==================================================================
    // FORM BLOCK
    //==================================================================


    inputBlock: {
        borderRadius: 10,
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: 'white',
        ...Platform.select({
            android: {
                elevation: 3
            },
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22
            }
        })
    },
    containerStyle: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 0
    },
    smallSeperator: {
        height: 2,
        backgroundColor: '#bdbdbd',
        opacity: 0.5
    },
    secondaryBtnWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },


    //==================================================================
    // FORM BLOCK
    //==================================================================

    modal: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    alertModal: {
        width: width * 0.7,
        height: width * 0.8,
        borderRadius: 10
    },
    centerInParent: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    success: {
        backgroundColor: colors.success
    },
    fail: {
        backgroundColor: colors.fail
    },
    text: {
        padding: 16,
        fontSize: 18,
        color: 'white'
    },
    large: {
        fontSize: 34,
        fontWeight: 'bold'
    }
})