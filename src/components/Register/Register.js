import React from "react"

export default function Register() {
    return (
        <div className="w-full flex justify-center items-center h-[650px]">
            <div className="bg-transparent shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] rounded px-8 pt-6 pb-8 mb-4 w-96">
                <legend className="font-bold text-3xl mb-4">Register</legend>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" autoComplete="off" id="name" type="name" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" autoComplete="off" name="email" type="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="pword">
                        Password
                    </label>
                    <input className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" name="pword" type="text" autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2" htmlFor="cpword">
                        Confirm Password
                    </label>
                    <input className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight border-black focus:border-black focus:outline-none focus:shadow-outline" name="cpword" type="text" autoComplete="off" />
                </div>
                <div className="flex items-center justify-center">
                    <button 
                        className="bg-transparent hover:bg-white-700 text-black hover:bg-black hover:text-white font-bold py-2 px-4 border border-black rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}