import React from 'react';

const PhotoGrid = ({ pictures }) => {
  const evenPictures = pictures.filter((_, index) => index % 2 === 0);
  const oddPictures = pictures.filter((_, index) => index % 2 !== 0);

  return (
    <div className="flex space-x-4 pt-4">
      <div className="grid-cols-1 gap-4">
        {evenPictures.map((photo, index) => (
          <img key={index} src={photo.src} alt={photo.alt} className="w-full object-cover py-2" />
        ))}
      </div>
      <div className="grid-cols-1 gap-4">
        {oddPictures.map((photo, index) => (
          <img key={index} src={photo.src} alt={photo.alt} className="w-full object-cover py-2" />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;