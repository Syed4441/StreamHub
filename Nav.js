import React from 'react'

import './Nav.css'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
    const [show, handleShow] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
      });
      // return ()=>{
      //   window.removeEventListener("scroll")
      // }
    
    }, [])
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
       <div className='nav_contents'>

       <img 
       onClick={() => navigate('/')}
        className='nav__logo'
        src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397184697/ffb7956d279e58906672ef6f31d18606.jpg'
        alt=''
        />
         { <img 
         onClick={() => navigate('/profile')}
         
        className='avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt=''
        /> }
                  

       </div>
    </div>
  )
}

export default Nav;