import {ReactComponent as Next} from "../images/icon-next.svg";
import {ReactComponent as Previous} from "../images/icon-previous.svg";
import { useState } from "react";

const LightBox = () => {
    const images = [1,2,3,4];
    const [imageIndex, setImageIndex] = useState(0)
    const currentimage = `images/image-product-${imageIndex + 1}.jpg`

    return (
        <div className="lightbox">
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
    )
}

export default LightBox
