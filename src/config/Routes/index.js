import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, MainApp } from '../../pages';

const indexRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<MainApp/>} />
        </Routes>
    </Router>
  )
}

export default indexRoutes;
