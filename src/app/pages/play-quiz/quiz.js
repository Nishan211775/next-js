"use client";
import Confirm from "@/app/components/confirm";
import { useEffect, useState, useRef } from "react";

export default function Quiz() {
    const [timeLeft, setTimeLeft] = useState(-1);
    const [showQuiz, setShowQuiz] = useState(false);
    const [numQuestions, setNumQuestions] = useState(10);
    const [category, setCategory] = useState('All');
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const clockAudioRef = useRef(null);
    const timeOverAudioRef = useRef(null);
    const correctAudioRef = useRef(null);
    const incorrectAudioRef = useRef(null);
    const TIMER = 10;
    const AUDIO_TYPE = {
        CLOCK: 1,
        TIME_OVER: 2,
        CORRECT_ANS: 3,
        INCORRECT_ANS: 4,
    }
    const ANSWER_OPTION = {
        A: 1,
        B: 2,
        C: 3,
        D: 4
    };

    useEffect(() => {
        // Preload the audio when the component mounts
        let clockAudio;
        loadAudio(clockAudioRef, clockAudio)

        let timeOverAudio;
        loadAudio(timeOverAudioRef, timeOverAudio);

        let correctAudio; 
        loadAudio(correctAudioRef, correctAudio);

        let incorrectAudio;
        loadAudio(incorrectAudioRef, incorrectAudio);

        // Cleanup when the component unmounts
        return () => {
            cleanUpAudio(clockAudio);
            cleanUpAudio(timeOverAudio);
            cleanUpAudio(correctAudio);
            cleanUpAudio(incorrectAudio);
        };
    }, []);

    useEffect(() => {
        if (timeLeft < 0) return;
        if (timeLeft < TIMER) {
            const timer = setInterval(() => {
                setTimeLeft(prev => prev + 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            stopAudio(AUDIO_TYPE.CLOCK);
            playAudio(AUDIO_TYPE.TIME_OVER);
        }
    }, [timeLeft]);

    const loadAudio = (audioRef, audio) => {
        audio = audioRef.current;
        audio.load();
    }

    const cleanUpAudio = (audio) => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    const startGame = () => {
        setTimeLeft(0);
        setShowQuiz(true);
        playAudio(AUDIO_TYPE.CLOCK);
    };

    const answerClick = (option) => {
        const correctAnswer = ANSWER_OPTION.B;

        if (option === correctAnswer) {
            stopAudio(AUDIO_TYPE.CLOCK);
            playAudio(AUDIO_TYPE.CORRECT_ANS);
        } else {
            stopAudio(AUDIO_TYPE.INCORRECT_ANS);
            playAudio(AUDIO_TYPE.INCORRECT_ANS);
        }
    }

    const progressBarWidth = `${(timeLeft / TIMER) * 100}%`;

    const getProgressBarColor = () => {
        if (timeLeft <= 10) return 'bg-green-500';
        if (timeLeft <= 20) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const playAudio = (audioType) => {
        switch (audioType) {
            case AUDIO_TYPE.CLOCK:
                clockAudioRef.current.play();
                break;
            case AUDIO_TYPE.TIME_OVER:
                timeOverAudioRef.current.play();
                break;
            case AUDIO_TYPE.CORRECT_ANS:
                correctAudioRef.current.play();
                break;
            case AUDIO_TYPE.INCORRECT_ANS:
                incorrectAudioRef.current.play();
                break;
            default:
                throw 'invalid audio type'
        }
    };

    const stopAudio = (audioType) => {
        switch (audioType) {
            case AUDIO_TYPE.CLOCK:
                clockAudioRef.current.pause();
                break;
            case AUDIO_TYPE.TIME_OVER:
                timeOverAudioRef.current.pause();
                break;
            case AUDIO_TYPE.CORRECT_ANS:
                correctAudioRef.current.pause();
                break;
            case AUDIO_TYPE.INCORRECT_ANS:
                incorrectAudioRef.current.pause();
                break;
            default:
                throw 'invalid audio type'
        }
    };

    return (
        <>
            <audio ref={clockAudioRef}>
                <source src="../../sounds/clock.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <audio ref={timeOverAudioRef}>
                <source src="../../sounds/time-over.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <audio ref={correctAudioRef}>
                <source src="../../sounds/correct.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <audio ref={incorrectAudioRef}>
                <source src="../../sounds/incorrect.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <div className="flex flex-col items-center p-4">
                {!showQuiz && (
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mt-10 mb-6 w-full max-w-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Start a New Game</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Number of Questions</label>
                            <select
                                value={numQuestions}
                                onChange={(e) => setNumQuestions(Number(e.target.value))}
                                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                            >
                                <option value="All">All</option>
                                <option value="Science">Science</option>
                                <option value="History">History</option>
                                <option value="Geography">Geography</option>
                                <option value="Sports">Sports</option>
                            </select>
                        </div>
                        <button
                            onClick={startGame}
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Start Game
                        </button>
                    </div>
                )}

                {showQuiz && (
                    <>
                        <div className="bg-[#FF6B6B] dark:bg-[#FF4B4B] rounded-lg p-4 mt-10 mb-6 w-full max-w-1xl shadow-lg">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-white">Multiple Choice Question</h2>
                            </div>
                        </div>
                        <div className="w-full max-w-1xl mb-4 flex items-center relative">
                            <div className="flex-grow bg-gray-200 dark:bg-gray-700 rounded-full h-6 relative overflow-hidden">
                                <div className={`absolute left-0 top-0 h-full rounded-full ${getProgressBarColor()}`} style={{ width: progressBarWidth }}></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-sm font-medium text-white">Time left: {TIMER - timeLeft}s</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-1xl">
                            <button
                                onClick={_ => answerClick(ANSWER_OPTION.A)}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800 h-10 px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                                Paris
                            </button>
                            <button
                                onClick={_ => answerClick(ANSWER_OPTION.B)}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800 h-10 px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                                London
                            </button>
                            <button
                                onClick={_ => answerClick(ANSWER_OPTION.C)}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800 h-10 px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                                Berlin
                            </button>
                            <button
                                onClick={_ => answerClick(ANSWER_OPTION.D)}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800 h-10 px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                                Madrid
                            </button>
                        </div>

                        <div className="w-full flex justify-end mt-4 max-w-1xl">
                            <button
                                onClick={_ => setShowConfirmDialog(true)}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                                Cancel Game
                            </button>
                        </div>
                    </>
                )}
            </div>

            {showConfirmDialog && <Confirm message={"Are you sure want to stop the game?"}
                onNoHandler={_ => setShowConfirmDialog(false)}
                onYesHandler={_ => { setShowQuiz(false); setShowConfirmDialog(false); stopAudio(AUDIO_TYPE.CLOCK); }} />}
        </>
    );
}
