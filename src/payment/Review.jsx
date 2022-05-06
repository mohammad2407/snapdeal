import React from 'react'
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './payment.css'
export const Review = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <div className='heading-review'
                style={{ display: 'flex', height: '30px', padding: '2% 1%', width: '100%', background: '#f7f7f7' }}
            >
                <div style={{ width: '35%' }}>Item Details</div>
                <div style={{ width: '12%' }}>Quantity</div>
                <div style={{ width: '35%' }}>Delivery Options</div>
                <div style={{ width: '15%' }}>Subtotal</div>

            </div>
            <div className='review-product' >
                <div style={{ display: 'flex' }} >
                    <div style={{ width: '35%' }}>
                        <div>
                            <img src="" alt="image" />
                        </div>
                        <div>
                            <p>Modewelt blue Wallet</p>
                        </div>
                    </div>

                    <FormControl sx={{ m: 1, width: '60px', outline: 'none' }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            style={{ outline: 'none', border: 'none' }}
                            displayEmpty

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem style={{ fontSize: '12px' }} value="">
                                <em>Qty</em>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '12px' }} value={10}>Ten</MenuItem>
                            <MenuItem style={{ fontSize: '12px' }} value={20}>Twenty</MenuItem>
                            <MenuItem style={{ fontSize: '12px' }} value={30}>Thirty</MenuItem>
                        </Select>

                    </FormControl>

                    <div style={{ width: '35%' }}>12May to 14May </div>

                    <div style={{ width: '15%' }}>Total: Rs.875</div>

                </div>
                <div style={{ display: 'flex' }} >
                    <div style={{ width: '35%' }}>
                        <div>
                            <img src="" alt="image" />
                        </div>
                        <div>
                            <p>Modewelt blue Wallet</p>
                        </div>
                    </div>

                    <FormControl sx={{ m: 1, width: '60px', outline: 'none' }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            style={{ outline: 'none', border: 'none' }}
                            displayEmpty

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem style={{ fontSize: '12px' }} value="">
                                <em>Qty</em>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '12px' }} value={10}>Ten</MenuItem>
                            <MenuItem style={{ fontSize: '12px' }} value={20}>Twenty</MenuItem>
                            <MenuItem style={{ fontSize: '12px' }} value={30}>Thirty</MenuItem>
                        </Select>

                    </FormControl>

                    <div style={{ width: '35%' }}>12May to 14May </div>

                    <div style={{ width: '15%' }}>Total: Rs.875</div>

                </div>
            </div>


        </div>
    )
}
