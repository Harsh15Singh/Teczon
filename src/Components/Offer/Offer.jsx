import React from 'react'
import './Offer.css'
import image1 from '../../assets/AV.jpg'
import image2 from '../../assets/HD.jpg'
import image3 from '../../assets/MEM.jpg'
import image4 from '../../assets/CD.png'
import image5 from '../../assets/Print.jpg'
import image6 from '../../assets/gift.jpg'


const Product = () => {
  return (
    <div className='products'>
    <div className="product card">
    <div class="bg"><img src={image1} alt="" />
    <h3>Audio Visual Solutions</h3>
    <p>
    <ul>
      <li>LCD/LED TVs, Professional Display Panels, Video Walls, Interactive Kiosks, Outdoor Displays and Active LED Solutions for Indoor & Outdoor purposes</li>
      <li>Video conference Solutions</li>
      <li>Projectors and Screens with Installation support</li>
      <li>Audio Endpoint Solutions - Headsets, Conference Speakers</li>
    </ul> </p>
    
    </div>
    <div class="blob"></div>
    </div>
    <div className="product card">
    <div class="bg"> <img src={image2} alt=""/>
    <h3>Handled Devices and Wearables</h3>
    <p>
    <ul>
      <li>Apple iPhones, Android Mobile Phones, Apple iPads, Android Tablets and Mobile Phone Accessories</li>
      <li>Portable Speakers, Webcams, AI Speakers</li>
      <li>Smart Watches, Headphones, Fitness Trackers, Headsets and VRs etc</li>
    </ul>
    
</p>

    </div>
    <div class="blob"></div>
    </div>
    <div className="product card">
    <div class="bg"> <img src={image3} alt="" />
    <h3>Memories and Storages</h3>
    <p><ul>
      <li>RAM- Memory Modules of Desktops, Laptops and Servers,
Internal and External Storage Devices</li>
      <li>Solid State Drives (SSDs for Laptop, Desktop PCs and Servers)</li>
      <li>USB Flash Drives & Encrypted Drives for Secured Data Storage (USB Type A & Type C)</li>
      <li>Memory Cards and Readers (SD Cards & Micro SD Cards)</li>
    </ul></p>
    </div>
    <div class="blob"></div>
    </div>
    <div className="product card">
    <div class="bg"> <img src={image4} alt="" />
    <h3>Computing Devices & Peripherals</h3>
    <p><ul>
      <li>Laptops, Desktops, Thin Clients, AIO PCs</li>
      <li>Laptop Batteries/ Power Adaptors and Laptop Spares</li>
      <li>Printers, MFPs, Scanners, Office Jet Printers, Plotters, Dot Matrix Printers etc.</li>
      <li>Printer Consumables - Maintenance Kits, Fuser Kits and Transfer Kits and printer parts</li>
      <li>Display Converters, Cables and Connectors</li>
    </ul>
    </p>
    </div>
    <div class="blob"></div>
    </div>
    <div className="product card">
    <div class="bg"> <img src={image5} alt=""/>
    <h3>Badging Printing Solutions</h3>
    <p><ul>
      <li>Card Printers (Zebra, HID, Evolis, Brother, etc..)</li>
      <li>Label Printers (Zebra, TSC,Brother,Dymo, Godex ,etc..)</li>
      <li>Cartridges and Label Rolls</li>
      <li>Printer Parts and Services</li>
    </ul></p>
    </div>
    <div class="blob"></div>
    </div>
    <div className="product card">
    <div class="bg"> <img src={image6} alt="" />
    <h3>Corporate Gifting</h3>
    <p>This is our way to show our customers and employees that we value them in a certifiable and attentive manner. If done
well, corporate gifts give a
brilliant return on investment
by reinforcing relationships
that leads to accomplish organisational goals.</p>
    </div>
    <div class="blob"></div>
    </div>
    {/* <div className="product card">
    <div class="bg"> <img src={image4} alt="" />
    <h3>Advanced Technological Solutions</h3>
    <p>Maintaining a competitive edge through the integration of Advanced technological advancements into your solutions.</p>
    </div>
    <div class="blob"></div>
    </div> */}
    </div>
    // </div>

  )
}

export default Product