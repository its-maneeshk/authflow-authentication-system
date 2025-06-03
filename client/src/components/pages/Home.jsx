import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            {/* <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 via-white to-pink-100">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center px-6 py-12 bg-white shadow-xl rounded-xl border border-gray-200 max-w-2xl"
                >
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">JWT Authentication System</h1>
                    <p className="text-gray-700 text-lg">
                        This page demonstrates a secure <span className="font-semibold text-blue-500">JWT-based login</span> and
                        protected route system with session handling.
                    </p>
                </motion.div>
            </div> */}

            <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-5 text-white">
                {/* ASCII Animation */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/ASCII-art.gif"
                        alt="ASCII animation"
                        className="w-full max-w-md rounded shadow-lg border border-gray-600"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow">
                        JWT Authentication System
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        This page demonstrates a secure{' '}
                        <span className="text-blue-500 font-semibold">JWT-based login</span> and
                        protected route system with seamless session handling using modern web technologies.
                    </p>
                    <p className="text-sm text-gray-400 italic">Built with React, Express, and Tailwind CSS</p>
                </div>
            </div>

        </>
    );
};

export default Home;
