import React,{useEffect,useState} from 'react'
import "./specificVerse.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SpecificVerse = () => {
  const{ch,sl}=useParams()
const[specificVerse,setspecificVerse]=useState([])

useEffect(()=>{
  axios.get(`https://vedicscriptures.github.io/slok/${ch}/${sl}`).then(res=>console.log(res.data))
},[ch,sl])

  return (
    <div style={{marginTop:"120px"}}>
      hello World
    </div>
  )
}

export default SpecificVerse
