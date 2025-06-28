import React from "react";
import Home from "./pages/Home";
import Doctors from "./pages/doctors";
import Login from "./pages/login";
import About from "./pages/About";
import Contact from "./pages/contact";
import Myprofile from "./pages/myprofile";
import Myappointments from "./pages/myappointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<Myprofile />}/>
        <Route path='/my-appointments' element={<Myappointments />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App