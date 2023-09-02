import React from "react";

export default function SignIn({ onRouteChange, loadUser }) {
    const [formSignIn, setFormSignIn] = React.useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormSignIn(prevData => ({
            ...prevData,
            [name] : value
        }))
    }

    function onSubmitSignIn() {
        fetch('https://brain-backend-bp3u.onrender.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: formSignIn.email,
                password: formSignIn.password
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    loadUser(user)
                    onRouteChange('home')
                }
            })
        
    }

    return (
        <div className="w-full flex justify-center items-center h-[500px]">
            <div className="bg-transparent shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] rounded px-8 pt-6 pb-8 mb-4 w-96">
                <legend className="font-bold text-3xl mb-4">Sign In</legend>
                <div className="mb-4">
                    <span className="block text-sm font-bold mb-2">
                        Email
                    </span>
                    <input className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" autoComplete="off" name="email" type="email" onChange={handleChange} value={formSignIn.email} />
                </div>
                <div className="mb-6">
                    <span className="block text-sm font-bold mb-2">
                        Password
                    </span>
                    <input className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" name="password" type="password" autoComplete="off" onChange={handleChange} value={formSignIn.password}/>
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-transparent hover:bg-white-700 text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={() => onSubmitSignIn()}
                    >
                        Sign In
                    </button>
                    <p 
                        onClick={() => onRouteChange('register')}
                        className="inline-block align-baseline font-bold text-base text-black hover:text-white hover:cursor-pointer">
                        Register
                    </p>
                </div>
            </div>
        </div>
    )
}