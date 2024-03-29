import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () =>{

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-light shadow sticky-top p-0">
            <NavLink  className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 text-primary">JobEntry</h1>
            </NavLink>
            <button className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0" style={{marginTop:"20px"}}>
                    <NavLink to="Home" className="nav-item nav-link active" style={{color:'white'}}>Home</NavLink>
                    <NavLink to='About' className="nav-item nav-link" style={{color:'white'}}>About</NavLink>
                    
                    <div className="nav-item dropdown">
                    
                        <NavLink to="Jobs" className="nav-item nav-link" style={{color:'white'}}>Jobs</NavLink>
                       
                    </div>

                    <NavLink to="Contact" className="nav-item nav-link" style={{color:'white'}}>Contact</NavLink>
                    <NavLink to="Jobpost" className="btn btn-primary rounded-0 py-4 px-lg-3 d-none d-lg-block" style={{marginTop:"-20px"}}>
                        
                        Post A Job<i className="fa fa-arrow-right ms-3"></i></NavLink>

                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar