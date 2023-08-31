import React from "react";
import './FaceRecognition.css'

export default function FaceRecognition({ imageUrl, box }) {
    return (
        <div className='flex justify-center m-auto'>
            <div className='absolute mt-2'>
                <img id='inputImage' alt="" src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}