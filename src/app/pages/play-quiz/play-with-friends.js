import React, { useEffect, useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSession, useSession } from 'next-auth/react';

export default function PlayWithFriends() {
  const router = useRouter()
  const [shareCode, setShareCode] = useState('');
  const [userName, setUserName] = useState('');
  const [code, setCode] = useState('');
  const { data: session } = useSession();

  useEffect(() => {
    if (session.user) {
      setUserName(session.user.name);
    }
    generateShareCode();
  }, []);

  const generateShareCode = () => {
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setShareCode(randomCode);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join My Quiz Game',
        text: `Join my quiz game using this code: ${shareCode}`,
        url: window.location.href
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Sharing not supported on this browser');
    }
  };

  const joinClick = (e) => {
    e.preventDefault();
    if (!(userName.trim())) return;
    else {
      const url = {
        pathname: '/pages/game-area',
        query: { joiningCode: code ? code : shareCode, userName: userName },
      };

      // Perform navigation using Next.js router
      router.push(url);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareCode)
      .then(() => alert('Code copied to clipboard!'))
      .catch(err => alert('Failed to copy code:', err));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mt-10 mb-6 w-full max-w-xl sm:max-w-sm shadow-lg border border-gray-600">
        <div className="bg-gray-900 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Join a Game</h2>

          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 bg-gray-800 border-gray-600 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            placeholder="What's your name?"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <div className="flex items-center gap-4">
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 bg-gray-800 border-gray-600 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter code"
              onChange={(e) => setCode(e.target.value)}
            />

            <Link className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border border-gray-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              href={{
                pathname: '/pages/game-area',
                query: { joiningCode: code ? code : shareCode, userName: userName },
              }}
              onClick={joinClick}
            >
              Join
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-4">
            <QRCodeSVG value={"http://192.168.101.10:3000/pages/game-area?joiningCode=" + shareCode} size={128} bgColor="#ffffff" fgColor="#000000" />
            <p className="text-center text-sm text-white">{`Either scan the QR or share this code with your friends: ${shareCode}`}</p>
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={handleShare.bind(this)}
                className="flex items-center justify-between w-full h-10 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md border border-gray-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                <span><i className="fas fa-share mr-2"></i>Share Code</span>
                <i className="fas fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
