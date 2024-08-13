import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chapter from './Components/Chapters/Chapter';
import Quotes from './Components/Quotes/Quotes';
import About from './Components/About_Gita/About';
import EachChapter from './Components/EachChapter/EachChapter';
import Verses from './Components/Verses/Verses';
import SpecificVerse from './Components/SpecificVerse/SpecificVerse';




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path='/chapters' element={<Chapter  />}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/quotes' element={<Quotes/>}/>
          <Route path='/about' element={<About/>} />
          <Route path="/chapter/:id" element={<EachChapter />}/>
          <Route path="/chapter/:id" element={<Verses/>}/>
          <Route path='/chapter/:ch/:sl' element={<SpecificVerse/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
