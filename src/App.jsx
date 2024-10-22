// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Training from './components/Training';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/services" element={<Services/>} /> */}
        <Route path="/services/:type" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/getstarted' element={<GetStarted/>}/>
        
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
