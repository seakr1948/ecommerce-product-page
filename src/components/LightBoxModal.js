import React from 'react'
import { useState } from 'react';
import {ReactComponent as Next} from "../images/icon-next.svg";
import {ReactComponent as Previous} from "../images/icon-previous.svg";

const LightBoxModal = ({toggleVisible}) => {
    const images = [1,2,3,4];
    const [imageIndex, setImageIndex] = useState(0);
    const currentimage = `images/image-product-${imageIndex + 1}.jpg`
    return (
        <div className="fixed-div ">
            <div className='lightbox-modal'>
                <div className='close'>
                    <button onClick={() => toggleVisible(false)}>
                        &times;
                    </button>
                </div>
                <div className="image-container">
                    <img src={currentimage} alt="" />
                    <button className="previous d-flex justify-content-center align-items-center" onClick={() => {
                        let temp = (imageIndex - 1) % images.length
                        if (temp < 0){
                            temp = images.length - 1
                        }
                        console.log(temp)
                        setImageIndex(temp)
                    }}>
                        <Previous />
                    </button>
                    <button className="next d-flex justify-content-center align-items-center" onClick={() => {
                        let temp = (imageIndex + 1) % images.length
                        console.log(temp)
                        setImageIndex(temp)
                    }}>
                        <Next />
                    </button>
                </div>
                
                <div className="thumbnails justify-content-between align-items-center">
                    {
                        images.map((element, index) => {
                            return(
                            <div className= {`thumbnail-container ${imageIndex === index ? "selected" : ''} `}>    
                                <img 
                                    
                                    src={`images/image-product-${element}-thumbnail.jpg`} 
                                    alt=''
                                    onClick={() => {setImageIndex(index)}}
                                    key={index}
                                />
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LightBoxModal
