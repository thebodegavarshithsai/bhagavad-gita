import React, { useEffect, useState } from 'react'
import "./EachChapter.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Verses from '../Verses/Verses'

const EachChapter = () => {
  const {id}=useParams()

  const[eachChapter,seteachChapter]=useState({})
  const[verses,setVerses]=useState([])

  useEffect(() => {
    // Fetch the data only when the component is mounted or when 'id' changes
    fetch(`https://vedicscriptures.github.io/chapter/${id}/`)
      .then(response => response.json())
      .then(data => seteachChapter(data))
      .catch(error => console.error("Error fetching data: ", error));
  }, [id])

    

  return (
    <center>
    <div className='wholechapter'>
      <div className='chapterintro'>
        <div className='before'>

        </div>
      <h2>{`Chapter ${eachChapter.chapter_number}`}</h2>
      <h1>{eachChapter.transliteration}</h1>
      {eachChapter.summary && eachChapter.summary.en && (
        <p>{eachChapter.summary.en}</p>
      )}  
      </div>
      <div>
        <Verses/>
      </div>
      </div>
     
      </center>

  )
}

export default EachChapter
