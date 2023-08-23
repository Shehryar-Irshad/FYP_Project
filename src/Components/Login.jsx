import React from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [post, setPost] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        data
      );
      
      if (response.status === 200) {
        // Login successful
        console.log("Login successful");

        setPost("Login successful");
    
        }else {
          // Handle login error, display error message
          console.error('Login failed');

          setPost("Login failed");
        }
      } 
      
      catch (error) {
        console.error('An error occurred', error);
        setPost("Login failed");
      }
    };
    return(
      <>
        <div className="container bg-body" style={{marginTop:"180px", width:"400px", height:"300px"}}>
              
          <h2>Login</h2>
            <form onSubmit={handleSubmit} className="text-center" style={{paddingTop:"30px", paddingBottom:"10px"}}>
              <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </div>        
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>        
                  <div className="col-12 mt-3">
                    <input type="password" className="form-control" placeholder="password" aria-label="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
              </div>
                  <button type="submit">Login</button>
            </form>
            <div>
              <h1>{post}</h1>
            </div>
        </div>
      </>
    )
}
export default Login