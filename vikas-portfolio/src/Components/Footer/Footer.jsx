import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>this is the footer</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={icon} alt="" />
                <input type="emial" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div> */}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            &#169; 2024 Vikas Yadav, All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
