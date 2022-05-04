import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonIcon from '@mui/icons-material/Person';
import './nav.css'
export const Nav1 = () => {

    const [navbar, setNavbar] = useState(false)

    const changeNavposition = () => {
        if (window.scrollY >= 31) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }

    }

    window.addEventListener('scroll', changeNavposition)

    return (
        <div>

            <div className='nav1-container'
            >
                <div className='nav1-wrapper'
                    style={{

                        background: "#c40941",
                        zIndex: '1',
                        color: '#d8d8d8',
                        height: '30.2px',
                        width: '100%',
                        top: '40px',
                        position: 'relative',
                        top: '-0px'

                    }}
                >

                </div>
            </div>


            <div className={navbar ? 'nav-container nav-position' : 'nav-conatiner nav-top'}>
                <div className='navbar-wrapper' style={{ background: '#e40046', padding: '1%', width: '98%', display: 'flex', height: '37px', zIndex: '10' }}>
                    <div className='logo' style={{ float: 'left', marginRight: '30px', marginLeft: '3.5%', marginTop: '6px', display: 'block' }}>

                        <span>
                            <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" alt="" />
                        </span>

                    </div>

                    <div className='search' style={{ width: '52%', display: 'block', marginRight: '20px' }}>
                        <div style={{ width: "100%", marginLeft: '40px', display: 'flex' }}>
                            <input type="text" placeholder='search products & brands' style={{ width: "99%", color: '#909090', height: '35px', padding: '0 10px 0 32px', outline: 'none', fontSize: '14px' }} />

                            <button style={{ background: '#333', border: 'none', height: '38.5px', borderRadius: ' 0px 3px 3px 0px', display: 'flex' }}>
                                <SearchRoundedIcon style={{ margin: '10px 0px 0px 18px', color: '#fff', fontSize: '20px' }} />
                                <span style={{ color: '#fff', fontSize: '15px', margin: '11px 18px 0px 0px' }}>Search</span>
                            </button>
                        </div>
                    </div>
                    <div style={{
                        float: "right",
                        width: '24%', display: 'flex',
                        marginLeft: '80px',
                    }}>
                        <div className='cart' style={{ width: '35%', display: 'flex', marginLeft: '40px' }}>

                            <span style={{ margin: '6px 8px 10px 18px', color: '#fff', fontSize: '14px' }}>Cart</span>
                            <span ><ShoppingCartOutlinedIcon style={{ padding: '0%', margin: '10px 0px 0px', color: '#fff' }} /></span>
                        </div>

                        <div className='dropdown' style={{ width: '46%', margin: '-9px 30px ', marginLeft: '40px' }}>
                            <div className='signin dropbtn' style={{ display: 'flex' }} >
                                <span style={{ color: '#fff', fontSize: '14px', width: '100%', marginTop: '15px' }}>Sign In</span>
                                <span style={{ background: '', margin: '0px 10px 8px 10px' }}><PersonIcon style={{ padding: '2px 6px 10px 7px', marginTop: '10px', color: '#fff', fontSize: '25px', borderRadius: '120px', background: 'rgba(202, 52, 77, 0.838)' }} /></span>
                            </div>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>



        </div>
    )
}
