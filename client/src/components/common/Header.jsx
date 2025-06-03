import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <>
            <header class="text-black body-font bg-white border-b-4 border-red-400">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} alt="Logo" className="w-10 h-auto"/>
                        <span class="ml-3 text-xl">JWT-AUTH</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900">HOME</a>
                        <a class="mr-5 hover:text-gray-900">CONTACT</a>
                        <a class="mr-5 hover:text-gray-900">ABOUT</a>
                        <a class="mr-5 hover:text-gray-900">CUSTOMER SUPPORT</a>
                    </nav>
                    <div className='space-x-2 text-white'>
                        <Link to="./" class="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">LOGIN</Link>
                        <Link to="./register" class="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">REGISTER</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header