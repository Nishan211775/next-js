"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <a
                    className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <span className="text-lg font-bold">Quiz App</span>
                </a>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="hover:text-gray-200 transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/pages/play-quiz" className="hover:text-gray-200 transition-colors duration-300">
                        Quiz
                    </Link>
                    <Link href="/pages/leaderboard" className="hover:text-gray-200 transition-colors duration-300">
                        Leaderboard
                    </Link>
                    <Link href="/pages/profile" className="hover:text-gray-200 transition-colors duration-300">
                        Profile
                    </Link>
                </nav>
                <div className="flex items-center gap-2">
                    <span
                        className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 bg-gray-700 hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
                        type="button"
                        id="radix-:R1tlafnnja:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                    >
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-white font-bold">JP</span>
                    </span>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                    <Link href="/" onClick={_ => setIsMenuOpen(false)} className="block py-2 px-4 hover:text-gray-200 transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/pages/play-quiz" onClick={_ => setIsMenuOpen(false)} className="block py-2 px-4 hover:text-gray-200 transition-colors duration-300">
                        Quiz
                    </Link>
                    <Link href="/pages/leaderboard" onClick={_ => setIsMenuOpen(false)} className="block py-2 px-4 hover:text-gray-200 transition-colors duration-300">
                        Leaderboard
                    </Link>
                    <Link href="/pages/profile" onClick={_ => setIsMenuOpen(false)} className="block py-2 px-4 hover:text-gray-200 transition-colors duration-300">
                        Profile
                    </Link>
                </nav>
            )}
        </header>
    );
}
