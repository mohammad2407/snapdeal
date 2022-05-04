import React from 'react'

export const Leftnav = () => {
  return (
    <div className='left-nav' style={{float:'left', width:'15%',marginLeft:'60px', height:'40%' }}>
        <div>
            <p style={{textAlign:'left', marginLeft:'10px', fontSize:'12px', color:'#9a9191'}}>TOP CATEGORIES</p>
             <div style={{listStyle:'none', textAlign:'left',marginLeft:'12px'}}>
                 <div className='categories'>
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-logo' style={{backgroundImage:"url(https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png)"}}></span>
                     <span className='categories-text'>Men's Fashion</span>
                 </div>
                 <div className='categories' >
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-logo' style={{backgroundImage:'url(https://i2.sdlcdn.com/img/leftnavicon09/30x30home_living2.png)'}}></span>
                     <span className='categories-text'>Women's Fashion</span>
                 </div>
                 <div className='categories'>
                     <span className='hover-line' style={{float:'left', height:'90%', marginLeft:'-8px'}}></span>
                     <span className='categories-logo' style={{backgroundImage:'url(https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg)'}} ></span>
                     <span className='categories-text'>Home & Kitchen</span>
                 </div>
                 <div className='categories'>
                   
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-logo' style={{backgroundImage:'url(	https://i3.sdlcdn.com/img/leftnavicon09/30x30music1.png)'}} ></span>
                     <span className='categories-text'>Toys, Kids' Fashion m...</span>
                    
                 </div>
                 <div className='categories'>
                    
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-logo' style={{backgroundImage:'url(https://i1.sdlcdn.com/img/leftnavicon09/fashion30x30_3.png)'}} ></span>
                     <span className='categories-text'> Beauty, Health & Daily...</span>
                   
                 </div>
                
             </div>

             <p style={{textAlign:'left', marginLeft:'10px', fontSize:'12px', color:'#9a9191'}}>MORE CATEGORIES</p>

             <div style={{listStyle:'none', textAlign:'left',marginLeft:'12px'}}>
                 <div className='categories'>
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-text'>Men's Fashion</span>
                 </div>
                 <div className='categories' >
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-text'>Women's Fashion</span>
                 </div>
                 <div className='categories'>
                     <span className='hover-line' style={{float:'left', height:'90%', marginLeft:'-8px'}}></span>
                     <span className='categories-text'>Home & Kitchen</span>
                 </div>
                 <div className='categories'>
                   
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-text'>Toys, Kids' Fashion m...</span>
                    
                 </div>
                 <div className='categories'>
                    
                     <span className='hover-line' style={{float:'left', height:'100%' , marginLeft:'-8px'}}></span>
                     <span className='categories-text'> Beauty, Health & Daily...</span>
                   
                 </div>
                
             </div>
        </div>


    </div>
  )
}
