import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import '../NavComponents/nav.css'
export const Mens = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("http://localhost:3002/Data")
            .then((res) => (res = res.json()))
            .then((res) => setProducts(res));
    }

    return (
        <div>
            <div style={{  width: '70%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', float: 'right', padding: '1%' }}>
                {
                    products.map((product, index) => {
                        return (
                            <Link to={`prducts/${product.id}`}>
                            <div className='product-item' style={{ width: '89%', marginBottom:'50px', padding:'5% 4%' }}>
                                <div style={{ width: '100%', zIndex:'1'}}>
                                    <img src={product.image} key={index} alt="" style={{ width: '100%', display:'block' }} />
                                </div>
                                {/* <div style={{border:'1px solid black', width:'fit-content', textAlign:"center", margin:'0px auto',zIndex:'4'}}>Quick view</div> */}
                                <div style={{ height: '35px', overflow: 'hidden', textAlign: 'left', fontSize: '13px', color: '#8a8787', margin: '10px 0px', lineHeight: '19px' }}>{product.title}</div>
                                <div style={{ display: 'flex', margin: '10px 0px' }}>
                                    <div style={{ marginRight: '10px', fontSize: '13px', color: '#ccc' }}> <s>{product.price_before}</s></div>
                                    <div style={{ marginRight: '10px', fontSize: '14px', color: '#333', fontWeight: '630' }}>Rs.{product.price_after}</div>
                                    <div style={{
                                        marginRight: '10px',
                                        padding: '0% 2%',
                                        fontSize: '13px',
                                        border: '1px solid #ccc',
                                        borderRadius: '2px'
                                    }}> <span style={{ color: '#8a8787' }}>{product.offer}%Off</span></div>
                                </div>
                                
                                <div >
                                <div className='rating' >
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly size= 'small' color='#FFC315' />
                                    </Stack>
                                </div>
                                 <div style={{float:'right', marginTop:'-20px' , marginRight:'50px', color:'#8a8787', fontSize:'13px'}}>
                                    ( {product.reviews} )
                                 </div>
                                </div>
                            </div>
                        </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
