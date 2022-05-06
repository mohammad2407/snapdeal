import React, { useState } from 'react'
import './payment.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Address } from './Address';
import { Summary } from './Summary';
import { Review } from './Review';
import { MakePayment } from './MakePayment';
const Payment = () => {
    const[login,setLogin] = useState({
        loginSec1:true,
        loginOtp:false,
        Delivery:false,
        reviewOrder:false,
        MakePayment:false,
        mobile:''
    })
    const[loginPos, setLoginPos] = useState(false)

    const fixedPos = () =>{
  
        if(window.scrollY >= 50){
            setLoginPos(true)
        }
        else setLoginPos(false)
    }

    window.addEventListener('scroll', fixedPos)

  return (
    <div>
      <div style={{background:'#e40046', height:'100px'}}>
          <div >
              <span style={{float:'left', padding:'12px', margin:'13px 44px 12px 90px'}}>
              <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" alt="" />
              </span>
          </div>
          <div style={{float:'right', padding:'12px', margin:'12px 80px 4px 10px'}}>
              <a href="" style={{textDecoration:'none', color:'#fff'}}>100% Payment Protection, Easy Returns Policy</a>
          </div>
      </div>

      <div >
          <div className= 'payment-login' >
            <ul className='payment-ul' style={{listStyle:'none', textAlign:'left', margin:'1px -40px', width:'69%'}} >
                <li className='payment-li'>
                    
                    <div className='show-btn'>
                        <div className='payment-txt' >1.Log In/Sign Up</div>
                        <div className='show-content'>
                            <form action="" style={{marginLeft:'40px'}}>
                                <div style={{
                                    fontSize:'13px',
                                    margin:'10px 0px',
                                    color:'#8a8787'
                                }}>Please provide your Mobile Number/Email to login/Sign up before you place the order</div>
                                <div style={{
                                  marginBottom:'0px'
                                }}>
                                <input type="text"style={{
                                    padding:'1%',
                                    width:'45%',
                                    border:'1px solid #8a8787',
                                    outline:'#8a8787'

                                }} placeholder='Mobile Number/Email' />
                                </div>
                                <br />
                                
                                    <button style={{
                                        width:'47%',
                                        padding:'1%',
                                        background:'#e40046',
                                        outline:'none',
                                        border:'none',
                                        height:'43px',
                                        color:'#fff',
                                        borderRadius:'3px'
                                    }}>
                                            CONTINUE
                                      
                                    </button>    

                                    <div>
                                        <div style={{width:'20%', margin:'40px 122px 10px', fontSize:'13px', color:'#8a8787', fontWeight:'500'}}>Or Login Using</div>
                                        <div style={{display:'flex'}}>
                                            <button style={{ width:'22%', background:'#4267b2',border:'none', padding:'1%', boxShadow:'1px 2px 3px 0px #a19e9e', marginRight:'30px'}}>
                                            <div style={{display:'flex', }}>
                                             <FacebookIcon style={{ color:'white', width:'40px', float:'left'}} />
                                             <span style={{ marginLeft:'12px', marginTop:'6px', color:'#fff', fontSize:'12px', boxShadow:''}}> Facebook </span>
                                                </div>
                                            </button>

                                            <button style={{ width:'22%', background:'#fff',border:'none', padding:'1%', boxShadow:'1px 2px 3px 0px #a19e9e'}}>
                                            <div style={{display:'flex', }}>
                                             <span style={{width:'15%'}}>
                                                 <img src="data:image/png;base64,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"
                                                    style={{
                                                        width:'100%',
                                                        marginLeft:'10px'
                                                    }}
                                                 alt="" />
                                             </span>
                                             <span style={{ marginLeft:'42px', marginTop:'6px', color:'#8a8787', fontSize:'12px', }}> Google </span>
                                                </div>
                                            </button>

                                        </div>
                                    </div>                          
                            </form>

                            <div className='otp-sec' style={{padding:'2%', position:'relative'}}>
                                <div style={{padding:'1% 4% '}}>

                                <div
                                className='otp-icon'
                                style={{width:'30%'}}
                                >

                                </div>
                                
                                <div style={{
                                    fontSize:'13px',
                                    marginLeft:'10%',
                                    color:'#636262'
                                }}>
                                    Please enter verification code (OTP) sent to : <br />
                                     <p style={{marginLeft:'10%', fontSize:'17px', margin:'10px 12% 30px', fontWeight:'400'}}>6366908402</p>
                                </div>
                                    <div >

                                    <input type="text" placeholder='Code' style={{padding:'1% 2%', marginLeft:'18%', marginBottom:'10px', width:'15%', textAlign:'center', outline:'#8a8787'}} /> <br />
                                            <a href="" style={{textDecoration:'none', color:'#1f95d5', margin:'10px 21%', fontSize:'14px'}}>Resend OTP</a> <br />

                                    <input type='button' value = 'CONTINUE' style = {{
                                        width:'50%',
                                        background:'#e40046',
                                        height:'34px',
                                        margin:'5% 5% ',
                                        border:'#8a8787',
                                        padding:'1%',
                                        height:'43px',
                                        color:'#fff',
                                        borderRadius:'3px'

                                    }}  />
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </li>

                <li>
                    <div>
                        <div className='payment-txt '>2.DELIVERY ADDRESS</div>
                        <Address />
                    </div>
                </li>

                <li>
                    <div>
                        <div className='payment-txt '>3.REVIEW ORDER</div>
                        <Review />
                    </div>
                </li>

                <li>
                    <div>
                        <div className='payment-txt '>4.MAKE PAYMENT</div>
                        <MakePayment />
                    </div>
                </li>

            </ul>
            <div className={loginPos? 'summary sum-pos-rel':'summary sum-pos-fix'} style={{float:'right'}}>
                <Summary />
            </div>
            </div>

      </div>
    </div>
  )
}

export default Payment
