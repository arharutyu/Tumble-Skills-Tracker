import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css'
import Home from '../routes/Home'
import Students from '../routes/Students'
import Skills from '../routes/Skills'
import NewAssessment from '../routes/NewAssessment'
import Users from '../routes/Users'
import UserProfle from '../routes/UserProfile'
import AddUser from '../routes/AddUser'
import EditUser from '../routes/EditUser'
import Login from '../routes/Login'
import StudentProfile from '../routes/StudentProfile'
import StartAssessment from '../routes/StartAssessment'
import EditStudent from '../routes/EditStudent'
import AddStudent from '../routes/AddStudent'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState([])
  const [accessToken, setAccessToken] = useState('')
  console.log(user)
  console.log(accessToken)
  useEffect(() => {
    // Check if accessToken is stored in sessionStorage
    // const storedAccessToken = sessionStorage.getItem('accessToken') || ''
    // setAccessToken(storedAccessToken)
    const storedAccessToken = sessionStorage.getItem('accessToken');
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (storedAccessToken && storedUser) {
      setAccessToken(storedAccessToken);
      setUser(storedUser);
      setIsLoggedIn(true);
    }
    // const checkLogin = accessToken !== ''
    // if (checkLogin) {
    // setIsLoggedIn(true)
    // Automatically delete accessToken after 6 hours (21600000 milliseconds)
    setTimeout(() => {
      sessionStorage.removeItem('accessToken')
      setIsLoggedIn(false)
    }, 21600000)
  
  }, []);

  return (
    <>
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} setAccessToken={setAccessToken} />}
      {isLoggedIn && (
        <>
          <NavBar isAdmin={user.isAdmin} />
          
          <Routes>
            <Route path="/" element={<Home isAdmin={user.isAdmin} name={user.name} accessToken={accessToken} />} />
            
            <Route path="/students" element={<Students isAdmin={user.isAdmin} accessToken={accessToken} />} />
            <Route path="/students/new" element={<AddStudent isAdmin={user.isAdmin} accessToken={accessToken} />} />
            <Route path="/students/edit/:id" element={<EditStudent isAdmin={user.isAdmin} accessToken={accessToken} />} />
            <Route path="/students/:id" element={<StudentProfile isAdmin={user.isAdmin} accessToken={accessToken} />} />

            <Route path="/skills" element={<Skills accessToken={accessToken} />} />
            
            <Route path="/new" element={<NewAssessment accessToken={accessToken} />} />
            <Route path="/new/start" element={<StartAssessment accessToken={accessToken} />} />
            
            <Route path="/users" element={<Users isAdmin={user.isAdmin} accessToken={accessToken} />} />
            <Route path="/users/:id" element={<UserProfle isAdmin={user.isAdmin} accessToken={accessToken} />} />
            <Route path="/users/new" element={<AddUser isAdmin={user.isAdmin} accessToken={accessToken} />} />
            <Route path="/users/edit/:id" element={<EditUser isAdmin={user.isAdmin} accessToken={accessToken} />} />

            <Route path="*" element={<h3>Page not found</h3>} />
          </Routes>
          
        </>
      )}
    </>
  );
}


export default App;

