import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css'
import Home from '../routes/Home'
import Students from '../routes/Students'
import Skills from '../routes/Skills'
import NewAssessment from '../routes/NewAssessment'
import Users from '../routes/Users'
import Login from '../routes/Login'

function App() {
  let isLoggedIn = true

  if (!isLoggedIn) {
    return (
      <>
        <Login />
      </>
    )
  }
  else {
    return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/new' element={<NewAssessment />} />
        <Route path='/' element={<Users />} />
        <Route path='*' element={<h3>Page not found</h3>}></Route>
      </Routes>
    </>
  )}
}

export default App
