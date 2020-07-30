import React from 'react';
import ImageSelector from "./ImageSelector";
import classes from "./style";
import FileUploader from './FileUploader';
const ImageControl = () => {
    return (
        <div className="outer" style={classes.outer}>
            <div className="inner" style={{ padding: '1rem' }}>
                <h1>Custom Umbrella</h1>
                <ul style={classes.ui}>
                    <ImageSelector />
                </ul>
                <FileUploader />

            </div>
        </div>
    )
}

export default ImageControl;