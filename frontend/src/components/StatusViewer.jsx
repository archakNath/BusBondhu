import { useState, useEffect } from "react";

export default function StatusViewer({stories,title, className}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 5000; // 5 seconds per story
  const updateInterval = 50;

  const goToNextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setProgress(0);
  };

  const goToPrevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (updateInterval / duration) * 100;
        if (newProgress >= 100) {
          goToNextStory();
          return 0;
        }
        return newProgress;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentStory = stories[currentIndex];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-80 h-144 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        {/* Progress bars */}
        <div className="absolute top-0 left-0 right-0 flex space-x-1 p-2 z-10">
          {stories.map((_, index) => (
            <div
              key={index}
              className="h-[2px] flex-1 bg-gray-600 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-white"
                style={{
                  width:
                    index === currentIndex
                      ? `${progress}%`
                      : index < currentIndex
                      ? "100%"
                      : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Hardcoded username */}
        <div className="absolute top-6 left-0 right-0 flex items-center px-4 z-10">
          <div className="w-6 h-6 rounded-full bg-[#212121] flex items-center justify-center text-white text-sm">
            K
          </div>
          <span className="ml-2 text-white">{title}</span>
        </div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={currentStory.image}
            alt="Story background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Click areas */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full" onClick={goToPrevStory} />
          <div className="w-1/2 h-full" onClick={goToNextStory} />
        </div>
      </div>
    </div>
  );
}
