import React from 'react';
import "./heroBanner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';


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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}>
        <SwiperSlide>
          <div className="hero-banner-container page-width">
            <div className="hero-item hero-item_text">
              <h1>Bicycle rental with delivery</h1>
            </div>
            <div className="hero-item hero-item_image"> {renderImages()}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-banner-container page-width hero-banner-container-slide-two">
            <div className="hero-item hero-item_text">
              <h1>Bicycle rental</h1>
            </div>
            <div className="hero-item hero-item_image">
              <div className="image-el">
                <div className="image-el_img">
                  <img src={`${process.env.PUBLIC_URL}/img/bus.png`} alt="bus" />
                </div>
                <p className='image-el_text'><span>Delivery</span></p>
              </div>
              <div className="image-el only-text">
                <p className='image-el_text'>
                  Every five days is  
                  <span> free</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroBanner;