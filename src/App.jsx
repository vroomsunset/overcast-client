
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup.jsx'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </>
  )
}

export default App
