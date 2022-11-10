import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ForgetPassword from './components/ForgetPassword'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Private from './components/Private'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Private Component={Dashboard} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
