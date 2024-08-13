import React, { useState, useEffect } from 'react';
import './SpecificVerse.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SpecificVerse = () => {
  const { ch, sl } = useParams();
  const[wordMeaning,setwordMeaning]=useState("")
  const [particularverse, setparticularVerse] = useState({
    _id:" ",
    slok:" ",
    transliteration:" ",
    meaning:" ",
    purport:" ",
  }); // Initialize with null

  useEffect(() => {
    axios
      .get(`https://vedicscriptures.github.io/slok/${ch}/${sl}/`)
      .then((res) => setparticularVerse({_id:res.data._id,slok:res.data.slok,transliteration:res.data.transliteration,meaning:res.data.prabhu.et,purport:res.data.prabhu.ec}))
      .catch((err) => console.error(err)); // Handle any potential errors
  }, [ch, sl]);

  useEffect(()=>{
    axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/${sl}/`,{
      headers:{
        'X-Rapidapi-Key': '8fd5da1e9emsh4d58d81802f5fedp146389jsnbaf5c5c98085',
        'X-Rapidapi-Host': 'bhagavad-gita3.p.rapidapi.com'
      }
    }).then(res=>setwordMeaning(res.data.word_meanings))
  },[ch,sl])

  if (!particularverse) {
    return <div>Loading...
      <h2>हरे कृष्णा, हरे कृष्णा, कृष्णा-कृष्णा, हरे-हरे
      हरे रामा, हरे रामा, रामा-रामा, हरे-हरे</h2>
      <h2>
      Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare Hare Rama, Hare Rama, Rama Rama, Hare Hare
      </h2>
    </div>; // Render a loading state until the data is fetched
  }

  return (
    <center>
      <div className='specificverse-container'>
        <div className="specificverse">
          <h1>{particularverse._id}</h1>
          <h3>{(particularverse.slok).split("\n").map((item)=>{
            return <div>
              {item}<br></br>
            </div>
          })}</h3>
          <p className='english'>{(particularverse.transliteration).split(".").map((item)=>{
            return <div>
              {item}<br></br>
            </div>
          })}</p>
          <p className='wordmeaning'>{wordMeaning}</p>
          <p className='meaning'>{particularverse.meaning}</p>
          <p className='purport'>{(particularverse.purport).split(":").map((item)=>{
            return <div>
              {item}<br/><br/>
            </div>
          })}</p>
        </div>
      </div>
      
    </center>
  );
};

export default SpecificVerse;
