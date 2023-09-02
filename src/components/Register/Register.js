import React from "react"

export default function Register({ onRouteChange, loadUser }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    function handleChange(e) {
        const { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function onSubmitSignUp() {
        fetch('https://brain-backend-bp3u.onrender.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password
            })
        })
            .then(res => res.json())
            .then(user => {
                if(user.id) {
                    loadUser(user)
                    onRouteChange('home')
                }
            })
        
    }

    return (
        <div className="w-full flex justify-center items-center h-[550px]">
            <div className="bg-transparent shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] rounded px-8 pt-6 pb-8 mb-4 w-96">
                <legend className="font-bold text-3xl mb-4 text-red">Register</legend>
                <div className="mb-4">
                    <span className="block text-sm font-bold mb-2" >
                        Name
                    </span>
                    <input 
                        className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" 
                        autoComplete="off" 
                        name="name" 
                        type="text" 
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div className="mb-4">
                    <span className="block text-sm font-bold mb-2" >
                        Email
                    </span>
                    <input 
                        className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" 
                        autoComplete="off" 
                        name="email" 
                        type="email" 
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="mb-4">
                    <span className="block text-sm font-bold mb-2">
                        Password
                    </span>
                    <input 
                        className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" 
                        name="password" 
                        type="password" 
                        autoComplete="off" 
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                {/* <div className="mb-6">
                    <span className="block text-sm font-bold mb-2">
                        Confirm Password
                    </span>
                    <input 
                        className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" 
                        name="cpassword" 
                        type="password" 
                        autoComplete="off" 
                        onChange={handleChange}
                        value={formData.cpassword}
                    />
                </div> */}
                <div className="flex items-center justify-center">
                    <button 
                        className="bg-transparent hover:bg-white-700 text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={() => onSubmitSignUp()}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}