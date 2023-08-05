import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../Images/img.jpg";
import img3 from "../Images/img3.jpg";
import search from "../Icons/search.png";
import talent from "../Icons/talent.png";
import login from "../Icons/login.png";
import signup from "../Icons/signup.png";


const Header = () => {

    return (

        <div className="">
            <Carousel>
                <Carousel.Item className="d-flex">
                    <img
                        className="d-block" style={{ height: "590px" }}
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption className="">
                      
                      <div className="px-auto" style={{width: "500px", marginTop:"-400px", marginLeft:"-50px"}}>
                        <div className="d-flex">
                            <button class="btn btn-primary m-2" style={{width:"150px"}}>
                                Search a Job <img style={{height:"20px", width:"15px"}} src={search}/>
                            </button><br/>
                            <button class="btn btn-primary m-2" style={{width:"150px"}}>
                                Find a Talent <img style={{height:"20px", width:"20px"}} src={talent} />
                            </button>
                        </div>
                        <div className="d-flex">
                            <button class="btn btn-primary m-2" style={{width:"150px"}}>
                                Login <img style={{height:"20px", width:"20px"}} src={login} />
                            </button>
                            <button class="btn btn-primary m-2" style={{width:"150px"}}>
                                Signup <img style={{height:"20px", width:"20px"}} src={signup} />
                            </button>
                        </div>
                      </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block " style={{ height: '620px' }}
                        src={img3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{ marginTop: "-400px", marginLeft: "-120px", width: "400px" }}>Get yourself hired by mutinational companies</h1>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
export default Header