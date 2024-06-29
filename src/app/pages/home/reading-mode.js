import React from 'react';

export default function ReadingMode() {
    return (
        <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:R1elafnnja:-trigger-reading"
            hidden=""
            id="radix-:R1elafnnja:-content-reading"
            tabIndex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 lg:p-6 xl:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
        >
            <div className="space-y-6">
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Frequently Asked Questions</h4>
                    <ul className="space-y-4">
                        <li className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-400">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-900 dark:text-gray-100">1. What is the return policy?</span>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-400">
                                All items are eligible for return within 30 days of delivery.
                            </div>
                        </li>
                        <li className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-400">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-900 dark:text-gray-100">2. How do I track my order?</span>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-400">
                                You can track your order by logging into your account or by using the tracking number provided in your shipping confirmation email.
                            </div>
                        </li>
                        <li className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-400">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-900 dark:text-gray-100">3. What payment methods do you accept?</span>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-400">
                                We accept all major credit cards, PayPal, and Apple Pay.
                            </div>
                        </li>
                        <li className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-400">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-900 dark:text-gray-100">4. Do you offer international shipping?</span>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-400">
                                Yes, we offer international shipping to most countries.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
