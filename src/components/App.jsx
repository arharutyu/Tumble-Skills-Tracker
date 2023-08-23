import React, { useState, useEffect } from 'react'
import { Routes, Route, useParams, Navigate } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css'
import Home from '../routes/Home'
import Students from '../routes/Students'
import Skills from '../routes/Skills'
import NewAssessment from '../routes/NewAssessment'
import Users from '../routes/Users'
import Login from '../routes/Login'
import StudentProfile from './StudentProfile'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    // Check if accessToken is stored in sessionStorage
    const checkLogin = sessionStorage.getItem('accessToken') !== null
    if (checkLogin) {
    setIsLoggedIn(true)
    // Automatically delete accessToken after 6 hours (21600000 milliseconds)
    setTimeout(() => {
      sessionStorage.removeItem('accessToken')
      setIsLoggedIn(false)
    }, 21600000)
  }
  }, []);


  return (
    <>
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      {isLoggedIn && (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home isAdmin={user.isAdmin} />} />
            <Route path="/students" element={<Students isAdmin={user.isAdmin} />} />
            <Route path="/students/:id" element={<StudentProfile isAdmin={user.isAdmin} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/new" element={<NewAssessment />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<h3>Page not found</h3>} />
          </Routes>
        </>
      )}
    </>
  );
}


export default App;

