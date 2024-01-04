import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  // State to hold user data
  const [user, setUser] = useState(null);

  // Use the useLocation hook to access the location object
  const location = useLocation();

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      // Use the stored data directly (no need to parse)
      setUser(storedUser);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Access the passed username from the location state
  const usernameFromLogin = location.state ? location.state.username : null;

  return (
    <div className="d-flex justify-content-center p-lg-5">
      {user ? (
        <div >
          <h2>Welcome, {usernameFromLogin}!</h2><br />
          <h4>You're successfully logged in now</h4><br />
          
          <p>If you're a <b>Job Seeker</b>, you can visit following pages </p>
          <NavLink to='/Jobs' className="btn btn-primary w-25 mx-2" >Jobs</NavLink><br /><br />

          <p>If you're a <b>Recruiter</b>, you can visit following pages </p>
          <div className="d-flex">
          <NavLink to='/Jobpost' className="btn btn-primary mx-2" >Post your Job</NavLink><br />
          <NavLink to='/Talent' className="btn btn-primary" >Find your required profiles</NavLink>
          </div>
        </div>
      ) : (
        <p>User data not found.</p>
      )}
    </div>
  );
};
export default UserProfile;