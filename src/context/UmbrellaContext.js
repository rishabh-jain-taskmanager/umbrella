import React, { createContext, useState } from 'react';
import blue from '../asset/Blue umbrella.png';
import pink from '../asset/Pink umbrella.png';
import yellow from '../asset/Yello umbrella.png';
import loader from '../asset/loader_icon.svg';
export const UContext = createContext();


const UContextProvider = (props) => {
    const [images, setImage] = useState([
        { id: 1, button: '#008fc5', border: '#30b4e5', bg: 'rgb(133 207 235)', image: blue, isSelected: true },
        { id: 2, button: '#d8308a', border: '#e9a1a4', bg: 'pink', image: pink, isSelected: false },
        { id: 3, button: '#f1c431', border: '#fcd147', bg: 'rgb(254 220 109)', image: yellow, isSelected: false },
    ]);
    const [isLoading, setLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState({});
    const [error, setError] = useState('');
    const selectedImage = images.find(img => img.isSelected);
    let wait;
    const selectImage = (id) => {
        setLoading(true);
        wait = setTimeout(function () {
            updateImage(id);
        }, 1000);
    }

    // switching between different Umbrella
    const updateImage = (id) => {
        setImage(images.map(img => {
            if (img.id === id) {
                img.isSelected = true;
                return img;
            }
            else {
                img.isSelected = false;
                return img;
            }

        }))
        setLoading(false);
        clearTimeout(wait);
    }

    // upload logo
    const uploadImage = (file) => {
        setLoading(true);
        wait = setTimeout(function () {
            readyImage(file)
        }, 1000);
    }
    const readyImage = (file) => {
        // check size
        let fileSize = file && file.size && file.size / 1048576 <= (1024 * 1024) * 5;

        // check type
        let type = file &&
            file.type &&
            ((file.type).toLowerCase().includes('png') ||
                (file.type).toLowerCase().includes('jpg') ||
                (file.type).toLowerCase().includes('jpeg'));

        if (fileSize && type) {
            let obj = {
                name: file.name,
                url: URL.createObjectURL(file)
            }
            setUploadedImage(obj);
        }
        else if (!fileSize) {
            setError('File Size Should Be Max MB')
            setUploadedImage({});
        }
        else if (!type) {
            setError(`Invalid File Type '${file.type || ''}'`)
            setUploadedImage({});
        }
        clearTimeout(wait);
        setLoading(false);
    }
    const removeImage = () => {
        setError('');
        setUploadedImage({});
    }

    return (
        <UContext.Provider value={{
            images,
            selectImage,
            selectedImage,
            isLoading,
            loader,
            uploadedImage,
            uploadImage,
            error,
            setError,
            removeImage
        }}>
            {props.children}
        </UContext.Provider>
    )
}
export default UContextProvider;