import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Projects.css'
import icon from '../../assets/icon.svg'
import mywork_data from '../../assets/mywork_data'
// import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div id='projects' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            {/* <img src="" alt="" /> */}
        </div>
      <div className="mywork-container">
            {mywork_data.map((work, index)=>{
                return <div key={index} className="project-detail">
                    <img src={work.p_img} alt="" />
                    <h3>{work.p_name}</h3>
                    <p>{work.p_desc}</p>
                    <a href={work.p_link}>Github link...</a>  
                </div>
            })}   
      </div>
      <div className="mywork-showmore">
        <p><a href="https://www.github.com/vip9569">Github</a></p>
        <img src={icon} alt="" />
      </div>
    </div>
  )
}

export default Projects
