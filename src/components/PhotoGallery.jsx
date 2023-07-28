import React, { useState, useEffect } from 'react';

const PhotoGallery = ({ photos, duration }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle going to the next photo
  const goToNextPhoto = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Function to handle going to the previous photo
  const goToPreviousPhoto = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId;

    if (duration > 0) {
      intervalId = setInterval(goToNextPhoto, duration * 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [duration]);

  return (
    <div className="relative">
      <img
        src={photos[activeIndex]}
        alt={`Photo ${activeIndex + 1}`}
        style={{ maxWidth: '100%', height: 'auto' }}
        className='rounded-t-xl'
      />
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-700 p-2 rounded-lg text-white text-2xl"
        onClick={goToPreviousPhoto}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 p-2 rounded-lg text-white text-2xl"
        onClick={goToNextPhoto}
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white opacity-100' : 'bg-white opacity-50'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;