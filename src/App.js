import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Routes, Route } from 'react-router-dom';
import Jobs from './Components/Jobs';
import Contact from './Components/Contact';
import About from './Components/About';
import Jobpost from './Components/Jobpost';
import Signup from './Components/Signup';
import Login from './Components/Login';
import UserProfile from './Components/Userprofile';
import Search from './Components/Search';
import Talent from './Components/Talent';

function App() {
  return (
    <div className='whole'>
      <div className='App'>
        <Navbar />
       
        <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/Home' element={<Header />} />
          <Route path='/Jobs' element={<Jobs />} />
          <Route path='/Jobpost' element={<Jobpost />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Home/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home/Login' element={<Login />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Userprofile' element={<UserProfile />} />
          <Route path='/Talent' element={<Talent />} />
          <Route path='/Home/Talent' element={<Talent />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Home/Search' element={<Search />} />
        </Routes>
       
           <Footer />
       
      </div>
    </div>
  );
}
export default App
