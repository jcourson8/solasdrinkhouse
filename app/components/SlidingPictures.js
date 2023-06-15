import { useState, useEffect } from 'react';

const SlidingPictures = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [pictures]);

  return (
    <div className="flex overflow-x-auto mt-8 ">
      {pictures.map((picture, index) => (
        <img
          key={index}
          className={`w-1/${pictures.length} h-auto transform transition-transform duration-500 ${
            index === currentIndex ? 'scale-100' : 'scale-90'
          }`}
          src={picture}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SlidingPictures;