import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const { username, password, confirmPassword } = formData;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }
        try {
            const res = await axios.patch('http://localhost:8080/user/forget', formData);
            if (res.status === 200) {
                Swal.fire({
                    title: 'Password Reset Successful!',
                    text: 'You can now log in to your account.',
                    icon: 'success',
                    confirmButtonText: 'Go to Login'
                }).then(() => {
                    navigate('/login');
                })
            }
        }
        catch (error) {
            setError(error.response?.data?.message || 'Error resetting password!');
        }
    }
    return (
        <section className="font-mono">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-9">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover bg-center rounded-l-lg"
                            style={{
                                backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGrDhttL7GcRQcXa8i-UM0GEWoHrbuGs_wQg6xPVkVLTILUfkdUu9GMaq6YrBPg0uGhbdIoKQmivDkfedZzoaYbUKkWWSTuuffFgZ2itRwWWhTcCbQdwMk06slmi83e1w3Ke90KMRxMwl5HPWDJq8hVtpMew4cx6anmLgt8crjCo6suYH4kiW3RRmDNNcy/s16000-rw/passwords-sec.jpeg')`,
                            }}
                        ></div>

                        <div className="w-full lg:w-7/12  p-5 rounded-lg lg:rounded-l-none gap-0 border-8 border-red-400 border-opacity-40">
                            <h3 className="pt-4 text-2xl text-center">Forget Password!</h3>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Note: Password reset requires your username as OTP verification is unavailable.
                            </p>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                                <div className="">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="userName">
                                        Username (for user verification)
                                    </label>
                                    <input
                                        name='username'
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="userName"
                                        type="text"
                                        placeholder="SuperStar_Ramu"
                                        value={username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            New Password
                                        </label>
                                        <input
                                            name='password'
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            value={password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                            Confirm New Password
                                        </label>
                                        <input
                                            name="confirmPassword"
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                            value={confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Reset Password
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className='flex items-center space-x-3'>
                                    <div className="text-center">
                                        <Link
                                            to='/register'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Didn't have an account? Register!
                                        </Link>
                                    </div>
                                    <div className='h-16 w-0.5 bg-gray-400 '></div>
                                    <div className="text-center">
                                        <Link
                                            to='/'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Already have an account? Login!
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgetPassword