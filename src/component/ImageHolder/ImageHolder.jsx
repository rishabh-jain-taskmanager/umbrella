import React, { useContext } from 'react';
import { UContext } from "./../../context/UmbrellaContext";
const ImageHolder = () => {
    const { images, isLoading, loader, selectedImage, uploadedImage } = useContext(UContext);
    const renderImage = images.find(img => img.isSelected);
    return (
        <div className="holder">
            {!isLoading ?
                <> <img src={renderImage.image} className="umbrella-image" alt="" />
                    {!isLoading &&
                        uploadedImage &&
                        uploadedImage.url &&
                        <span className="logo-image"> <img src={uploadedImage.url} className="logo-image" alt="" /> </span>}</> :

                <img className="loader" src={loader} style={{ background: selectedImage.bg }} alt="loader" />}
        </div>
    )
}

export default ImageHolder;