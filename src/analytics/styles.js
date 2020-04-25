import { StyleSheet } from 'react-native'
import { colors } from 'react-native-elements'

export default StyleSheet.create({
    block: {
        flex: 1
    },
    heading: {
        fontSize: 32,
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
        fontSize: 26,
        fontWeight: 'bold',
        opacity: 0.8,
        color: '#bdbdbd',
        padding: 8,
        paddingHorizontal: 16,
        textAlign: 'center',
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
        margin: 12
    },
    dropdownLabel: {
        marginHorizontal: 4,
        fontSize: 14,
        fontWeight: 'bold'
    },
    dropdownValueWrapper: {
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 4,
        minWidth: 56,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden"
    },
    dropdownValue: {
        fontSize: 14
    },
    activeValue: {
        backgroundColor: colors.success,
    },
    activeHeaderValue: {
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 8,
        color: '#0D73E6'
    },
    verticalSeperator: {
        width: 2,
        backgroundColor: "#e8e8e8",
        alignSelf: 'stretch',
        marginVertical: 8
    }
})