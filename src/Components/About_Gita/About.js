import React from 'react'
import "./About.css"
import space4k from "../Images/omspace2.png"
import brahma from "../Images/brahmaincosmos.jpg"
import vishnu from "../Images/vishnuincosmos.jpg"
import shiva from "../Images/shivaincosmos.jpg"
import space4k1 from "../Images/omspace.png"

const About = () => {
  return (
    <div className='explorecontainer'>
       <div className='spaceimgdiv'>
        <img className='spaceimg' src={space4k} />
       </div>
       <div className='spaceimgdiv'>
        <img className='spaceimg1' src={space4k1} />
       </div>
       <div className='trimurtis'>
        <img className='brahma' src={brahma} />
        <img className='vishnu' src={vishnu}/>
        <img className='shiva' src={shiva}/>
       </div>
    </div>
  )
}

export default About
