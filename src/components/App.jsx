import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css'
import Home from '../routes/Home'
import Students from '../routes/Students'
import Skills from '../routes/Skills'
import NewAssessment from '../routes/NewAssessment'
import Users from '../routes/Users'
import Login from '../routes/Login'
import StudentProfile from '../routes/StudentProfile'
import StartAssessment from '../routes/StartAssessment'
import EditStudent from '../routes/EditStudent'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState([])
  
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')) || [])
  }, [])

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
          <NavBar isAdmin={user.isAdmin} />
          
          <Routes>
            <Route path="/" element={<Home isAdmin={user.isAdmin} name={user.name} />} />
            <Route path="/students" element={<Students isAdmin={user.isAdmin} />} />
            <Route path="/students/:id" element={<StudentProfile isAdmin={user.isAdmin} />} />
            <Route path="/students/:id/edit" element={<EditStudent isAdmin={user.isAdmin} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/new" element={<NewAssessment />} />
            <Route path="/new/start" element={<StartAssessment />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<h3>Page not found</h3>} />
          </Routes>
          
        </>
      )}
    </>
  );
}


export default App;

