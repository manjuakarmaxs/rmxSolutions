// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';
import ProductCertification from './components/ProductCertification';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<About/>} />
        <Route path="/productCertification" element={<ProductCertification />} />
        <Route path="/qci" element={<QCI-Schemes />} />
        <Route path='documents' element={<Document/>}/>
        <Route path="/contact" element={<Contact />} />
        
        
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
