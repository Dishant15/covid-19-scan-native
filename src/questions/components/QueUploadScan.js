import React, { useState, useEffect } from 'react'

import { View, InteractionManager } from 'react-native'
import QueSingleSelect from './QueSingleSelect';
import Modal from 'react-native-modal'
import UploadScanModal from './UploadScanModal';


const UPLOAD_QUE = {
    question: "Will you like to upload X-ray of your chest for better results ?",
    options: [
        { text: "Yes", value: 1 },
        { text: "No", value: 0 },
    ]
}

const UPLOAD_RESULT_QUE = {
    question: "Chest X-ray AI result :",
    options: [
        { text: "Not Uploaded", value: 0 },
        { text: "Normal", value: 1 },
        { text: "Covid", value: 2 },
    ]
}

/**
 * question for upload scan
 * 
 * Parent
 *      QueList
 */
export default (props) => {

    const [upload_scan, setUploadScan] = useState(0)
    const [ans_selected, setAnsSelected] = useState(false)

    const [got_result, setGotResult] = useState(0)
    const [showScanModal, setModalVisibility] = useState(false)

    let isMounted = false
    useEffect(() => {
        isMounted = true
        return () => {
            isMounted = false
        }
    }, [])

    const toggleModal = () => {
        setModalVisibility(!showScanModal)
    }


    const onUploadEnd = (ans = null) => {
        setGotResult(ans)
        props.onComplete(ans)
    }

    const onUserAnswerSelect = (_, ans) => {
        setUploadScan(ans)
        setAnsSelected(true)
        toggleModal()
        // if ans in No show results
        if (!Boolean(ans)) {
            onUploadEnd(ans)
        }
    }

    if (ans_selected) {
        // Step 2
        if (upload_scan) {
            // user selected Yes
            if (got_result) {
                // Step 3
                return (
                    <QueSingleSelect
                        question={UPLOAD_RESULT_QUE.question} options={UPLOAD_RESULT_QUE.options}
                        ans={got_result} ans_selected={true} setAns={() => { }}
                    />
                )
            }
        } else {
            // user selected No
            return (
                <QueSingleSelect
                    question={UPLOAD_RESULT_QUE.question} options={UPLOAD_RESULT_QUE.options}
                    ans={0} ans_selected={true} setAns={() => { }}
                />
            )
        }
    } else {
        // Step 1
        return (
            <QueSingleSelect
                question={UPLOAD_QUE.question} options={UPLOAD_QUE.options}
                ans={upload_scan} ans_selected={ans_selected} setAns={onUserAnswerSelect}
            />
        )
    }

    return (
        <UploadScanModal
            show={showScanModal}
            onComplete={(isPositive = null) => {
                /**
                 *  isPostive => true | false 
                 *  convert in to number to work with logic
                 */
                setGotResult(isPositive ? 2 : 1)
                toggleModal()
                props.onComplete(isPositive ? 2 : 1)
            }}
            toggleModal={() => {
                setGotResult(null)
                toggleModal()
                props.onComplete(0)
            }} />
    )
}