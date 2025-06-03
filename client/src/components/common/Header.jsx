import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react'; // Install `lucide-react`
import logo from '../../assets/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-xl font-bold text-red-500">
                    <img src={logo} alt="Logo" className="w-10 h-auto" />
                    JWT-AUTH
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    {!token && (
                        <Link to="/" className="hover:text-red-500 transition">Home</Link>
                    )}
                    {token && (
                        <Link to="/profilecard" className="hover:text-red-500 transition">Profile</Link>
                    )}
                    <Link to="/about" className="hover:text-red-500 transition">About</Link>
                    <Link to="/game" className="hover:text-red-500 transition">Game</Link>
                </nav>

                {/* User Actions */}
                <div className="hidden md:flex items-center gap-3">
                    {token ? (
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                Hi, {user?.name.split(' ')[0]} <ChevronDown size={16} />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden bg-white px-4 pb-4 shadow">
                    <nav className="flex flex-col gap-3">
                        {!token && (
                            <Link to="/" className="hover:text-red-500 transition">Home</Link>
                        )}
                        {token && (
                            <Link to="/profilecard" className="hover:text-red-500 transition">Profile Card</Link>
                        )}
                        <Link to="/about" className="hover:text-red-500 transition">About</Link>
                        <Link to="/game" className="hover:text-red-500 transition">Game</Link>
                        {token ? (
                            <>
                                <Link to="/profile" className="hover:text-red-500 transition">Profile</Link>
                                <button onClick={handleLogout} className="text-left text-red-500">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="hover:text-blue-600">Login</Link>
                                <Link to="/register" className="hover:text-blue-600">Register</Link>
                            </>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
