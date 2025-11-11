import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Companies from './components/Companies'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar></Navbar> 
     <Routes>
      <Route path='/' element={
        <>
        <Hero></Hero>
     <Companies></Companies>
     <Services></Services>
     
     </>
      }/>
      
      <Route path='/login' element={<Login/>}/>
     
     </Routes>
     <Footer></Footer>
     
    </>
  )
}

export default App
