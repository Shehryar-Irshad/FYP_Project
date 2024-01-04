import React, { useState, useEffect } from "react";
import axios from "axios";
import  { NavLink } from "react-router-dom";

const Jobs = () => {
  const [jobData, setJobData] = useState([]);
  const [showJobDetails, setShowJobDetails] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    number: '',
    file: '',
  });
  const [apiResponse, setApiResponse] = useState(null);       
  // Update form data when input fields change
  const handleInputChange = (e) => {
    const { name, type, files } = e.target;
    
    if (type === 'file') {
        const file = files[0];
        
        setFormData({
            ...formData,
            [name]: file,
        });
    } else {
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }
};
// Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the API
      const response = await fetch(`http://127.0.0.1:8000/em_register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setApiResponse(data); // Store the API response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const apiUrl = `http://127.0.0.1:8000/ef_register/`;

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
  const handleApplyClick = (id) => {
    setShowJobDetails(id);
  };

  return (
    
    <div className="bg-primary bg-opacity-75" style={{marginBottom:'-48px', paddingBottom:'10px'}}>
     <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Jobs</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><NavLink to="Home">Home</NavLink></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Jobs</li>
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
                                        <span className="text-truncate me-3">Lahore, Pakistan</span>
                                        <span className="text-truncate me-3">Full Time</span>
                                        <span className="text-truncate me-0">25k - 45k</span>
                                </div>
                            </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div className="d-flex mb-3">

                                    <button onClick={()=> handleApplyClick(id)} className="btn btn-dark">
                                      Apply Now
                                    </button>
                                </div>
                            <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                        </div>
                    </div>
                </div>

                {showJobDetails === id && (
                <div class="container d-flex justify-content-center bg-dark bg-opacity-100 w-50"> 
                  <div className="p-2 " style={{position:"relative"}}>
                    <h3 className="text-white">{company_name}</h3>
                    <p className="text-white">Email: {email}</p>
                    <p className="text-white">Description: {description}</p>
                    <p className="text-white">Requirements: {requirments}</p>

                    
            <form onSubmit={handleSubmit} className="" style={{position:"relative"}}>
                <h4 className="mb-4 mx-3 text-white" >Apply For The Job</h4>
                <div className="row g-3">
                    <div className="col-12 col-sm-4 mx-2">
                        <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12 col-sm-5">
                        <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex">
                    <div className="col-12 col-sm-3 mx-2">
                        <input type="text" name="city" className="form-control" placeholder="City" value={formData.city} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12 col-sm-5">
                        <input type="file" name="file" className="form-control bg-white" onChange={handleInputChange}/>
                    </div>
                    </div>
                    <div className="col-12 col-sm-5 mx-2">
                        <input className="form-control" name="number" rows="5" placeholder="Number" value={formData.number} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-25 " style={{marginLeft:"150px"}} type="submit">Apply Now</button>
                    </div>
                </div>
                <h2>{apiResponse}</h2>
            </form>
                  </div>
                </div>
                 )}
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
