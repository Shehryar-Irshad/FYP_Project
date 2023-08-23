import React, { useState } from "react";
import axios from "axios";

const Jobpost = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    jobTitle: "",
    description: "",
    requirements: "",
    applyDate: "",
  });

  const [post, setPost] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target; // Change 'key' to 'name'
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8000/em_register/";

    axios.post(apiUrl, formData)
      .then((response) => {
        console.log('Form submitted!', response.data);
        setPost('Form submitted!');
      })
      .catch((error) => {
        console.error('Form not submitted:', error);
        setPost('Form not submitted. Please try again.');
      });
  };

  return (
    <div className="container-fluid border border-info w-50 h-50 bg-info rounded" style={{ marginLeft: "300px", marginTop: "100px", borderRadius: "200%" }}>
      <h1 className="text-center py-2">POST A JOB</h1>

      <form className="text-center" style={{ paddingTop: "20px", paddingBottom: "10px" }} onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input type="text" className="form-control" name="companyName" placeholder="Company name" aria-label="Company name" value={formData.companyName} onChange={handleChange} />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="email" placeholder="Email" aria-label="Email" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className="row mb-3"> {/* Added row here */}
          <div className="col-12 mb-3">
            <input type="text" className="form-control" name="jobTitle" id="inputAddress" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} />
          </div>
        </div>
        <div className="col-12 mb-3">
          <textarea className="form-control" name="description" id="inputAddress2" placeholder="Description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="col-12 mb-3">
          <textarea className="form-control" name="requirements" id="inputAddress2" placeholder="Requirements" value={formData.requirements} onChange={handleChange} />
        </div>
        <div className="col-12 mb-3">
          <input type="text" className="form-control" name="applyDate" id="inputAddress2" placeholder="DD/MM/YYYY (Last Date for Apply)" value={formData.applyDate} onChange={handleChange} />
        </div>
        <button className="rounded bg-transparent" type="submit">Submit</button>
      </form>
      <div>
        <h1>{post}</h1>
      </div>
    </div>
  )
}

export default Jobpost;