
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Home from './component/Home'
import ModernNavbar from './component/ModernNavbar'
import About from './component/About'
import Services from './component/Services'
import Gallery from './component/Gallery'
import Contact from './component/Contact'
import Certificate from './component/Certificate'
import ServiceDetail from './component/ServiceComponent/ServiceDetail'
import ScrollToTop from './component/ScrollToTop'
import FloatingButtons from './component/FloatingButtons'



function App() {
  

  return (
    <>
    <ScrollToTop/>
    <FloatingButtons/>
      <ModernNavbar/>
    <Routes>
         {/* <Route element={<Layout />}>  */}
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
           <Route path="/services/:id" element={<ServiceDetail />} /> 
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/video" element={<Video />} /> */}
           <Route path="/contact" element={<Contact />} />  
         {/* </Route>  */}
      </Routes>
      
      <Footer/>
      
    </>
  )
}

export default App
