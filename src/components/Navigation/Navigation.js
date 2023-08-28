import React from "react";

export default function Navigation({ onRouteChange, isSignedIn }) {
    return (
         isSignedIn ? (
        <nav className='flex justify-end'>
            <p 
                onClick={() => onRouteChange('signout')} 
                className='text-2xl underline cursor-pointer p-3 hover:text-gray-400'
            >
                Sign Out
            </p>
        </nav>
        )
        : (
        <nav className='flex justify-end'>
            <p 
                onClick={() => onRouteChange('signin')}
                className='text-2xl underline cursor-pointer p-3 hover:text-gray-400'
            >
                Sign In
            </p>
            <p 
                onClick={() => onRouteChange('register')}
                className='text-2xl underline cursor-pointer p-3 hover:text-gray-400'
            >
                Register
            </p>
        </nav>
        )
    )    
    
}