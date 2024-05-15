import React from 'react'
import './Marquee.css'
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'
import img7 from '../../assets/7.png'
import img8 from '../../assets/8.png'
import img9 from '../../assets/9.png'
import img10 from '../../assets/10.png'
import img11 from '../../assets/11.png'
import img12 from '../../assets/ravtron.webp'
import img13 from '../../assets/14.png'
import img14 from '../../assets/15.png'
import dell from '../../assets/dell.svg'
import boat from '../../assets/boat.png'


const Marque = () => {
  return (
    <div >
        <Marquee direction="right" speed={90} delay={5} >
          <div className="image_wrapper">
            <img  src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img style={{ width:"200px"}} src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img style={{ width:"140px"}} src={img11} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
          <div className="image_wrapper1">
            <img style={{height: "100px", width:"280px"}} src={img14} alt="" />
          </div>
          <div>
            <img style={{height: "280px", width:"380px"}} src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={dell} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img style={{ width:"210px"}}src={boat} alt="" />
          </div>
          <div className="image_wrapper">
            <img style={{height: "120px", width:"150px"}} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"alt="" />
          </div>

          </Marquee>
          <Marquee direction="left" speed={90} delay={5}>
          <div className="image_wrapper2">
            <img style={{height: "320px", width:"160px"}} src={img6} alt="" />
          </div>
          <div className="image_wrapper2">
            <img style={{height: "100px", width:"280px"}} src={img8} alt="" />
          </div>
          <div className="image_wrapper2">
            <img style={{ height: "150px", width:"200px"}} src={img9} alt="" />
          </div>
          <div className="image_wrapper2">
            <img style={{ height: "100px", width:"150px"}} src={img7} alt="" />
          </div>
          <div className="image_wrapper2">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper2">
            <img  src="https://alogic.co/cdn/shop/files/Alogic_Logo_b5dbc165-5587-4c36-bf69-94e93ba0387f_140x@2x.png?v=1695795469" alt="" />
          </div>
          <div className="image_wrapper2">
            <img src="https://cadyce.com/media/amasty/webp/athlete2/default/LOGO_FULL_png.webp" alt="" />
          </div>

        </Marquee>
      </div>
  )
}

export default Marque