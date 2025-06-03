import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, username, email, password, confirmPassword } = formData;
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
            const res = await axios.post('http://localhost:8080/user/register', formData);
            if (res.status === 201) {
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You can now log in to your account.',
                    icon: 'success',
                    confirmButtonText: 'Go to Login'
                }).then(() => {
                    navigate('/');
                })
            }
        }
        catch (error) {
            setError(error.response?.data?.message || 'Error registering user!');
        }
    }
    return (
        <section className="font-mono bg-white">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-8">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover bg-center rounded-l-lg"
                            style={{
                                backgroundImage: `url('https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg')`,
                            }}
                        ></div>

                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border-8 border-pink-400 border-opacity-40">
                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 space-y-2 bg-white rounded" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fullName">
                                        Full Name
                                    </label>
                                    <input
                                        name="name"
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="fullName"
                                        type="text"
                                        placeholder="Manish Kumar Patel"
                                        value={name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="userName">
                                        User Name
                                    </label>
                                    <input
                                        name='username'
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="userName"
                                        type="text"
                                        placeholder="its_maneeshk_"
                                        value={username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        name='email'
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="maneesh@gmail.com"
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
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
                                            Confirm Password
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
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className='flex items-center justify-center space-x-3'>
                                    <div className="text-center">
                                        <Link
                                            to='/forgetpassword'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Forgotten Password? <br /> Reset here!
                                        </Link>
                                    </div>
                                    <div className='h-16 w-0.5 bg-gray-300 '></div>
                                    <div className="text-center">
                                        <Link
                                            to='/'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Already have an account? <br /> Login!
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

export default Register