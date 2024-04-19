import React, { useState } from 'react';
import './ImageSlider.css'; 

function ImageSlider() {
  // Sample images
  const images = [
    '/assets/2617355.jpg',
    '/assets/black_friday_web_banner_02.jpg',
    '/assets/Fashion-Web-Banner-14.jpg',
    '/assets/grass-7288141_1920.jpg',
    '/assets/nature-7602212_1920.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <button className="prev-button" onClick={prevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button className="next-button" onClick={nextImage}>Next</button>
    </div>
  );
}

export default ImageSlider;
