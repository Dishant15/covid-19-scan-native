import React, { useRef, useState, useEffect } from 'react'

import { View, Text, InteractionManager } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

import ResultModal from './components/ResultModal'
import UploadScanBlock from './components/UploadScanBlock'

import styles from './styles'



export default () => {

    const { top } = useSafeArea()
    const [result, setResult] = useState({ show: false, isPositive: false })

    const toggleResult = (isPositive = null) => {
        if (isPositive == null) {
            InteractionManager.runAfterInteractions(() => {
                setResult({
                    show: false,
                    isPositive: result.isPositive
                })
            })
            return
        }
        setResult({
            show: !result.show,
            isPositive
        })
    }


    return (
        <React.Fragment>
            <View style={{ paddingTop: top, flex: 1 }}>
                <Text style={styles.heading}>AiVed Result</Text>
                <UploadScanBlock
                    onCompleteUpload={(isPositive) => {
                        toggleResult(isPositive)
                    }} />
            </View>
            <ResultModal
                show={result.show}
                toggleModal={() => {
                    InteractionManager.runAfterInteractions(() => {
                        toggleResult()
                    })
                }}
                isPositive={result.isPositive} />
        </React.Fragment>
    )
}