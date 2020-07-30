import React, { useContext } from 'react';
import { UContext } from '../../context/UmbrellaContext'; 

const ImageSelector = () => {
const { selectImage, images, } = useContext(UContext);

    return images.map(img =>
        <li key={img.id}>
            <button
                key={img.id}
                style={{
                    width: '2rem',
                    height: '2rem',
                    marginRight: '1.5rem',
                    background: img.button,
                    border: `3px solid ${img.border}`
                }}
                onClick={() => selectImage(img.id)}
                className="btn-floating btn-large waves-effect waves-light">

            </button>
        </li>)
}
export default ImageSelector;