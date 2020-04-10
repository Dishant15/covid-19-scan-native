import { StyleSheet } from 'react-native'
import { colors } from '../utils/constants'


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
        overflow: 'hidden'
    },
    queOptionsWrapper: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: "wrap"
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
    confirm: {
        backgroundColor: colors.accentColor
    },
    active: {
        backgroundColor: 'yellowgreen'
    }
})