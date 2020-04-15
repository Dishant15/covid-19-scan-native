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

    const [pickedImage, setPickedImage] = useState({})

    let hasPickedImage = size(pickedImage) > 0

    const cleanTempImage = () => {
        ImagePicker.clean()
    }

    const removeImage = () => {
        setPickedImage({})
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
            setPickedImage(image)
        }).catch(_ => { })
    }


    return { hasPickedImage, pickedImage, pickImageFromGallary, removeImage, cleanTempImage }
}