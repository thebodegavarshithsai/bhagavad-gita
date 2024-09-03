import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import "./Chapters.css"
import axios from "axios"

const ShimmerCard = () => (
    <div className=" loading-card loading-shimmer">
       <h4>हरे कृष्णा, हरे कृष्णा, कृष्णा-कृष्णा, हरे-हरे,
      हरे रामा, हरे रामा, रामा-रामा, हरे-हरे</h4>
      <h4>
      Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare
      </h4>
      <h3>Loading Please Wait...</h3>
    </div>
  // <div className="loading-card">
    
   
  // </div>
);


const Chapter = () => {
  const [loading,setLoading]=useState(false)

  
  const [chapter,setChapter]=useState([])

  useEffect(()=>{
    const fetching= async()=>{
    try{
      setLoading(true)
       await fetch('https://vedicscriptures.github.io/chapters/').then(response=>response.json()).then(data=>setChapter(data))
       setLoading(false)
    }
    catch(err){
      console.log(err)
    } 
  }
  fetching();
  },[])
  
  
  
  
  return (
    <div>
      <div className='chaptergrid'>
      {loading && Array.from({ length: 6 }, (_, index) => (
        <ShimmerCard />
          
        ))}
        {!loading && chapter.map((item)=>{
          
          return(
            
              <div key={item.chapter_number}>
                <center>
                <Link style={{textDecoration:"none",color:"black"}} to={`/chapter/${item.chapter_number}`}>
                <div  className='eachchapter'>
                <h1>{`Chapter ${item.chapter_number}`}</h1>
                <h3>{item.translation}</h3>
                <div className='summary'><p>{item.summary.en}</p></div>
                <p> {`${item.verses_count} Verses`}</p>
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
