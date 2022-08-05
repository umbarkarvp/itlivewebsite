import React from 'react'
import Header from './Components/Header/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Footer from './Components/Footer/Footer'
import HeadSection from './Components/HeadSection/HeadSection'
// import About from './Components/About/About'
import Performance from './Components/Performance/Performance'
import Work from './Components/Work/Work'
import Faq from './Components/FAQ/Faq'
import Blog from './Components/Blog/Blog'
import { Route , Routes } from 'react-router-dom';
import Sheet from './Pages/Sheet/Sheet'
import Balance from './Pages/Balance/Balance'
import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Navbar/Home'
import About from './Pages/Navbar/About'
import Service from './Pages/Navbar/Service'
import Contact from './Pages/Navbar/Contact'


const App = () => {
  let userName = "Vaishnavi"
  return (
    <>
    {/* <Header /> */}
    {/* <HeadSection /> */}
    {/* <About /> */}
    {/* <Work /> */}
    {/* <Performance /> */}
    {/* <Faq /> */}
    {/* <Blog /> */}
    {/* <Footer /> */}
    {/* <Sheet /> */}
    {/* <Balance uname={userName} /> */}
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App