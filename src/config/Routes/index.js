import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, MainApp, HomeMain } from '../../pages';

const indexRoutes = () => {
  
  
  return (
    <>
      <Router>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/HomeMain" element={<HomeMain/>} />
              <Route path="*" element={<MainApp/>} />
          </Routes>
      </Router>
  
    </>
  )
}

export default indexRoutes;
