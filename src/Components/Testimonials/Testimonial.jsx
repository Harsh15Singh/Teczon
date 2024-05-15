import React, { useRef } from 'react'
import './Testimonial.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import user from '../../assets/user.png'


const Testimonial = () => {

    const slider = useRef();
        let tx =0; 

    const slideForward = ()=>{

        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }



  return (
    <div className='testimonials'>
         <img src={right} alt="" className='next-btn' onClick={slideForward} />
        <img src={left} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
        <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user} alt="" />
                    <div>
                        <h3>Rajat 1</h3>
                        <span>India</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in, excepturi, facilis incidunt quasi ipsa quos placeat nam nobis, tempore necessitatibus harum. Beatae fugiat cupiditate assumenda architecto explicabo, hic repudiandae?</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user} alt="" />
                    <div>
                        <h3>Rajat 2</h3>
                        <span>India</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in, excepturi, facilis incidunt quasi ipsa quos placeat nam nobis, tempore necessitatibus harum. Beatae fugiat cupiditate assumenda architecto explicabo, hic repudiandae?</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user} alt="" />
                    <div>
                        <h3>Rajat 3</h3>
                        <span>India</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in, excepturi, facilis incidunt quasi ipsa quos placeat nam nobis, tempore necessitatibus harum. Beatae fugiat cupiditate assumenda architecto explicabo, hic repudiandae?</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user} alt="" />
                    <div>
                        <h3>Rajat 4</h3>
                        <span>India</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in, excepturi, facilis incidunt quasi ipsa quos placeat nam nobis, tempore necessitatibus harum. Beatae fugiat cupiditate assumenda architecto explicabo, hic repudiandae?</p>
            </div>
        </li>
        </ul>
        </div>

    </div>
  )
}

export default Testimonial