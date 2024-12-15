import React, { useEffect, useState } from 'react'
import "./imagecarousel.css"
import food from "../Image/food.png"
import food1 from "../Image/food1.png"
import food2 from "../Image/food2.png"
import food3 from "../Image/food3.png"
import food4 from "../Image/food4.png"

const images= [ food, 
  food1, 
  food2, 
  food3, 
  food4];

  const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel">
        <img src={images[currentIndex]} alt="Image" />
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    );
  };
export default ImageCarousel;  
