'use client';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Profile() {
    const [sessionLoaded, setSessionLoaded] = useState(false);
    const { data: session, status } = useSession();

    const handleLogin = (e) => {
        if (!session) {
            e.preventDefault();
            signIn('identity-server4');
        }
    };

    const handleLogout = async () => {
        clearAllCookies();
        await signOut(); // Adjust callbackUrl as needed
    };

    const clearAllCookies = () => {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        });
    };

    useEffect(() => {
        setSessionLoaded(true);
    }, [session]);

    return (
        <>
            {!session && !sessionLoaded && <div>Loading..</div>}
            {!session && sessionLoaded && (
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
                    <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg max-w-md w-full">
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Access Restricted</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Please log in to view your profile and high score history.
                                </p>
                            </div>
                            <button
                                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800"
                                onClick={handleLogin}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {session && sessionLoaded && (
                <div className="flex flex-col items-center justify-center h-screen gap-8 bg-black">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 bg-gray-600">
                            <span className="flex h-full w-full items-center justify-center text-white">JP</span>
                        </div>
                        <div className="text-center text-white">
                            <h2 className="text-2xl font-bold">John Doe</h2>
                            <p className="text-gray-400">john.doe@example.com</p>
                        </div>
                    </div>
                    <div className="rounded-lg border shadow-sm w-full max-w-md bg-gray-900 text-white" data-v0-t="card">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">High Score History</h3>
                        </div>
                        <div className="p-6 grid gap-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-medium">Flappy Bird</h3>
                                    <p className="text-gray-400">Score: 1234</p>
                                </div>
                                <div className="text-primary">
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
                                        className="w-6 h-6"
                                    >
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                        <path d="M4 22h16"></path>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-medium">Space Invaders</h3>
                                    <p className="text-gray-400">Score: 5678</p>
                                </div>
                                <div className="text-primary">
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
                                        className="w-6 h-6"
                                    >
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                        <path d="M4 22h16"></path>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-medium">Tetris</h3>
                                    <p className="text-gray-400">Score: 9012</p>
                                </div>
                                <div className="text-primary">
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
                                        className="w-6 h-6"
                                    >
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                        <path d="M4 22h16"></path>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="mt-8 px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Log Out
                    </button>
                </div>
            )}
        </>
    );
}
