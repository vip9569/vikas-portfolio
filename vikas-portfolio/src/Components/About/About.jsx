import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.jpg'
import profile from '../../assets/about_img1.png'
import linkedin from '../../assets/linkedin.png'
import x from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div id='about' className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hi, I’m Vikas Yadav from Siddharthnagar, Uttar Pradesh, India.
              I’m currently in the final year of my B.Tech in Computer Science & Engineering (AI & ML) at G. L. Bajaj Institute of Technology & Management, Greater Noida.
              Prior to this, I completed a Diploma in Computer Science & Engineering in 2023 from Government Polytechnic, Gonda.

              I have a strong interest in coding, project development, and exploring emerging technologies.
              As a self-motivated and hardworking individual, I constantly seek opportunities to learn, improve, and solve real-world problems through technology.</p>
            <p>I'm looking for an opportunity in a team-oriented and knowledge-rich environment where I can grow professionally and help solve real-life problems through innovative thinking..</p>
          </div>

          {/* <div className="about-skills"> 
                  <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"80%"}} /></div>
                  <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}} /></div>
                  <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}} /></div>
                  <div className="about-skill"><p>Java</p> <hr style={{width:"85%"}} /></div>
                  <div className="about-skill"><p>MYSQL</p> <hr style={{width:"80%"}} /></div>
                  <div className="about-skill"><p>AWS</p> <hr style={{width:"70%"}} /></div>
                </div> */}

          <div className='contact-icons'>
            <div className="contact-icon"><a href="https://www.linkedin.com/in/vikas-yadav-9ba992254/"><img src={linkedin} alt="" /></a></div>
            <div className="contact-icon"><a href="https://x.com/Vikas_15225741?t=Ju55cSWxuW5WRP6VmiPO2g&s=09"><img src={x} alt="" /></a></div>
            <div className="contact-icon"><a href="https://www.facebook.com/profile.php?id=100061007394113&mibextid=ZbWKwL"><img src={facebook} alt="" /></a></div>
            <div className="contact-icon"><a href="https://www.instagram.com/vikaskumaryadav7023?igsh=MWE3a2RuYWsyeTRjNg=="><img src={insta} alt="" /></a></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HACKTHON PARTICIPATED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>EVENT ATTENDED</p>
        </div>
      </div>
    </div>
  )
}

export default About
