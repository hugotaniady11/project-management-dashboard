import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, redirect  } from 'react-router-dom'
import { Login, Register, MainApp, HomeMain, Home, HomePage } from '../../pages';
import { getCurrentUser } from '../../utils/data';


const IndexRoutes = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  
  
  return (
    <>
      <Router>
        <Routes>
          {currentUser ? (
            <Route path="*" element={<MainApp />} />
          ) : (
            <> 
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/homemain" element={<HomeMain />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/homepage" element={<HomePage/>} />
            </>
          )}
        </Routes>
      </Router>
  
    </>
  )
}

export default indexRoutes;
