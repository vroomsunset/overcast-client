
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App
