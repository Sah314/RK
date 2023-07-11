import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Products from './components/Products/products'
import EnquiryForm from './components/Enquiry/Enquiryform'
import Location from './components/Location/location';
import Aboutus from './components/Aboutus/Aboutus';
import { useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes,useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop();
  }, [pathname]);

  return null;
}


function App(){

  return(
    <Router>
      <div className='App dark:bg-[#1e0036]'>
      <Navbar/>

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/enquiryform' element={<EnquiryForm/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Location' element={<Location/>}/>
      </Routes>
      </div>
    </Router>
  )
}


function Home() {
  return (
    
    <div className="App">
      <div className="image-container">
      <img src="substation-electricity-current-high-voltage-transformer-power-generation.png" alt="Your Image" className="centered-image" />
    </div>

<Products/>
    <Aboutus/>
      <EnquiryForm />
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
