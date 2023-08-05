import React from "react";


const Login = () =>{
    
    return(
      <>
        <div className="container bg-body" style={{marginTop:"180px", width:"400px", height:"300px"}}>
            
        <h2>Login</h2>
          <form action="" method="post" className="text-center" style={{paddingTop:"30px", paddingBottom:"10px"}}>
            <div class="row mb-3">
                <div class="col">
                <input type="text" class="form-control" placeholder="Username/Email" aria-label="Username"/>
                </div>        
                <div class="col-12 mt-3">
                <input type="password" class="form-control" placeholder="password" aria-label="password"/>
                </div>
                </div>
                <button>Login</button>
          </form>
         
      </div>
      </>
    )
}
export default Login