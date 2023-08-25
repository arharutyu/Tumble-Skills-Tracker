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
import AddStudent from '../routes/AddStudent'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState([])
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    // Check if accessToken is stored in sessionStorage
    const storedAccessToken = sessionStorage.getItem('accessToken') || ''
    setAccessToken(storedAccessToken)
    
    const checkLogin = storedAccessToken !== ''
    if (checkLogin) {
    setIsLoggedIn(true)
    // Automatically delete accessToken after 6 hours (21600000 milliseconds)
    setTimeout(() => {
      sessionStorage.removeItem('accessToken')
      setIsLoggedIn(false)
    }, 21600000)
  }
  }, [user]);

  return (
    <>
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      {isLoggedIn && (
        <>
          <NavBar isAdmin={user.isAdmin} />
          
          <Routes>
            <Route path="/" element={<Home isAdmin={user.isAdmin} name={user.name} />} />
            
            <Route path="/students" element={<Students isAdmin={user.isAdmin} accessToken={accessToken} />} />
            <Route path="/students/new" element={<AddStudent isAdmin={user.isAdmin} />} />
            <Route path="/students/edit/:id" element={<EditStudent isAdmin={user.isAdmin} />} />
            <Route path="/students/:id" element={<StudentProfile isAdmin={user.isAdmin} />} />

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

