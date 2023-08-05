import React from "react";
import axios from "axios";
import {useState} from "react";

const Signup = () =>{
      const [formData, setFormData] = useState({
            username: "",
            email: "",
            password: "",
      });
      
      const [post, setPost] = useState('');

      const handleChange = (e) =>{
         setFormData({...formData, [e.target.name]: e.target.value});
      };
      console.log(formData.username);
     const handleSubmit = (e) =>{
      e.preventDefault();

      // Your API endpoint URL for sign-up
      const apiUrl = 'http://127.0.0.1:8000/api/register/';
  
      // Make the API request using Axios
      axios.post(apiUrl, formData)
        .then((response) => {
          console.log('Sign-up successful!', response.data);
          // Do something after successful sign-up, e.g., redirect to another page
          setPost('Sign-up successful!');
        })
        .catch((error) => {
          console.error('Sign-up failed:', error);
          // Handle error, e.g., show an error message to the user
          setPost('Sign-up failed. Please try again.'); 
        });
     };

      return(
        <div className="container bg-body" style={{marginTop:"180px", width:"400px", height:"350px"}}>
            
              <h2>Sign Up</h2>
          <form className="text-center" style={{paddingTop:"30px", paddingBottom:"10px"}} onSubmit={handleSubmit}>
            <div className="row mb-3">
                <div className="col">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={formData.username} onChange={handleChange}/>
                </div>
                <div className="mt-3"> 
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="col-12 mt-3">
                <input type="password" className="form-control" placeholder="password" aria-label="password" value={formData.password} onChange={handleChange}/>
                </div>
                </div>
                <button type="submit">Signup</button>
           </form>
           <div>
               <h1>{post}</h1>
           </div>

        </div>
      )
}
export default Signup