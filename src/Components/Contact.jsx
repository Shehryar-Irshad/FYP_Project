import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Contact = () =>{
    const [formData, setFormData] = useState({
        your_name: "",
        your_email: "",
        subject: "",
        message:""
      });

      const [post, setPost] = useState('');
        const navigate = useNavigate();

        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        };

        const handleSubmit = (e) => {
        e.preventDefault();

        // Your API endpoint URL for sign-up
        const apiUrl = 'http://127.0.0.1:8000/em_register/';

        // Make the API request using Axios
        axios.post(apiUrl, formData)
            .then((response) => {
            console.log('Message Sent!', response.data);
            // Do something after successful sign-up, e.g., redirect to another page
            setPost('Message Sent Successfully!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
            })
            .catch((error) => {
            console.error('Message failed:', error);
            // Handle error, e.g., show an error message to the user
            setPost('Sign-up failed. Please try again.');
            });
        };



    return(
        <>
         <div class="container-xxl py-5 bg-dark page-header mb-5">
            <div class="container my-5 pt-5 pb-4">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item"><NavLink to="/Home">Home</NavLink></li>
                        <li class="breadcrumb-item"><NavLink to="/Home">Pages</NavLink></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="container-xxl py-5 bg-primary bg-opacity-75" style={{marginTop:"-48px", marginBottom:"-48px"}}>
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
                <div class="row g-4">
                    <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                <div class="d-flex justify-content-center bg-light rounded p-3">
                                    
                                    <span>123 Street, Lahore, Pakistan</span>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                <div class="d-flex justify-content-center bg-light rounded p-3">
                                    
                                    <span>info@jobentry.com</span>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                <div class="d-flex justify-content-center bg-light rounded p-3">
                                   
                                    <span>+92 345768189</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <iframe class="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13609.241113542534!2d74.3704655!3d31.4881542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1684894768498!5m2!1sen!2s"
                            frameborder="0" style={{minheight: '400px', border:'0'}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.5s">
                            
                            <form onSubmit={handleSubmit}>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" name="your_name" placeholder="Your Name" onChange={handleChange}/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" name="your_email" placeholder="Your Email" onChange={handleChange}/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" name="subject" placeholder="Subject" onChange={handleChange}/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" name="message" style={{height: '150px'}} onChange={handleChange}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-dark w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <h1>{post}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact