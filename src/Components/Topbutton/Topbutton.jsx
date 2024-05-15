import React from 'react'
import './topbutton.css'
import {useEffect,useState} from 'react'

const topbutton = () => {
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
            
        })
    }


    const [backToTop, setBackToTop] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", ()=>{
          if(window.scrollY>100){
              setBackToTop(true)
          }
          else{
            setBackToTop(false)
          }
      })  
    },[]);
  return (
    <div className='top-btn' onClick={scrollUp}>
    {backToTop &&(
        <button>
            ^
        </button>
    )}

    </div>
  )
}

export default topbutton