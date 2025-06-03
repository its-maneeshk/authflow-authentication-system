import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Login = () => {
    const nevigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post('http://localhost:8080/user/login', { username, password });
            if (res.status === 200) {
                const token = res.data.token;
                localStorage.setItem('token', token);
                Swal.fire({
                    title: "Loggedin Successfully!",
                    text: `Welcome back, ${res.data.user.name}!`,
                    icon: 'success',
                    confirmButtonText: 'Go to Dashboard',
                }).then(() => {
                    nevigate('/profile');
                }) 
            }
        }
        catch (error) {
            setError('Invalid username or password!');
        }
    }

    return (
        <>
            <section className="font-mono bg-white">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-24">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover bg-center rounded-l-lg"
                                style={{
                                    backgroundImage: `url('https://imgs.search.brave.com/ti7F41pW3oNrqH6FqBXQEqUEzFDnl1Wf-F8YtVViYTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2luZGV4L3Byb2R1/Y3QtaW1hZ2Utb25l/LndlYnA')`,
                                }}
                            ></div>

                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border-8 border-orange-400 border-opacity-40">
                                <h3 className="pt-4 text-2xl text-center">Login to your Account!</h3>
                                <form className="px-8 pt-6 pb-8 mb-4 space-y-3 bg-white rounded" onSubmit={handleSubmit}>
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="userName">
                                            User Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="userName"
                                            type="text"
                                            placeholder="superStar_Ramu"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            to='/forgetpassword'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link
                                            to='/register'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Didn't have an account? Register!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login