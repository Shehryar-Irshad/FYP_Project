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

   const [jobData, setjobData] = useState('');
   const apiUrl = `https://jsonplaceholder.typicode.com/users`; // Replace with your API URL

   useEffect(() => {
       axios.get(apiUrl)
       .then(response => {
           setjobData(response.data);
    
       })
       .catch(error => {
           console.error('Error fetching data:', error);
       });
   }, []);
 
   if (!jobData) {
     return <p>Loading...</p>;
   }
   const handleClick = () =>{
      if(fielddata.inputValue === ".net"){
                  
      }
    
   }

   return(
    <div className="container bg-body" style={{marginTop:"180px", width:"400px", height:"300px"}}>
         <input className="rounded border py-2 px-3" name="inputValue" type="text" placeholder="Search" value={fielddata.inputValue} onChange={handleInputChange}/>
         <button style={{border:"transparent"}} onClick={handleClick}>
            <img className="border" style={{height:"40px", width:"30px", padding:"2px"}} src={searchpic}/>
         </button>
        <div>
           
        </div>
    </div>
   )
}
export default Search