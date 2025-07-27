import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Front from './components/front/Front';

import './App.css'


function App() {
 

  return (
    <>
     <Router>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
      </Router>
      <Front />
      <h1>Bapan Mondal</h1>
      <div className="card">
        Bapan Mondal Photography Academy
      </div>
      <Footer />
    
      
      
     
    </>
  )
}

export default App
