import React from 'react'
import { NavCarousel } from '../NavComponents/Carousels/NavCarousel'
import { Leftnav } from './Leftnav'
import './Home.css'
import Popular from '../NavComponents/Carousels/Popular'
import Trending from '../NavComponents/Carousels/Trending'
export const Home = () => {
  return (
    <div style={{ color: 'black', marginTop: '10px' }}>

      <Leftnav />
      <NavCarousel />

      <Popular />

      <Trending />
      <div className='poster'>
        <div className='poster-wrapper' style={{ display: 'flex' }}>
          <div className='poster-image' >
          </div >

          <div className='download-div'>
            <p style={{fontSize:'40.4px', fontWeight:'500'}}>Download Snapdeal App Now</p> 
            <p style={{fontSize:'18px', color:'#777777'}}>Fast, Simple & Delightful.</p> 
            <p style={{fontSize:'18px', color:'#777777'}}>All it takes is 30 seconds to Download.</p>

            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ width: '35%', height: '40px', marginRight: "20px" }}>
                <img src="https://coloradorush.com/wp-content/uploads/2022/01/apple_app_store_icon.png" style={{ width: '100%',borderRadius:'8px' }} alt="" />
              </div>
              <div style={{ width: '35%', height: '40px' }} >
                <img src="https://icon-library.com/images/google-play-icon/google-play-icon-8.jpg" style={{ width: '100%' }} alt="" />
              </div>
            </div>
          </div>

          <div className='leaf-image'>

          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
