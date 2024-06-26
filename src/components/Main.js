import React, { useState } from 'react'

export default function Main() {
  const images = [
    'banner_1.jpg',
    'banner_2.jpg',
    'banner_3.jpg'
  ];

  const text = [
    'Погрузись в игровые миры с нами!', 'Твой гейминг-опыт начинается здесь!', 'Мы делаем твои игры реальностью!'
  ];

  const bottomtext = [
    'Согреет теплом и уютом', 'С повышенной скидкой', 'Даже мы в восторге'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentBottomTextIndex, setCurrentBottomTextIndex] = useState(0);


  const goToNextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
    setCurrentTextIndex((currentTextIndex + 1) % text.length);
    setCurrentBottomTextIndex((currentBottomTextIndex + 1) % bottomtext.length);

  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    setCurrentTextIndex((currentTextIndex - 1 + text.length) % text.length);
    setCurrentBottomTextIndex((currentBottomTextIndex - 1 + text.length) % bottomtext.length);
  };

  return (
    <main>
    <div className='presentation'></div>
    <div className="slider">
      <div className='slide' key={currentImageIndex}>
        <div className="slide-container">
          
          <img className='slide-image' src={"./games/"+images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
          <div className="slide-text">
            {text[currentTextIndex]}
          </div>
          <button className="turn-slider turn-slider-left" onClick={goToPrevSlide}>⭠</button>
          <button className="turn-slider turn-slider-right" onClick={goToNextSlide}>⭢</button>
        </div>
      </div>
    </div>
  </main>
  )
}