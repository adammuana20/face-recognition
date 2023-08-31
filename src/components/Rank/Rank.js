import React from "react";

export default function Rank({ name, entries }) {
    return (
        <div>
            <div className='text-white text-2xl'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='text-white text-5xl'>
                {entries}
            </div>
        </div>
    )
}