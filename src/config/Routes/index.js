import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, MainApp, NotFound } from '../../pages';

const indexRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route index element={<MainApp/>} />
            <Route path="*"  element={<NotFound />}/>

        </Routes>
    </Router>
  )
}

export default indexRoutes;
