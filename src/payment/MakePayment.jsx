import React, { useState } from 'react'
import './payment.css'
export const MakePayment = () => {

    // document.getElementById('showDiv').onclick = function(){
    //     document.getElementById('element').style.display = 'block'
    // }
    const [showState,setShowState] = useState({
        creditCard:false,
        debitCard:false,
        cod:false,
        upi:false
    })

const{creditCard,debitCard,cod,upi}= showState
console.log(creditCard)
  
  return (
    <div>
        <div className='make-Paywrapper' style={{width:'100%'}}>
        <p>Pay Using Debit Card</p>

        <form action="" className='address-form'>
                <div className='row'>

                    <div className='col-25'>
                        <label htmlFor="">Pincode</label>
                    </div>
                    <div className='col-75'>
                        <input className='address-input' type="text" name='pincode' placeholder='Pin' /> <br />
                    </div>
                </div>

                <div className="row">

                    <div className='col-25'>
                        <label htmlFor="">Name</label>
                    </div>
                    <div className='col-75'>
                        <input className='address-input' type="text" name='formName' placeholder='Name' /> <br />
                    </div>
                </div>

                <div className="row">

                    <div className='col-25'>
                        <label htmlFor="Cardno">Card Number</label>
                    </div>
                    <div className='col-75' style={{ height:'auto'}}>
                       <select name="Cardno" id="Cardno" value= '' style={{marginRight:'10px'}}>
                           <option value=""></option>
                           <option value="01">01</option>
                           <option value="02">02</option>
                           <option value="03">03</option>
                           <option value="04">04</option>
                           <option value="05">05</option>
                           <option value="06">06</option>
                           <option value="07">07</option>
                           <option value="08">08</option>
                           <option value="09">09</option>
                           <option value="10">10</option>
                           <option value="11">11</option>
                           <option value="12">12</option>
                       </select>
                        <p>/</p>
                       <select name="" id="" value= '' style={{marginLeft:'10px'}}>
                           <option value="">MM</option>
                           <option value="01">01</option>
                           <option value="02">02</option>
                           <option value="03">03</option>
                           <option value="04">04</option>
                           <option value="05">05</option>
                           <option value="06">06</option>
                           <option value="07">07</option>
                           <option value="08">08</option>
                           <option value="09">09</option>
                           <option value="10">10</option>
                           <option value="11">11</option>
                           <option value="12">12</option>
                       </select>
                    </div>
                </div>

                <div className="row">

                    <div className='col-25'>
                        <label htmlFor="">Locality/Landmark</label>
                    </div >
                    <div className='col-75'>
                        <input className='address-input' type="text" name='locality' placeholder='Eg. Near Apollo Hospital ' /> <br />
                    </div>
                </div>

            </form>
              
                
            </div>
        </div>
    
  )
}
