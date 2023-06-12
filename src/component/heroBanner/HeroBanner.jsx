import React from 'react';
import "./heroBanner.css";

const HeroBanner = () => {
  const imageText = [
    { id: React.useId(), text: "Helmet", path: "helmet.png" },
    { id: React.useId(), text: "Flashlight", path: "Flashlight.png" },
    { id: React.useId(), text: "Castle", path: "castle.png" }
  ]

  const renderImages = () => {
    return imageText.map(el => {
      return (
        <div key={el.id} className="image-el">
          <div className="image-el_img">
            <img src={`${process.env.PUBLIC_URL}/img/${el.path}`} alt={el.text} />
          </div>
          <p className='image-el_text'>{el.text} <span>Free</span></p>
        </div>
      )
    })
  }

  return (
    <section className='hero-banner'>
      <div className="hero-banner-container page-width">
        <div className="hero-item hero-item_text">
          <h1>Bicycle rental with delivery</h1>
        </div>
        <div className="hero-item hero-item_image"> {renderImages()}</div>
      </div>
    </section>
  );
};

export default HeroBanner;