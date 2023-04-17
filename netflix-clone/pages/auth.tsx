import React, { useState } from "react";
import Input from '../components/Input';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                id="name"
                                type="text"
                                label='Username'
                                value ={name}
                                onChange={(e: any) => setName(e.targer.value)}
                             />
                             <Input
                                id="email"
                                type="email"
                                label='Email address or phone number'
                                value ={email}
                                onChange={(e: any) => setEmail(e.targer.value)}
                             />
                             <Input
                                id="password"
                                type="password"
                                label='Password'
                                value ={password}
                                onChange={(e: any) => setPassword(e.targer.value)}
                             />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            Login
                        </button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={32} />
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub size={32} />
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            First time using Netflix?
                            <span className="text-white ml-1 hover:underline cursor-pointer">
                                Create an account
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;