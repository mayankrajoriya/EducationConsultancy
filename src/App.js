import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import Home from './Components/Home';
import About from './Components/About';
import { Services } from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="App">
  <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
       </Routes>

    </div>
  );
}

export default App;
