import React from 'react';
import ReactDOM from 'react-dom/client'
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import Home from './components/home/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Register from './components/Register';
import {Routes,Route} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoute from './routes/AppRoute';

/* https://www.youtube.com/watch?v=Vy9Nc0oNzR8 
https://www.youtube.com/playlist?list=PLLUtELdNs2ZYnEIWliBpU98gtorNRNHw1
*/

function App() {
  return (
    <Router>
      <AppRoute/>
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
      </Routes> */}
    </Router>
  );
   
  

}

export default App;
