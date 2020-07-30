import React, { useContext } from "react";
import ImageHolder from "./../ImageHolder/ImageHolder";
import ImageControl from "./../ImageControl/ImageControl";
import { UContext } from '../../context/UmbrellaContext';

const Umbrella = () => {
    const { selectedImage } = useContext(UContext);

    return (
        <div className="" style={{ background: selectedImage.bg, height: '100vh' }}>
            <div className="row" style={{ width:'75%' }}>
                <div className="col s12 m12" style={{ marginTop: '10rem'}}>
                    <div className="card darken-1" style={{ minHeight: '45rem', background: selectedImage.bg }}>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s7 image-holder" style={{ minHeight: '40rem' }}>
                                    <ImageHolder />
                                </div>

                                <div className="col s5 image-control" >
                                    <ImageControl />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default Umbrella;