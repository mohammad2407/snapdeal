import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const{cart} = useSelector(store => store)
  return (
    <div>
      {
          cart.map((item, index) =>{
              return <div>
                  <div>
                      <img src={item.image} alt="" />
                  </div>
              </div>
          })
      }
    </div>
  )
}

export  {Cart}
