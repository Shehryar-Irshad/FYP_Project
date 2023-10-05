import React from "react";
import {NavLink} from "react-router-dom";

const About = () =>{
    return(
        <>
        <div class="container-xxl py-5 bg-dark page-header mb-5">
            <div class="container my-5 pt-5 pb-4">
                <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item"><NavLink to="Home">Home</NavLink></li>
                        <li class="breadcrumb-item"><NavLink to="Home">Pages</NavLink></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>



        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                       
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="mb-4">We Help To Get The Best Job And Find A Talent</h1>
                        <p class="mb-4">Welcome to <b>Job Entry</b>, your one-stop destination for finding the perfect job or ideal candidates to fill your company's positions. Our job portal is designed to simplify and streamline the job search process for both job seekers and employers.</p>
                        <h2>Our Mission</h2>
                        <p> At <b>Job Entry</b>, our mission is to connect talented individuals with rewarding career opportunities while assisting companies in building strong, dedicated teams. We understand that finding the right job or candidate can be challenging, and we are here to make the process efficient, effective, and enjoyable.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About