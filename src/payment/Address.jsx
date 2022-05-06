import React from 'react'
import './payment.css'
export const Address = () => {
    return (
        <div>
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
                        <label htmlFor="">Address</label>
                    </div>
                    <div className='col-75'>
                        <input className='address-input' type="text" name='formName' placeholder='Flat/House No Colony Street No.' /> <br />
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

                <div className="row">

                    <div className='col-25'>
                        <label htmlFor=""> City </label>
                    </div>
                    <div className='col-75'>
                        <input className='address-input' type="text" placeholder='City' name='city' /> <br />
                    </div>
                </div>

                <div className="row">

                    <div className='col-25'>
                        <label htmlFor="">State</label>
                    </div>
                    <div className='col-75'>
                        <input className='address-input' type="text" placeholder='State' name='state' /> <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="">Mobile Number</label>
                    </div>
                    <div className="col-75">
                        <input className='address-input' type="text" placeholder='10 digit Mobile Number' /> <br />
                    </div>
                </div>

                <div className="row">

                    <div className="col-25">
                        <label htmlFor="">Alternate Mobile No.</label>
                    </div>
                    <div className="col-75">
                        <input className='address-input' type="text" placeholder='10 digit Mobile Number' /> <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <div style={{ marginTop: '10px' , color:'#8a8787'}}> Address Type</div>
                    </div>
                    <div className="col-75" style={{ width: '55%' }}>
                        <form action="" >
                            <input type="radio" name='addresstype' value="home/personal" />
                            <label style={{fontWeight:'450', color:'#5d5b5b', fontSize:'13px'}} htmlFor="">Home/Personal</label>
                            <input style={{ marginLeft: '30px' }} type="radio" name='addresstype' value='office/commercial' />
                            <label htmlFor="" style={{fontWeight:'450', color:'#5d5b5b', fontSize:'13px'}}> Office/Commercial</label>
                        </form>
                    </div>

                </div >
                <br />
              
                <input type="radio" style={{marginLeft:'25%'}}/>
                <label htmlFor="" style={{fontSize:'13px', color:'#5d5b5b'}}>Make this as default Adress</label>
             
                <br />

                <input type='button' value='SAVE AND CONTINUE' style={{
                    width: '35%',
                    background: '#e40046',
                    height: '34px',
                    margin: '5% 25% ',
                    border: '#8a8787',
                    padding: '1%',
                    height: '43px',
                    color: '#fff',
                    borderRadius: '3px'

                }} />

            </form>

        </div>
    )
}
