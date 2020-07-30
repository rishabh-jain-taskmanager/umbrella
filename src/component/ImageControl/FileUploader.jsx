import React, { useContext } from 'react';
import { UContext } from '../../context/UmbrellaContext';
import upload from "../../asset//upload_icon.svg";
import classes from "./style";


const FileUploader = () => {
    const { selectedImage,
        uploadImage,
        uploadedImage,
        error,
        removeImage,
        setError,
        loader, 
        isLoading } = useContext(UContext);

    const text = () => (<span><h6>
        <strong>Customize your umbrella</strong> <br /> <br />
                     Upload a logo for an instant preview.
                </h6>
        <p>
            .png and .jpg files only. Max files size is 5MB.
                </p></span>)

    const uploadedImg = uploadedImage && uploadedImage.name ? uploadedImage.name : '';

    return <>
        {text()}
        <br />
        <label
            className="waves-effect waves-light btn-small"
            htmlFor="upload-photo"
            style={{
                width: '100%',
                padding: '0.1rem 1.2rem',
                background: selectedImage.button
            }}
        >
            <img src={isLoading ? loader: upload} alt="upload" className={isLoading ? 'loader': ''} style={classes.img} />
            {uploadedImg ? uploadedImg : 'UPLOAD LOGO'}
        </label>{uploadedImg &&
            <div
                style={{
                    zIndex: 9, color: '#fff',
                    position: "relative",
                    right: '1rem',
                    top: '-1.8rem',
                    cursor: 'pointer'
                }}
                className="right"
                onClick={() => removeImage()} >
                <strong>X</strong>
            </div>}

        <input
            id="upload-photo"
            type="file"
            onChange={(e) => uploadImage((e.target.files[0]))}
            style={{
                display: 'none'
            }}
            className="waves-effect waves-light btn-small" />
        {error &&
            <blockquote>
                <strong>{error}</strong>{' '}{<div
                    style={{
                        position: "relative",
                        right: '50%',
                        cursor: 'pointer',
                        color: '#fff'
                    }}
                    title="Remove Error"
                    className="right"
                    onClick={() => setError()} >
                    <strong>X</strong>
                </div>}
            </blockquote>
        }</>

}
export default FileUploader;