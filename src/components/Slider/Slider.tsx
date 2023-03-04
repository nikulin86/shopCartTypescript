import React from 'react';
import images from '../../assets/images/images.jpg';

function Slider() {
  return (
    <div className='hero-slider'>
        <div className="hero-slider-item">
            <img src={images} alt="" />
        </div>
    </div>
  )
}

export default Slider