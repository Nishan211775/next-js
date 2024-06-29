export default function PlayMode() {
    return (
        <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:R1elafnnja:-trigger-play"
            id="radix-:R1elafnnja:-content-play"
            tabIndex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-6"
            style={{ 'animationDuration': '0s' }}
        >
            <div>
                <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    role="progressbar"
                    data-state="indeterminate"
                    data-max="100"
                    className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20 mb-4"
                >
                    <div
                        data-state="indeterminate"
                        data-max="100"
                        className="h-full w-full flex-1 bg-primary transition-all"
                        style={{ "transform": "translateX(-50%)" }}
                    ></div>
                </div>
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">

                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="red-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">What is the capital of France?</p>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
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
                                    className="h-4 w-4"
                                >
                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                                    <line x1="4" x2="4" y1="22" y2="15"></line>
                                </svg>
                                <span className="sr-only">Report question</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 text-left bg-indigo-500 hover:bg-indigo-600 text-white">
                                Paris
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 text-left bg-indigo-500 hover:bg-indigo-600 text-white">
                                London
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 text-left bg-indigo-500 hover:bg-indigo-600 text-white">
                                Berlin
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 text-left bg-indigo-500 hover:bg-indigo-600 text-white">
                                Madrid
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}