import React, { useState, useEffect } from "react";
import axios from "axios";
import  { NavLink } from "react-router-dom";

const JobList = () => {
  const [jobData, setJobData] = useState([]);
  const apiUrl = `http://127.0.0.1:8000/em_register/`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API response:", response.data); // Log the response data
        setJobData(response.data.em_register);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setJobData([]); // Set jobData to an empty array in case of an error
      });
  }, []);

  // Check if jobData is an array before mapping over it
  if (!Array.isArray(jobData)) {
    return <p>Loading...</p>;
  }

  return (
    
    <>
     <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Job List</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><NavLink to="Home">Home</NavLink></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Job List</li>
                    </ol>
                </nav>
            </div>
        </div>
      {jobData.map((curJob) => {
        const { id, company_name, email, job_tittle, description, requirments, date } = curJob;
        return (
            
          <div key={id}>
            <div className="job-item p-4 mb-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" />
                           <div className="text-start ps-4">
                                        <h5 className="mb-3">{job_tittle}</h5>
                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Lahore, Pakistan</span>
                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>25k - 45k</span>
                                </div>
                            </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div className="d-flex mb-3">
                                    <a className="btn btn-light btn-square me-3" ><i className="far fa-heart text-primary"></i></a>
                                    <NavLink to={`/jobdetail/${id}`} className="btn btn-primary">
                                      Apply Now
                                    </NavLink>
                                </div>
                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
          </div>
        );
      })}
    </>
  );
};

export default JobList;
