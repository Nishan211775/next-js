"use client";
import { useEffect, useState } from "react";
import RelatedQuizes from "./related-quizes";
import PlayMode from "./play-mode";
import ReadingMode from "./reading-mode";

export default function Index() {
  const [selectedMode, setSelectedMode] = useState('play');
  const baseCssClass = `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background 
    transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
    disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
    data-[state=active]:shadow py-4 px-6 font-medium`;
  const [cssClass, setCssClass] = useState(baseCssClass);
  const [activeClass, setActiveClass] = useState('');

  useEffect(() => {
    if (selectedMode === 'play') {
      setActiveClass(baseCssClass + ' bg-indigo-500 text-white dark:bg-indigo-700');
    } else {
      setActiveClass(baseCssClass);
    }
  }, [cssClass, selectedMode]);

  const selectTab = (mode) => {
    setSelectedMode(mode);
  }

  return (
    <div className="relative flex-1 min-h-screen">
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 py-8 px-1 md:px-6">
        <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <div dir="ltr" data-orientation="horizontal" className="w-full">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="h-9 items-center justify-center rounded-lg bg-gray-200 p-1 text-gray-700 flex  border-gray-200 dark:bg-gray-700 dark:text-gray-200"
              tabIndex="-1"
              data-orientation="horizontal"
              style={{ 'outline': 'none' }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedMode === 'play'}
                aria-controls="radix-:R1elafnnja:-content-play"
                data-state={selectedMode === 'play' ? 'active' : 'inactive'}
                id="radix-:R1elafnnja:-trigger-play"
                className={selectedMode === 'play' ? 'bg-indigo-500 text-white dark:bg-indigo-700 ' + cssClass : cssClass}
                tabIndex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
                onClick={() => selectTab('play')}
              >
                Play Mode
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedMode === 'read'}
                aria-controls="radix-:R1elafnnja:-content-reading"
                data-state={selectedMode === 'read' ? 'active' : 'inactive'}
                id="radix-:R1elafnnja:-trigger-reading"
                className={selectedMode === 'read' ? 'bg-indigo-500 text-white dark:bg-indigo-700 ' + cssClass : cssClass}
                tabIndex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
                onClick={() => selectTab('read')}
              >
                Reading Mode
              </button>
            </div>

            {selectedMode === 'play' && <PlayMode />}
            {selectedMode === 'read' && <ReadingMode />}
          </div>
        </div>
        <RelatedQuizes />
      </div>
    </div>
  );
}
