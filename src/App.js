import './App.css';
import Business from './MyComponent/Business';
import Health from './MyComponent/Health';
import Home from './MyComponent/Home';
import International from './MyComponent/International';
import Navbar from './MyComponent/Navbar';
import React  from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
        <Navbar />
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route  path="/International" element={<International />} />
          <Route  path ="/Business" element={<Business/>} />
          <Route  path="/Health" element={<Health/>} />
          </Routes>
      </Router>
    </>

  );
}

export default App;
