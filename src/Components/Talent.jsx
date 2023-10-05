import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import user from "../Icons/user.png";

const Talent = () =>{

        const [jobData, setjobData] = useState([]);
        const apiUrl = `http://127.0.0.1:8000/em_register/`; // Replace with your API URL

        useEffect(() => {
            axios.get(apiUrl)
            .then(response => {
              console.log("API response:", response.data);
              setjobData(response.data.em_register);
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }, []);
      
        if (!Array.isArray(jobData)) {
          return <p>Loading...</p>;
        }

  return(
    <div className="d-flex flex-wrap">
      {jobData.map((curJob) => {
          const {id, name, email, city, number, resume} = curJob;
          return(
            <div key={id}>
            <div className="card bg-primary" style={{width:"18rem", marginLeft:"250px", marginTop:"20px"}}>
              
                <img className="" style={{height:"40px", width:"40px", padding:"2px"}} src={user}/>
                    <div className="card-body">
                      Name: {name} <br/>
                      Email: {email} <br/>
                      City: {city} <br/>
                      Number: {number} <br/>
                      Resume: {resume} <br/>
                    </div>
              
            </div>
            </div>
          );
      })}
    </div>
    )
}
export default Talent