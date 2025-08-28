import React from 'react'
import './Skills.css'
// import theme_pattern from '../../assets/theme_pattern.jpg'
import Skills_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon'

function Skills() {
  return (
    <div className='skills'>
      <div className="skills-title">
        <h1>My Skills</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div id='skills' className="skills-container">
        {Skills_Data.map((service, index)=>{
            return <div key={index} className='skills-format'> 
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="skills-readmore">
              <p>Read More</p>
              {/* <img src={arrow_icon} alt="" /> */}
              
            </div>

            </div>
        })}
      </div>
    </div>
  )
}

export default Skills
