import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./Verses.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Verses = () => {
    const{id}=useParams()
    const[verses,setVerses]=useState([])
  let verses_count=[46,72,43,42,29,47,30,28,34,42,55,20,35,27,20,24,28,78]

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const data = [];
        for (let i = 1; i <= verses_count[id - 1]; i++) {
          data.push(axios.get(`https://vedicscriptures.github.io/slok/${id}/${i}/`).then(res => res.data));
        }
        const allVerses = await Promise.all(data);
        setVerses(allVerses);
        console.log(verses)
      } catch (err) {
        console.log(err);
      }
    };

    fetchVerses();
  }, [id]);

  return (
    <center>
    <div>
      {
        verses.map((item,index)=>{
          return(
            <Link to={`/chapter/${item.chapter}/${item.verse}`} style={{textDecoration:"none",color:"black"}}>
              <div key={index} className='versecontainer'>
              <h3>{`Verse ${index+1}`}</h3>
              <p>{item.prabhu.et}</p>
            </div>
            </Link>
            
            
          )
        }
           
          )
      }
    </div>
    </center>
  )
}

export default Verses
