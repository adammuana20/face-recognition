import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

export default function Logo() {
    return(
        <div className="m-4 mt-0">
            <Tilt className="Tilt rounded-[2px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] flex items-center justify-center" options={{ max:55 }} style={{ height:150, width:150 }}>
                <div className="Tilt-inner">
                    <img src={brain} alt="logo"/>
                </div>
            </Tilt>
        </div>
    )
}