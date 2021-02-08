import React, { useState } from 'react'
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter, FaTwitch } from 'react-icons/fa'

const Header = ({ title }) => {
    return (
        // Tailwind header added from https://tailwindcomponents.com/component/responsive-header
        <header>
            <nav className="w-full flex flex-row items-center justify-between bg-indigo-600 p-4">
                <div className="block text-white mr-6">
                    <span className="font-bold text-lg tracking-tight">{title}</span>
                </div>
                <div>
                    <a target='__blank' href='https://github.com/JLoweDev/react-cv' className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-2 ml-1 lg:mt-0 lg:ml-2">
                        <FaGithub />
                    </a>
                    <a target='__blank' href='https://www.youtube.com/channel/UCYkZtYIbyDdb1fo3Pf1Q4rg/featured' className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-2 ml-1 lg:mt-0 lg:ml-2">
                        <FaYoutube />
                    </a>
                    <a target='__blank' href='https://www.linkedin.com/in/james-lowe-b0b67b162/' className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-2 ml-1 lg:mt-0 lg:ml-2">
                        <FaLinkedin />
                    </a>
                    <a target='__blank' href='https://twitter.com/JLoweDev' className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-2 ml-1 lg:mt-0 lg:ml-2">
                        <FaTwitter />
                    </a>
                    <a target='__blank' href='#' className="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-2 ml-1 lg:mt-0 lg:ml-2">
                        <FaTwitch />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header
