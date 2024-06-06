import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const images = [
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426799/XaviRenovaties/Reforma%202/IMG_1558-scaled_aunq5f.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426803/XaviRenovaties/Reforma%202/IMG_1553-scaled_qdd7ak.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426798/XaviRenovaties/Reforma%202/IMG_1562-scaled_wudies.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426799/XaviRenovaties/Reforma%202/IMG_1555-scaled_pqkf8y.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426799/XaviRenovaties/Reforma%202/IMG_1559-scaled_ewxnov.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426799/XaviRenovaties/Reforma%202/IMG_1555-scaled_pqkf8y.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426798/XaviRenovaties/Reforma%202/IMG_1549-scaled_uyfy8f.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426798/XaviRenovaties/Reforma%202/IMG_1541-scaled_i8o1iu.jpg",
    "https://res.cloudinary.com/dytjoh7oh/image/upload/v1715426798/XaviRenovaties/Reforma%202/IMG_1546-scaled_ywq1ar.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * currentIndex,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div id='slider' ref={sliderRef}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} />
      ))}
    </div>
  );
};

export default Slider;
