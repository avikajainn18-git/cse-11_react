import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* 404 page*/}
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
