import React from 'react'
import './Education.css'
import glbitm from '../../assets/glbitm.jpg'
import gpa from '../../assets/gpa.jpeg'
import mpic from '../../assets/mpic.jpg'
const Education = () => {
  return (
    <>
     <div className='container gap-4'>
        <div className="row m-3"><div className="col-sm-12"><h1 className='text-center'>Education</h1></div></div>
      <div className="row m-3 gap-5">
        <div className="col-md-4 border p-0"><img className='w-100 h-100' src={glbitm} alt="" /></div>
        <div className="col-md-7 border text-center">
          <p><b>College Name : </b> <span>G. L. Bajaj Institute of Technology & Management Greater Noida, U. P.</span></p>
          <p><b>Course : </b> <span>B. Tech. in Computer Science & Engineering(AI & ML)</span></p>
          <p><b>University : </b> <span>AKTU Lucknow</span></p>
          <p><b>Year : </b> <span>2022 - 2026</span></p>
          <p><b>Status : </b> <span className='text-danger'>Running...</span></p>
        </div>
      </div>

      <div className="row m-3 gap-5">
        <div className="col-md-7 border text-center">
        <p><b>College Name : </b> <span>Govt. Polytechnic Adampur Tarabganj Gonda, U. P.</span></p>
          <p><b>Course : </b> <span>Diploma in Computer Science & Engineering</span></p>
          <p><b>Board : </b> <span>BTEUP (Board of Technical Education Uttar Pradesh)</span></p>
          <p><b>Year : </b> <span>2020 - 2023</span></p>
          <p><b>Percentage : </b> <span>78%</span></p>
          <p><b>Status : </b> <span className='text-danger'>Completed</span></p>
        </div>
        <div className="col-md-4 border p-0"><img className='w-100 h-100' src={gpa} alt="" /></div>
      </div>

      <div className="row m-3 gap-5">
        <div className="col-md-4 border p-0"><img className='w-100 h-100' src={mpic} alt="" /></div>
        <div className="col-md-7 border text-center">
        <p><b>College Name : </b> <span>Mahesh Pratap Intermediate College Rudhauli Basti, U. P.</span></p>
          <p><b>Course : </b> <span>Intermediate in PCM</span></p>
          <p><b>Board : </b> <span>UP Board</span></p>
          <p><b>Year : </b> <span>2019 - 2020</span></p>
          <p><b>Percentage : </b> <span>62%</span></p>
          <p><b>Status : </b> <span className='text-danger'>Completed</span></p>
        </div>
      </div>

      <div className="row m-3 gap-5">
        <div className="col-md-7 border text-center">
        <p><b>College Name : </b> <span>Mahesh Pratap Intermediate College Rudhauli Basti, U. P.</span></p>
        <p><b>Course : </b> <span>Highschool</span></p>
          <p><b>Board : </b> <span>UP Board</span></p>
          <p><b>Year : </b> <span>2017 - 2018</span></p>
          <p><b>Percentage : </b> <span>77%</span></p>
          <p><b>Status : </b> <span className='text-danger'>Completed</span></p>
        </div>
        <div className="col-md-4 border p-0"><img className='w-100 h-100' src={mpic} alt="" /></div>
      </div>
      
     




    

</div>
    </>
  )
}

export default Education
