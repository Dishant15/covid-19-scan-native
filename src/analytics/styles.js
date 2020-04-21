import { StyleSheet } from 'react-native'
import { colors } from 'react-native-elements'

export default StyleSheet.create({
    block: {
        flex: 1
    },
    heading: {
        fontSize: 38,
        fontWeight: 'bold',
        margin: 16
    },
    card: {
        margin: 16,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        opacity: 0.8,
        color: '#bdbdbd',
        padding: 8,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8
    },
    infoBlock: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    highlight: {
        backgroundColor: '#e1f5fe55'
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
    },
    label: {
        fontSize: 14,
        color: colors.grey2,
        textAlign: 'center'
    },
    dropdownWrapper: {
        margin: 16,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    dropdownLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 8,
        color: colors.grey2,
    },
    dropdownValue: {
        fontSize: 14
    },
    verticalSeperator: {
        width: 2,
        backgroundColor: "#e8e8e8",
        alignSelf: 'stretch',
        marginVertical: 8
    }
})