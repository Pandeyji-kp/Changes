"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function AuthForm() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ email: '', password: '' });

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', loginData);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Register Data:', registerData);
    };

    return (
        <>
            <div className="bg-white py-6">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">My Account</h3>
                        <ul className="flex justify-center items-center space-x-2 text-gray-600 text-sm mt-2">
                            <li>
                                <Link href="/" className="hover:text-blue-500">Home</Link>
                            </li>
                            <li>&gt;</li>
                            <li className="text-gray-800 font-medium">My Account</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />

            <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white p-6 gap-6">
                {/* Login Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <div>
                            <label className="block font-semibold">Email <span className="text-red-500">*</span></label>
                            <input 
                                type="email" 
                                name="email" 
                                value={loginData.email} 
                                onChange={handleLoginChange} 
                                placeholder="Email Address" 
                                className="w-full p-2 border rounded mt-1" 
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Password <span className="text-red-500">*</span></label>
                            <input 
                                type="password" 
                                name="password" 
                                value={loginData.password} 
                                onChange={handleLoginChange} 
                                placeholder="Password" 
                                className="w-full p-2 border rounded mt-1" 
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-500 text-sm">Lost your password?</a>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                        </div>
                    </form>
                </div>

                {/* Register Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                        <div>
                            <label className="block font-semibold">Email <span className="text-red-500">*</span></label>
                            <input 
                                type="email" 
                                name="email" 
                                value={registerData.email} 
                                onChange={handleRegisterChange} 
                                placeholder="Email Address" 
                                className="w-full p-2 border rounded mt-1" 
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Password <span className="text-red-500">*</span></label>
                            <input 
                                type="password" 
                                name="password" 
                                value={registerData.password} 
                                onChange={handleRegisterChange} 
                                placeholder="Password" 
                                className="w-full p-2 border rounded mt-1" 
                                required
                            />
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
                    </form>
                </div>
            </div>
            <hr />
        </>
    );
}
