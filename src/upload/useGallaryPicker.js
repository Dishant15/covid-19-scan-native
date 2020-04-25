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

    const cropImage = () => {
        ImagePicker.openCropper({
            cropping: true,
            freeStyleCropEnabled: true,
            avoidEmptySpaceAroundImage: true,
            path: pickedImage.path,
            width: pickedImage.width,
            height: pickedImage.width,
            ...pickedImage
        }).then((image) => {
            setPickedImage({ ...image, filename: pickedImage.filename })
        }).catch(_ => { })
    }

    const pickImageFromGallary = () => {
        ImagePicker.openPicker({
            mediaType: 'photo'
        }).then((image) => {
            setPickedImage(image)
        }).catch(_ => { })
    }


    return { hasPickedImage, pickedImage, pickImageFromGallary, removeImage, cleanTempImage, cropImage }
}