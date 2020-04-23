import React, { useState, useRef, useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native'
import { View, ScrollView, ActivityIndicator, Text } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

import { useGetQuestionsData } from "../utils/data"
import QueSingleSelect from './components/QueSingleSelect'
import QueList from './components/QueList'
import QuestionerResult from './components/QuestionerResult'

import styles from './styles'



const FIRST_QUE = {
    question: "Hello, Please tell us which language you'd like to take this test in:",
    options: [
        { text: "English", value: 'english' },
        { text: "हिन्दी", value: 'hindi' },
        { text: "বাংলা", value: 'bangla' },
        { text: "తెలుగు", value: 'telugu' },
        { text: "தமிழ்", value: 'tamil' }
    ]
}



/**
 * Select language
 * Hit api to get data in that language
 * Show loading
 * On success create a list of questions
 * add empty ans to questions
 * 
 * render que list with given data
 */
export default ({ navigation }) => {

    const scrollViewRef = useRef(null)
    const safeArea = useSafeArea()
    const [api_state, data, getApiData, results, resetApi] = useGetQuestionsData()

    const [language, setLanguage] = useState('engish')
    const [ans_selected, setAnsSelected] = useState(false)

    const [show_results, setShowResults] = useState(false)
    const [risk, setRisk] = useState('')

    useFocusEffect(useCallback(() => {
        return () => {
            // reset all data on tab change
            setShowResults(false)
            setRisk('')
            setAnsSelected(false)
            resetApi()
        }
    }, []))

    const selectLanguage = (_, lang) => {
        setLanguage(lang)
        setAnsSelected(true)
        getApiData(lang)
    }

    const onComplete = (que_list, scan_result) => {
        // scan_result : 0 | 1 | 2
        let curr_risk_index = 0

        for (let index = 0; index < que_list.length; index++) {
            const que = que_list[index];
            if (que.q_key == 'age') continue;

            if (que.que_type === 'single') {
                let curr_ans = Boolean(Number(que.ans)) ? Number(que.ans) : 0
                curr_risk_index = curr_risk_index + curr_ans
            } else {
                // get from multi question
                for (let a_ind = 0; a_ind < que.ans.length; a_ind++) {
                    const ans = que.ans[a_ind];
                    let curr_ans = Boolean(Number(ans)) ? Number(ans) : 0
                    curr_risk_index = curr_risk_index + curr_ans
                }
            }
        }
        // calculate total score
        if (scan_result == 2) {
            // Covid
            if (curr_risk_index > 10) {
                // High risk
                setRisk(3)
            }
            else { // Medium risk
                setRisk(2)
            }
        } else {
            if (curr_risk_index < 10) {
                setRisk(1)
            } else if (curr_risk_index < 15) {
                setRisk(2)
            } else {
                setRisk(3)
            }
        }
        setShowResults(true)
    }


    return (
        <View style={{ paddingTop: safeArea.top }}>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}
                contentContainerStyle={{ paddingBottom: 100 }}>
                <Text style={styles.heading}>AiVed Assessment</Text>
                <QueSingleSelect
                    question={FIRST_QUE.question} options={FIRST_QUE.options}
                    ans={language} ans_selected={ans_selected}
                    setAns={selectLanguage}
                />
                {api_state.loading && <ActivityIndicator size="small" />}
                {api_state.fetched &&
                    <QueList data={data} onComplete={onComplete} />
                }
                {show_results &&
                    <QuestionerResult data={results} risk={risk} />
                }
            </ScrollView>
        </View>
    )
}