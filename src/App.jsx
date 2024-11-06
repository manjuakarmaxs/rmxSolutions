// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';
import ProductCertification from './components/ProductCertification';
import ClientsList from './components/ClientsList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       
       
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/productCertification" element={<ProductCertification />} />
        <Route path="/qci" element={<QCI-Schemes />} />

        <Route path="/qci/clients-list" element={<ClientsList />} />


        <Route path='documents' element={<Document/>}/>
        <Route path="/contact" element={<Contact />} />
        
        
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
