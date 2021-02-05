import React, { useState } from 'react'
import { FaGithub, FaBars } from 'react-icons/fa'

const Header = ({ title, github }) => {
    return (
        // Tailwind header added from https://tailwindcomponents.com/component/responsive-header
        <header>
            <nav class="w-full flex flex-row items-center justify-between bg-green-500 p-4">
                <div class="block text-white mr-6">
                    <span class="font-semibold text-lg tracking-tight">{title}</span>
                </div>
                <div>
                    <a href={github} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">
                        <FaGithub />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header
