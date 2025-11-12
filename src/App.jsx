import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Services from './components/Services'
import Companies from './components/Companies'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import Contact from './Pages/Contact'
import AiGuidance from './Pages/AiGuidance'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar></Navbar> 
     <Routes>
      <Route path='/' element={
        <>
        <Home></Home>
     {/* <Companies></Companies>
     <Services></Services> */}
     
     </>
      }/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aiguidance' element={<AiGuidance/> }/>
     
     </Routes>
     <Footer></Footer>
     
    </>
  )
}

export default App
