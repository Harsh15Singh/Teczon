import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Link from 'react-scroll/modules/components/Link';
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [sticky,setSticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[])
  const [mobileMenu, setMobileMenu]= useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true)

  }

  return (
    <div>
      {/* <div className='fixed'>
        <ul>
          <li>Monday- Saturday 10AM to 6PM</li>
          <li>Delhi, India</li>
          <li><a href="tel: +91-9990816667 "> <img src={""} alt=""/>+91-9990816667, </a> </li>
          <li></li>
        </ul>
      </div> */}
    
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'': 'mobile-menu' }>
            <li> <Link to='hero' smooth={true} offset={0} duration={400}> Home</Link></li>
            <li><Link to='about' smooth={true} offset={-240} duration={400}> About Us</Link></li>
            <li> <Link to='marquee' smooth={true} offset={-150} duration={400}> Partners</Link></li>
            <li>  <Link to='cust' smooth={true} offset={-260} duration={400}>Customers</Link></li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={400}className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
    </div>
  )
}

export default Navbar