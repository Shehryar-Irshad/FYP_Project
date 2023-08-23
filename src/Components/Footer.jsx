import React from "react";

const Footer = () => {
    return(
        <>
          <div className="container-fluid bg-dark text-white-50 footer pt-1 mt-5 wow fadeIn d-flex" data-wow-delay="0.1s">
            <div className="container py-2">
                <div className="row g-5">

                    
                    <div className="col-lg-3 col-md-6" style={{width:"350px"}}>
                        <h5 className="text-white mb-4">Contact</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Lahore, Pakistan</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+92 345768189</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    </div>
                    
                </div>
            </div>
            <div style={{paddingTop:"110px", paddingLeft:"350px"}}>
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-md-start mb-3 mb-md-0" style={{width:"250px"}}>
                            &copy; <a className="border-bottom" href="#">Job Entry</a>, All Right Reserved. 
							
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Footer