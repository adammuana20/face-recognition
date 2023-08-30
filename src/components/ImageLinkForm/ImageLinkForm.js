import React from "react";
import './ImageLinkForm.css'

export default function ImageLinkForm({ onInputChange, onPictureSubmit }) {
    return (
        <div>
            <p className='text-2xl'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="flex justify-center">
                <div className="form flex p-4 rounded-[3px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)]">
                    <input className="text-1xl w-3/5 center p-2 mr-5" type="text" onChange={onInputChange} />
                    <button 
                        className='w-2/5 grow transition px-5 py-2 bg-purple-400 text-white block hover:grow'
                        onClick={onPictureSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}