import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../nav.css'
export const NavCarousel = () => {
  const sliderSettings = {

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  }

  const hotelCards = [
    {
      imageSrc: 'https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg',

    },
    {
      imageSrc: 'https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg',

    },
    {
      imageSrc: 'https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg',

    },
    {
      imageSrc: 'https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg',
    },
  ]

  return (
    <div style={{ width: '55%', margin: 'auto', border: '1px solid #ded9d9', background: '#fff', borderRadius: '0px 5px 5px' }}>

      <Slider  {...sliderSettings} style={{ width: '100%', margin: 'auto' }} >
        {
          hotelCards.map((card, index) => (
            <a href='' key={index} style={{ display: 'block' }}>
              <img src={card.imageSrc} alt="" style={{ width: '100%', height: '323px' }} />
            </a>
          ))
        }

      </Slider>
      <div style={{ display: 'flex' }} className='carousel-text' >
        <div className='carousel-button'>
          <p>Health</p>
          <span className='carousel-line' style={{marginTop:'-5px'}}></span>
        </div>
        <div className='carousel-button'>
          <p>Westernwear</p>
         <span className='carousel-line' style={{marginTop:'-5px'}} ></span>
        </div>
        <div className='carousel-button'>
          <p>KurtaSets</p>
         <span className='carousel-line' style={{marginTop:'-5px'}}></span>
        </div><div className='carousel-button'>
          <p>KitchenNeed</p>
         <span className='carousel-line' style={{marginTop:'-5px'}}></span>
        </div>
        
      </div>
    </div>

  )
}
