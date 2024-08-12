import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import "./Chapters.css"

const Chapter = () => {

  
  const [chapter,setChapter]=useState([])
  fetch('https://vedicscriptures.github.io/chapters/').then(response=>response.json()).then(data=>setChapter(data))



  
  return (
    <div>
      <div className='chaptergrid'>
        {chapter.map((item)=>{
          
          return(
            
              <div>
                <center>
                <Link style={{textDecoration:"none",color:"black"}} to={`/chapter/${item.chapter_number}`}>
                <div  className='eachchapter'>
                <h1>Chapter {item.chapter_number}</h1>
                <h3>{item.translation}</h3>
                <div className='summary'><p>{item.summary.en}</p></div>
                <p>{item.verses_count} Verses</p>
                </div>
                </Link>
               
                </center>
              </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default Chapter
