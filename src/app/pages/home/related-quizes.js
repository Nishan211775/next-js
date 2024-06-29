export default function RelatedQuizes() {
    return (
      <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl text-white font-bold mb-4">Related Quizzes</h2>
          <div>
            <a
              className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg p-4 flex items-center justify-between hover:shadow-sm"
              href="#"
              rel="ugc"
            >
              <div>
                <h3 className="text-lg font-semibold">History Quiz</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Test your knowledge of historical events
                </p>
              </div>
              <i className="fas fa-chevron-right text-gray-200 hover:text-gray-300"></i> {/* Replace with icon library */}
            </a>
          </div>
        </div>
      </div>
    );
  }
  