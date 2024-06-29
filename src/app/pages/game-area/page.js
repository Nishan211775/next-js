'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import * as signalR from '@microsoft/signalr';

export default function GameArea() {
    const searchParams = useSearchParams()
    const joiningCode = searchParams.get('joiningCode');
    const [connection, setConnection] = useState(null);
    const [connectUsers, setConnectedUsers] = useState([]);

    useEffect(() => {
        const connect = new signalR.HubConnectionBuilder()
            .withUrl(process.env.NEXT_PUBLIC_ADMIN_API + "chatHub")
            .withAutomaticReconnect()
            .build();

        connect.start()
            .then(() => {
                console.log("Connected to SignalR Hub!");

                // Join the group
                connect.send("JoinGroup", joiningCode)
                    .then(() => {
                        console.log(`Joined group: ${joiningCode}`);
                    })
                    .catch(err => console.error("Failed to join group: ", err));

                // Listen for messages
                connect.on("ReceiveMessage", (user, message, timestamp) => {
                    console.log('Received message:', { user, message, timestamp });
                    setConnectedUsers(prevUsers => [...prevUsers, { timestamp }]);
                });

                setConnection(connect);
                sendMessage(connect);
            })
            .catch(error => console.error("Connection failed: ", error));

        return () => {
            connect.stop();
        };
    }, []);

    const sendMessage = (connect = null) => {
        if (connection) {
            console.log("Sending message...");
            connection.send("SendMessageToGroup", joiningCode)
                .then(() => {
                    console.log("Message sent!");
                    // setMessage(""); // Clear message input after sending
                })
                .catch(err => console.error("Message send failed: ", err));
        }

        if (connect && !connection) {
            console.log("Sending message...");
            connect.send("SendMessageToGroup", joiningCode)
                .then(() => {
                    console.log("Message sent!");
                    // setMessage(""); // Clear message input after sending
                })
                .catch(err => console.error("Message send failed: ", err));
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 p-4 lg:p-8">
                <div className="bg-black rounded-lg p-6 flex flex-col gap-4 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-bold">Lobby</div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">Join Code:</span>
                            <span className="text-lg font-mono bg-gray-800 p-2 rounded">{joiningCode}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                                        <img className="aspect-square h-full w-full" alt="User 1" src="../../icons/user.png" />
                                    </span>
                                    <div>User 1</div>
                                </div>
                            </div>
                        </div>
                        
                        <button className="inline-flex items-center justify-center h-10 px-4 py-2 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                            Start Game
                        </button>
                    </div>
                </div>

                <div className="bg-black rounded-lg p-6 flex flex-col gap-4 text-white">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold">Quiz</div>
                        <div className="flex items-center gap-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>00:30</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-gray-800 rounded-lg p-4">
                            <div className="text-lg font-bold">What is the capital of France?</div>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-700 hover:bg-gray-600 transition">
                                    Paris
                                </button>
                                <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-700 hover:bg-gray-600 transition">
                                    London
                                </button>
                                <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-700 hover:bg-gray-600 transition">
                                    Berlin
                                </button>
                                <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-700 hover:bg-gray-600 transition">
                                    Madrid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}
