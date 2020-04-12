import { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker'

import size from 'lodash/size'



/**
 * handler picker and provide picked images list
 * 
 * Call From
 *      UploadScan
 */
export default () => {

    const [pickedImages, setPickedImages] = useState([])

    let hasPickedImages = size(pickedImages) > 0

    const cleanTempImages = () => {
        ImagePicker.clean()
    }

    const removeImage = (removedIndex) => {
        let filteredImages = pickedImages.filter((_, index) => index !== removedIndex)
        setPickedImages(filteredImages)
    }

    const pickImageFromGallary = () => {
        ImagePicker.openPicker({
            width: 2160,
            height: 2160,
            mediaType: 'photo',
            cropping: true,
            freeStyleCropEnabled: true,
            avoidEmptySpaceAroundImage: true
        }).then((image) => {
            setPickedImages([...pickedImages, image])
        }).catch(_ => { })
    }


    return { hasPickedImages, pickedImages, pickImageFromGallary, removeImage, cleanTempImages }
}