import React, { useState, useEffect } from 'react';
import '../css/HeadingContent.css'

function HeadingCarousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stringArray = props.strings;
    const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % stringArray.length);
        setOpacity(0);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [stringArray.length]);

  useEffect(() => {
    setOpacity(1);
  }, [currentIndex]);

  return (
    <div className="string-display">
    <div className="string-display-content" style={{ opacity }}>
      {stringArray[currentIndex]}
    </div>
  </div>
  );
}

export default HeadingCarousel;
