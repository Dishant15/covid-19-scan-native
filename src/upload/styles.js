import { StyleSheet } from 'react-native'
import { colors } from '../utils/constants'


export const listStyles = StyleSheet.create({
    block: {
        position: 'relative',
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginVertical: 8
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
        flex: 1,
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
        marginVertical: 24,
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
    }
})