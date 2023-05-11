import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Login, Register, MainApp, HomeMain, Home2, NotFound } from '../../pages';


const IndexRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('user') || null
  );

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  useEffect(() => {
    localStorage.setItem('user', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page when the application starts
      window.location.href = '/homemain';
    }
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={isAuthenticated
              ? <MainApp />
              : (<Navigate to="/login" replace />)
            }
          />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homemain" element={<HomeMain />} />
          <Route path="/homepage" element={<Home2 />}/>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default IndexRoutes;
