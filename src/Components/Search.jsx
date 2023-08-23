import React from "react";
import searchpic from "../Icons/searchpic.png";

const Search = () =>{
   return(
    <div className="container bg-body" style={{marginTop:"180px", width:"400px", height:"300px"}}>
         <input className="rounded border py-2 px-3" type="text" placeholder="Search"/>
         <button style={{border:"transparent"}}>
            <img className="border" style={{height:"40px", width:"30px", padding:"2px"}} src={searchpic}/>
         </button>

    </div>
   )
}
export default Search