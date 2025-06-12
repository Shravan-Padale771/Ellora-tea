import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Navbar from './component/Navbar';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import Footer from './component/Footer';
import AboutPage from './pages/AboutUsPage';
import Gallery from './pages/Gallery';
import ScrollToTop from './component/ScrollTop';


const App = () => {
  return (
    <div>

    
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

