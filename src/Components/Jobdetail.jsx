import React from "react";
import { useState} from "react";

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
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;
    
        setFormData({
          ...formData,
          [name]: inputValue,
        });
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
      const fetching_Data = () =>{
          
      }
   
    return(
        <>
        <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gy-5 gx-4">
                    <div className="col-lg-8">
                        <div className="d-flex align-items-center mb-5">
                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width:'80px', height:'80px'}}/>
                            <div className="text-start ps-4">
                                <h3 className="mb-3">Marketing Manager</h3>
                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h4 className="mb-3">Job description</h4>
                            <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.</p>
                            <h4 className="mb-3">Responsibility</h4>
                            <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                            </ul>
                            <h4 className="mb-3">Qualifications</h4>
                            <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                            </ul>
                        </div>
        
                        <div className="">
                            <h4 className="mb-4">Apply For The Job</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" name="city" className="form-control" placeholder="City" value={formData.city} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="file" name="file" className="form-control bg-white" onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12">
                                        <input className="form-control" name="number" rows="5" placeholder="Number" value={formData.number} onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100" type="submit">Apply Now</button>
                                    </div>
                                </div>
                                <h2>{apiResponse}</h2>
                            </form>
                        </div>
                    </div>
         
                     <div className="col-lg-4">
                         <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                             <h4 className="mb-4">Job Summery</h4>
                             <p><i className="fa fa-angle-right text-primary me-2"></i>Published On: 01 Jan, 2045</p>
                             <p><i className="fa fa-angle-right text-primary me-2"></i>Vacancy: 123 Position</p>
                             <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p>
                             <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: $123 - $456</p>
                             <p><i className="fa fa-angle-right text-primary me-2"></i>Location: New York, USA</p>
                             <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: 01 Jan, 2045</p>
                         </div>
                         <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                           <h4 className="mb-4">Company Detail</h4>
                             <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
                         </div>
                     </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Jobdetail