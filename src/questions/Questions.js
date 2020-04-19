import React, { useState, useRef } from 'react';

import { View, ScrollView, ActivityIndicator, Text } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

import { useGetQuestionsData } from "../utils/data"
import QueSingleSelect from './components/QueSingleSelect'
import QueList from './components/QueList'

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
export default () => {

    const scrollViewRef = useRef(null)
    const safeArea = useSafeArea()
    const [api_state, data, getApiData] = useGetQuestionsData()

    const [language, setLanguage] = useState('engish')
    const [ans_selected, setAnsSelected] = useState(false)

    const selectLanguage = (_, lang) => {
        setLanguage(lang)
        setAnsSelected(true)
        getApiData(lang)
    }

    return (
        <View style={{ paddingTop: safeArea.top }}>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}
                contentContainerStyle={{ paddingBottom: 100 }}>
                <Text style={styles.heading}>Q & A</Text>
                <QueSingleSelect
                    question={FIRST_QUE.question} options={FIRST_QUE.options}
                    ans={language} ans_selected={ans_selected}
                    setAns={selectLanguage}
                />
                {api_state.loading && <ActivityIndicator size="small" />}
                {api_state.fetched &&
                    <QueList data={data} />
                }
            </ScrollView>
        </View>
    )
}