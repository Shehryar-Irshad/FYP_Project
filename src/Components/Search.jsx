import React from "react";
import searchpic from "../Icons/searchpic.png";
import {useState, useEffect} from "react";
import axios from "axios";

const Search = () =>{

   const [fielddata, setfielddata] = useState({
       inputValue: ''
   });

   const handleInputChange = (e) =>{
      const {name, value} = e.target;
      setfielddata({
         [name]: value,
      });   
   }
   
   const [resJob, setresJob] = useState('');
   const [jobData, setjobData] = useState('');
   const apiUrl = `http://127.0.0.1:8000/em_register/`; // Replace with your API URL

   useEffect(() => {
       axios.get(apiUrl)
       .then(response => {
         console.log("API response:", response.data); // Log the response data
         setjobData(response.data.em_register);
       })
       .catch(error => {
           console.error('Error fetching data:', error);
       });
   }, []);
 
   const handleClick = () =>{
      
         // Check if jobData is an array of objects
         if (Array.isArray(jobData)) {
           // Perform filtering based on job_tittle field
           const filteredJobs = jobData.filter(job => job.job_tittle && job.job_tittle.includes(fielddata.inputValue));
           // Do something with filteredJobs
           console.log(filteredJobs);
           setresJob(filteredJobs);
         }
   }

   return(
      <div style={{position:"relative", backgroundColor:"#B0E0E6", height:"500px", marginBottom:"-47px"}}>
         <div className="container d-flex justify-content-center" style={{paddingTop:"100px"}}>
            
               <input className="rounded border py-2 px-3" name="inputValue" type="text" placeholder="Search" value={fielddata.inputValue} onChange={handleInputChange}/>
               <button style={{border:"transparent"}} onClick={handleClick}>
                  <img className="border" style={{height:"40px", width:"30px", padding:"2px"}} src={searchpic}/>
               </button>
         </div>
         <div className="my-5 w-25 py-5" style={{border:'2px solid black', marginLeft:'500px'}}>
               {Array.isArray(resJob) && resJob.map(job => (
                  <div key={job.id} className="px-2">
                     <h3>Title: {job.job_tittle}</h3>
                     <p>Description: {job.description}</p>
                     <p>Comany Name: {job.company_name}</p>
                  </div>
               ))}
               </div>
    </div>
   )
} 
export default Search