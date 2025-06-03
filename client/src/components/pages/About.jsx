import React from 'react';

const About = () => {
    return (
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
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400">About This Project</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    This application is a demonstration of a full-stack authentication system using <span className="font-semibold text-blue-500">JWT (JSON Web Tokens)</span>.
                    It includes secure login, protected routes, and password reset functionality, built using React, Express, MongoDB, and Tailwind CSS.
                </p>
                <p className="text-md text-gray-500 italic">
                    Created as a secure, scalable, and modern foundation for user management in web apps.
                </p>
            </div>
        </div>
    );
};

export default About;
