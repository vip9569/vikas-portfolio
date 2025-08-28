import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
// import resume from '../../assets/vikas_resume_5thsem.pdf'
const Hero = () => {




  const onButtonClick = () => {
    const pdfUrl = "https://drive.google.com/file/d/1R85le345wtuBJmJsILt8CGZfx-Rz_BFJ/view?usp=drivesdk";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "vikas_resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div id='home' className='hero'>
      <img className="profile" src={profile_img} alt="profile picture" />
      <h1><span>I'm Vikas Yadav,</span> Full stack java developer.</h1>
      <p>B. Tech final year student at G. L. Bajaj Institute of Technology & Management, Greater Noida.</p>
      <div className="hero-action">
        {/* <div className="hero-connect">Hire me</div> */}
        <div className="hero-resume" onClick={onButtonClick}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
