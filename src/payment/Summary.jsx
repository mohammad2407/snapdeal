import React from 'react'

export const Summary = () => {
  return (
    <div >
        <div className='review-wrapper' style={{padding:'0px',}}>
            <div className='product-sec' style={{borderBottom:'0.1px dashed #ccc' }}>
             <div>SUMMARY ( {} )</div>
             <div className='product-name'> 
             <p> PRODUCT NAME </p>
             <div style={{display:'flex', marginBottom:'30px'}}>
             <p style={{margin:'0px 13px'}}>Quantity({1}) </p> 
             <p style={{margin:'0px 83px'}}>Rs.875</p>
             </div>
             
              </div>
            </div>

            <div className='total-pay' style={{marginTop:'30px', borderBottom:'1px solid #ccc'}}>

            <div style={{display:'flex', marginBottom:'30px'}}>
             <p style={{margin:'0px 1px'}}>Total: </p> 
             <p style={{margin:'0px 4px 0px 60%'}}>Rs.875</p>
             </div>

             <div style={{display:'flex', marginBottom:'30px'}}>
             <p style={{margin:'0px 1px'}}>Delivery Charges: </p> 
             <p style={{margin:'0px 4px 0px 85px', color:'#60bf79'}}>Free</p>
             </div>

             <div style={{display:'flex', padding:'30px 0px', borderTop:'1px solid #ccc'}}>
             <p style={{margin:'0px 1px', color:'#8a8787', fontWeight:'600', fontSize:'20px'}}> You Pay: </p> 
             <p style={{margin:'0px 4px 0px 90px', color:'black',fontWeight:'600', fontSize:'22px'}}>Rs.875</p>
             </div>
            

            </div>
             
        </div>
    </div>
  )
}
