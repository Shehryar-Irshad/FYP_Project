import React from "react";
import { useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import jobmain from "../Icons/jobmain.png";

const Jobdetail = () =>{
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
    return(
        <>
        <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><NavLink to="Home">Home</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to="Pages">Pages</NavLink></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
        {jobData.map((curJob) => {
        const { id, company_name, email, job_tittle, description, requirments, date } = curJob;
        return(
             <div key={id}>
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row gy-5 gx-4">
                            <div className="col-lg-8">
                                <div className="d-flex align-items-center mb-5">
                                    <img className="flex-shrink-0 img-fluid border rounded" src={jobmain} alt="" style={{width:'80px', height:'80px'}}/>
                                    <div className="text-start ps-4">
                                        <h3 className="mb-3">{job_tittle}</h3>
                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{company_name}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <h4 className="mb-3">Job description</h4>
                                    <p>{description}</p>
            
                                    <h4 className="mb-3">Qualifications</h4>
                                    <p>{requirments}</p>
                            
                                </div>
                                <div className="col-lg-4">
                                <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                    <h4 className="mb-4">Job Summery</h4>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>{email}</p>
                                </div>
                                <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Company Detail</h4>
                                    <p className="m-0">{company_name}</p>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
        );
    })}
    
    <div className="">
                            <h4 className="mb-4 mx-3">Apply For The Job</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-3 mx-2">
                                        <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12 col-sm-3">
                                        <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                                    </div>
                                    <div className="d-flex">
                                    <div className="col-12 col-sm-3 mx-2">
                                        <input type="text" name="city" className="form-control" placeholder="City" value={formData.city} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12 col-sm-3">
                                        <input type="file" name="file" className="form-control bg-white" onChange={handleInputChange}/>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-3 mx-2">
                                        <input className="form-control" name="number" rows="5" placeholder="Number" value={formData.number} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-25 " style={{marginLeft:"150px"}} type="submit">Apply Now</button>
                                    </div>
                                </div>
                                <h2>{apiResponse}</h2>
                            </form>
                        </div>
  </>
  )
}
export default Jobdetail