import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, MainApp, HomeMain, Home, HomePage, } from '../../pages';

const indexRoutes = () => {
  
  
  return (
    <>
      <Router>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/homemain" element={<HomeMain/>} />
              <Route path="*" element={<MainApp/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/homepage" element={<HomePage/>} />
          </Routes>
      </Router>
  
    </>
  )
}

export default indexRoutes;
