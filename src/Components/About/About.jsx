import React from 'react'
import './About.css'
import about from '../../assets/logo.png'


const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={about} alt="" className='about-img' />
    </div>
    <div className="about-right">
    <h3>About Teczon </h3>
    <p>At Teczon, we understand that technology isn't just about gadgets and gizmos – it's about people. That's why we're committed to forging lasting relationships with our clients, understanding their unique needs, and delivering tailored solutions that drive real results.

What sets us apart is our unwavering focus on excellence. From our team of seasoned professionals to our commitment to staying ahead of the curve with the latest advancements in technology, we strive for nothing less than the highest standard of quality in everything we do.</p>
    </div>
    </div>
  )
}

export default About