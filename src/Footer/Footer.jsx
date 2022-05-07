import { width } from '@mui/system'
import React from 'react'
import './Footer.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
    return (
        <div>

            <div className='footer-sec1' style={{ display: 'flex', width: '90%', margin: 'auto' }} >
                <div className='sub-footer'>
                    <div className='sub-wrapper'>
                        <span className='footer-sec-logo'>
                            <img src="https://cdn1.iconfinder.com/data/icons/business-and-commercial-mixed-round/128/33-128.png" className='footer-icons' alt="" />
                        </span>
                        <span className='footer-bigtxt'>
                            <p> 100% SECURE PAYMENTS</p>
                        </span>
                        <span className='footer-smalltxt'>
                            Moving your card details to a much more secured place
                        </span>
                    </div>
                </div>
                <div className='sub-footer'>
                    <div className='sub-wrapper'>
                        <span className='footer-sec-logo'>
                            <img src="https://cdn4.iconfinder.com/data/icons/commerce-smooth/356/23-secure-shield-trusted-safe-128.png" className='footer-icons' alt="" />
                        </span>
                        <span className='footer-bigtxt'>
                            <p> 100% SECURE PAYMENTS</p>
                        </span>
                        <span className='footer-smalltxt'>
                            Moving your card details to a much more secured place
                        </span>
                    </div>
                </div>
                <div className='sub-footer'>
                    <div className='sub-wrapper'>
                        <span className='footer-sec-logo'>
                            <img src="https://cdn3.iconfinder.com/data/icons/agile-3-flat-style/64/Agile-3_-_Flat_Style_-_9-46-128.png" className='footer-icons' alt="" />
                        </span>
                        <span className='footer-bigtxt'>
                            <p> 100% SECURE PAYMENTS</p>
                        </span>
                        <span className='footer-smalltxt'>
                            Moving your card details to a much more secured place
                        </span>
                    </div>
                </div>
                <div className='sub-footer'>
                    <div className='sub-wrapper'>
                        <span className='footer-sec-logo'>
                            <img src="https://cdn-icons.flaticon.com/png/128/3020/premium/3020657.png?token=exp=1651671999~hmac=f768252bf7579870548be1407661cdf1" className='footer-icons' alt="" />
                        </span>
                        <span className='footer-bigtxt'>
                            <p> 100% SECURE PAYMENTS</p>
                        </span>
                        <span className='footer-smalltxt'>
                            Moving your card details to a much more secured place
                        </span>
                    </div>
                </div>

            </div>

            <div>
                <div className='footer-sec2' >
                    <div className='wrapper-sec2' style={{ display: 'flex', width: '95%', margin: 'auto', borderBottom: '1px dashed #ccc' }}>
                        <ul style={{ textAlign: 'left', listStyle: 'none', width: '22%' }}>
                            <p>POLICY INFO</p>
                            <li>
                                <a href="#" className='footer-desc-text'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className='footer-desc-text'>Terms of State</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Terms of Use</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Report Abuse & Takedown Policy</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>FAQ</a>
                            </li>
                        </ul>
                        <ul style={{ textAlign: 'left', listStyle: 'none', width: '18%' }}>
                            <p>COMPANY</p>

                            <li>
                                <a href="#" className='footer-desc-text'>Impact@Snapdeal</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Careers</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Blog</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Sitemap</a>
                            </li>
                            <li>
                                <a href="#" className='footer-desc-text'>Contact Us</a>
                            </li>
                        </ul>
                        <ul style={{ textAlign: 'left', listStyle: 'none', width: '22%' }}>
                            <span><p>SNAPDEAL BUSINESS</p></span>
                            <li>
                                <a href="#" className='footer-desc-text'>Shopping App</a>
                            </li>
                            <li>
                                <a href="#" className='footer-desc-text'>Sell on Snapdeal</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Media Enquiries</a>
                            </li>
                        </ul>
                        <ul style={{ textAlign: 'left', listStyle: 'none', width: '27%' }}>
                            <p>POPULAR LINKS</p>
                            <li>
                                <a href="#" className='footer-desc-text'>Lehenga</a>
                            </li>
                            <li>
                                <a href="#" className='footer-desc-text'>Headphones</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Kid's Clothing</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Saress</a>
                            </li>     <li>
                                <a href="#" className='footer-desc-text'>Shoes</a>
                            </li>
                            <li>
                                <a href="#" className='footer-desc-text'>Winter Wear</a>

                            </li>
                            <li>
                                <a href="#" className='footer-desc-text'>Shirts For Men</a>
                            </li>
                        </ul>
                        <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                            <p>SUBSCRIBE</p>
                            <input type="text" placeholder='Your email adress' style={{ padding: '3%', outline: 'none' }} />
                            <input type="button" value='SUBSCRIBE' style={{ padding: '4%', border: 'none', background: '#333', color: '#fff', borderRadius: '2px' }} />
                            <p className='footer-desc-text' style={{ textDecoration: 'none' }}>Register now to get updates on promotions and Coupons, <a href="" style={{ textDecoration: 'none' }}>Or Download App</a></p>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div style={{ width: '90%', margin: 'auto', display: 'flex',margin:'50px '}}>

                    <div style={{ width: '50%', height: '40px' }}>
                        <div style={{ textAlign: 'left', fontSize:'15px', color:'#777777' }}>PAYMENT</div>
                        <div className='icons-sec3' style={{ display: 'flex' }}>
                            <div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" style={{ width: '100%' }} alt="" />
                            </div>

                            <div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" style={{ width: '100%' }} alt="" />
                            </div><div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://cdn.iconscout.com/icon/free/png-64/mastercard-1527460-1298290.png" style={{ width: '100%' }} alt="" />
                            </div><div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://cdn.iconscout.com/icon/free/png-64/diners-2-532732.png" style={{ width: '100%' }} alt="" />
                            </div><div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/payment-2217418-1848738.png" style={{ width: '100%' }} alt="" />
                            </div>
                            <div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/net-banking-1489302-1260381.png" style={{ width: '100%' }} alt="" />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '50%', height: '40px' }}>
                    <div style={{ textAlign: 'left', fontSize:'15px', color:'#777777' }}>CONNECT</div>
                        <div className='icons-sec3' style={{ display: 'flex' }}>
                            <div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://i4.sdlcdn.com/img/footer/facebook@4x.png" style={{ width: '100%' }} alt="" />
                            </div>

                            <div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://i1.sdlcdn.com/img/footer/twitter@4x.png" style={{ width: '100%' }} alt="" />
                            </div><div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://i4.sdlcdn.com/img/footer/instagram@4x.png" style={{ width: '100%' }} alt="" />
                            </div><div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://i2.sdlcdn.com/img/footer/linkedin@4x.png" style={{ width: '100%' }} alt="" />
                            </div><div style={{ width: '8%', marginRight: '10px' }}>
                                <img src="https://i1.sdlcdn.com/img/footer/youtube@4x.png" style={{ width: '100%' }} alt="" />
                            </div>
                            
                        </div>
 
                    </div>
                </div>
            </div>

            <div style={{marginBottom:'40px', }}>
                <div style={{width:'90%', margin:'auto',borderTop:'1px solid #ccc'}}>

                <p style={{color:'#777777', fontSize:'11px', float:'left'}}>Copyright@2021, Snapdeal Limited. All Rights Reserved</p>
                <p style={{color:'#777777', fontSize:'11px', float:'right'}}>Made for Bharat import <FavoriteIcon style={{color:'red', fontSize:'14px'}}></FavoriteIcon>  </p>
                
                </div>
            </div>

        </div>
    )
}

export default Footer
