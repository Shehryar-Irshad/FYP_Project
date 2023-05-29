
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import JobList from './Components/JobList';
import Jobdetail from './Components/Jobdetail';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Jobpost from './Components/Jobpost';

function App() {
  return (
    <div className='App'>
      <Navbar/>       
         <Routes>
          <Route exact path='/Home' element={<Home/>}/> 
            <Route exact path='/Header' element={<Header/>}/> 
            <Route exact path='/Category' element={<Category/>}/>
            <Route path='/JobList' element={<JobList/>}/>
            <Route path='/Jobdetail' element={<Jobdetail/>}/>
            <Route path='/Jobpost' element={<Jobpost/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route exact path='/Footer' element={<Footer/>}/>
          </Routes>
    </div>
  );
}
export default App
