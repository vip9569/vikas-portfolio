import React from 'react'
import './Contact.css'
import email from '../../assets/email.png' 
import call from '../../assets/call.png' 
import location from '../../assets/location.png' 


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c0d324d8-8df9-4f52-a91a-8305ea75f599");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h2>Let's talk</h2>
            <p>I am a Web developer an currently searching for a software engineering job role.I have also knowledge of other  tools and technologies. So you can hire me, Please feel free to contact me any time</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={email} alt="" /><p>vikaskumarvy377846@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call} alt="" /><p>+91  9569276012</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="" /><p>U. P. India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="">Write your message</label>
            <textarea name="message" rows={8} id="" placeholder='write youyr message here...'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
