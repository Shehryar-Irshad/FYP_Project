import React, { useState } from "react";

const Jobpost = () =>{
     
     const [Name, setName] = useState('');
     const [Email, setEmail] = useState('');

     const handlechange = (event) =>{
         setName(event.target.value);
         
     };
     const handleEmail = (event) =>{
        setEmail(event.target.value);
     }

    return(
       <div className="container-fluid border border-info w-50 h-50 bg-info rounded" style={{marginLeft:"300px", marginTop:"100px", borderRadius:"200%"}}>
         <h1 className="text-center py-2">POST A JOB</h1>
          <form action="" className="text-center" style={{paddingTop:"20px", paddingBottom:"10px"}}>
          <div class="row mb-3">
            <div class="col">
               <input type="text" class="form-control" placeholder="Company name" aria-label="Company name"/>
            </div>
            <div class="col">
               <input type="text" class="form-control" placeholder="Email" aria-label="Email"/>
            </div>
            </div>
            <div class="col-12 mb-3">
               <input type="text" class="form-control" id="inputAddress" placeholder="Job Title"/>
            </div>
            <div class="col-12 mb-3">
               <textarea type="text" class="form-control" id="inputAddress2" placeholder="Description"/>
            </div>
            <div class="col-12 mb-3">
               <textarea type="text" class="form-control" id="inputAddress2" placeholder="Requirements"/>
            </div>
            <div class="col-12 mb-3">
               <input type="text" class="form-control" id="inputAddress2" placeholder="DD/MM/YYYY (Last Date for Apply)"/>
            </div>
            <button className="rounded bg-transparent">Submit</button>
          </form>
       </div>        
    )

}
export default Jobpost