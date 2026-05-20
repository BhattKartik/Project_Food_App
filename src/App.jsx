import { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  

  return (
    <>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<AboutUs/>}/>
</Routes>
    </BrowserRouter>

    {/* <Login/> */}
    
      
    </>
  )
}

export default App
