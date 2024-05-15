import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Offer from './Components/Offer/Offer'
import Title from './Components/Title/Title'
import Marquee from './Components/Marquee/Marquee'
import About from './Components/About/About'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Topbutton from './Components/Topbutton/Topbutton'
import Customer from './Components/Customer/Customer'

const App = () => {
 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container2">
      <div className="container"><Title title='What we Offer' subTitle='At our company, we take immense pride in our commitment to delivering transparent and uncomplicated services aimed at fostering successful relationships with both clients and business partners. Our team comprises driven individuals who consistently endeavor to provide top-tier solutions, ensuring excellence at every turn.'/>
      <Topbutton/>
      </div>
      <Offer/>
      </div>
      <div className="container">
      <About/>
      </div>
      <div className="container marq marquee" >
      <Title  title='Our Technology Partner'/>
        <Marquee/>
      </div>
      <div className='container'>
      <Title  title='Our Customers' subTitle='"Empower your decisions through our clients experiences". Discover how enterprises similar to yours have tackled obstacles, unleashed opportunities, and attained extraordinary outcomes. '/>
      {/* <Testimonial/> */}
      <Customer/>
      </div>
      <div className='container'>
      <Title  subTitle='Get In Touch' title='Contact Us' />
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App

