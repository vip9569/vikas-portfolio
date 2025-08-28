import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
// import logo from '../../assets/logo.png'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      {/* <img src={logo} alt="logo-image" /> */}
      <h3>Vikas Yadav</h3>
      <img src={menu_open} onClick={openMenu} alt="logo-image" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt="logo-image" onClick={closeMenu} className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<span></span>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<span></span>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#skills"><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<span></span>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#projects"><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<span></span>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#education"><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu==="education"?<span></span>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<span></span>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' href="#contact">Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
