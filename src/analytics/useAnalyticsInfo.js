import React, { useCallback, useEffect, useState } from 'react'
import { useIsFocused, useFocusEffect } from '@react-navigation/native'

import { useStateApiData } from '../utils/data'
import { get, size, trim, find } from 'lodash'



export default () => {
    const [api_state, data, getApiData] = useStateApiData()
    const [regionalList, setRegionalList] = useState([])
    let isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            getApiData()
        }
    }, [isFocused])

    let regions = get(data, "data.regional", [])

    /**
     * convert list in to label value format
     */
    useEffect(() => {
        if (size(regions) != size(regionalList)) {
            let dropdownData = []
            regions.forEach(region => {
                let location = get(region, "loc", "")
                dropdownData.push({
                    label: location,
                    value: location
                })
            });
            setRegionalList(dropdownData)
        }
    }, [regions])

    /**
     * get full details of region 
     * @param {String} value location dropdown value
     */
    const getRegionDetails = (value) => {
        return find(regions, (region) => region.loc === value)
    }

    return {
        api_state,
        summary: get(data, "data.summary", {}),
        regionalList,
        getApiData,
        getRegionDetails
    }
}