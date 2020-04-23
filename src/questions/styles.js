import { StyleSheet, Dimensions, Platform } from 'react-native'
import { colors } from '../utils/constants'

const { width } = Dimensions.get('window')


export default StyleSheet.create({
    block: {
        flex: 1
    },
    queContainer: {
        padding: 16
    },
    quePill: {
        margin: 8
    },
    queQuestion: {
        borderRadius: 10,
        padding: 16,
        backgroundColor: colors.accentDark,
        color: 'whitesmoke',
        fontWeight: 'bold',
        overflow: 'hidden',
        maxWidth: width * 0.8,
    },
    queOptionsWrapper: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: width * 0.9,
    },
    rightAlign: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    queOption: {
        borderRadius: 10,
        minWidth: 60,
        minHeight: 44,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        margin: 4,
        backgroundColor: colors.accentSecondary,
        overflow: 'hidden'
    },
    queOptionText: {
        fontWeight: 'bold',
        color: 'whitesmoke'
    },
    selected: {
        backgroundColor: colors.accentColor
    },
    selectedText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    confirm: {
        backgroundColor: colors.accentColor
    },
    confirmText: {
        color: 'white',
        fontWeight: 'bold'
    },
    active: {
        backgroundColor: 'yellowgreen'
    },
    //=====================================================
    //=====================================================
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16
    },
    containerStyle: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'whitesmoke',
        padding: 4,
        borderRadius: 24,
        zIndex: 2,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    queQuestionBlock: {
        position: 'relative',
        paddingTop: 22,
        paddingLeft: 22
    },
    queOtpBlock: {
        paddingVertical: 22
    },
    extraPadding: {
        paddingLeft: 28
    },
    invertedExtraPadding: {
        paddingRight: 28
    },
    ansBlock: {
        paddingTop: 20,
        paddingRight: 22
    }

})