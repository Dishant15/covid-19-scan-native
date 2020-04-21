import React, { useCallback, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

import { useStateApiData } from '../utils/data'
import { get, size, trim, find } from 'lodash'



export default () => {
    const [api_state, data, getApiData] = useStateApiData()
    let isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            console.log("api call")
            getApiData()
        }
    }, [isFocused])

    // console.log("state wise data => ", data, api_state)

    let regions = get(data, "data.regional", [])

    /**
     * convert list in to label value format
     */
    const getRegionalList = () => {
        if (size(regions) === 0) return []

        let dropdownData = []

        regions.forEach(region => {
            let location = get(region, "loc", "")
            dropdownData.push({
                label: location,
                value: location
            })
        });
        return dropdownData
    }

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
        getRegionalList,
        getRegionDetails
    }
}