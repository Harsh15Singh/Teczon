import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import email from '../../assets/email.png'
import call from '../../assets/call.png'
import location from '../../assets/location.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "160a8ef4-d0a6-451c-9193-2e863296a293");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success", data);  
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
    <div className="contact-col">
        <h3>Send us a message <img src={mail} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.
         Your feedback, questions and suggestions are important to us as we strive to provide 
         exceptional service to our company</p>
         <ul>
             <li> <img src={email} alt="" /> <a href="mailto:sales@teczonsolutions.com"> sales@teczonsolutions.com</a></li>
             <li><a href="tel: +91-9990816667 "> <img src={call} alt=""/>+91-9990816667, 011-41085096 </a></li>
             {/* <li><a href="tel: +91-9990816667 "> <img src={call} alt=""/> +91-9990816667</a></li> */}
             <li> <img src={location} alt="" /><span>A-6, First Floor,DDA Sheds Okhla Industrial Area  
             Phase-I, New Delhi-110020</span></li>

         </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your Name' required />
            <label>Your Email</label>
            <input type="email" name='mail' placeholder='Enter your email' required/>
            <label>Write your Message here</label>
            <textarea name="message" id="" rows="6" placeholder='Enter you message' required></textarea>
            <button type='submit' class="submit">
            <p class="get">Submit</p>
        </button>
        </form>

        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact