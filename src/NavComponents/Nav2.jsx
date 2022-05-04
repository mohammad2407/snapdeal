// import { height } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';

import './nav.css'
const Nav2 = () => {
  return (
    <div>
      <div className='nav-container'
          style={{
              width:'100%',
              position:'fixed'
             
          }}
      >
          <div className='nav-wrapper'
            style={{
                background:'#e40046',
                height:'43px',
                display:'grid',
                gridTemplateColumns:'repeat(9, 1fr )',
                gridGap:'20px'
            }}
          >
              <div className='logo'>
                 <div>
                 <span>
                        <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" alt="" />
                    </span>
                 </div>
              </div>
              <div className='search' >
                  <div>
                  <input type="text" placeholder='search products & brands' style={{width:"92%",color:'#909090' ,height:'37px', padding:'0 10px 0 32px', outline:'none',  fontSize:'14px'}} />

                  </div>
                  <button style={{ background:'#333', width:'20%', border:'none', height:'40.5px', borderRadius:' 0px 3px 3px 0px', display:'flex'}}>
                        <SearchRoundedIcon style={{margin:'12px 0px 0px 18px', color:'#fff', fontSize:'20px'}} />
                        <span style={{color:'#fff', fontSize:'15px',margin:'13px 8px 0px 0px'}}>Search</span>
                 </button>
              </div>
              <div className='cart'>
                  <div>
                      cart
                  </div>
              </div>
              <div className='sign-in'>
                  <div>
                      sign In
                  </div>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Nav2
