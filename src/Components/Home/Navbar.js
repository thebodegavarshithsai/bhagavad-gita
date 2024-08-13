import React, { useState } from 'react'
import "./Navbar.css"
import radhakrishna from "../Images/radhakrishna.jpg"
import { Link } from 'react-router-dom'
import AudioPlayer from '../Audios/AudioPlayer'
const Navbar = () => {
  
  const [menu,setMenu]=useState("Home")

  return (
    <div>
      <div className='navbar'>
        <div className='left-section'>
          <img className='krishna-img' src={radhakrishna}></img>
          <h2>Bhagavad Gita</h2>
        </div>
       
        <ul className='middle-section'>
          <li onClick={()=>setMenu("home")}>
            <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
            {menu==="home"?<hr></hr>:<></>}
          </li>
          <li onClick={()=>setMenu("chapters")}>
            <Link to="/chapters" style={{textDecoration:"none",color:"black"}}>Chapters</Link>
            {menu==="chapters"?<hr></hr>:<></>}
          </li>
          <li onClick={()=>setMenu("quotes")}>
            <Link to="/quotes" style={{textDecoration:"none",color:"black"}}>Quotes</Link>
            {menu==="quotes"?<hr></hr>:<></>}
          </li>
          <li onClick={()=>setMenu("aboutgita")}>
            <Link to="/about" style={{textDecoration:"none",color:"black"}}>Explore</Link>
            {menu==="aboutgita"?<hr></hr>:<></>}
          </li>
        </ul>
        <div className='right-section'>
            <div className='audio'>
            {<AudioPlayer/>}
            </div>
        </div>
      </div><hr className='hr'></hr>
      </div>
  )
}

export default Navbar
