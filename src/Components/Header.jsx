import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../Images/img.jpg";
import img3 from "../Images/img3.jpg";
const Header = () =>{

    return(

        <div className="">
            <Carousel>
                <Carousel.Item className="d-flex">
                    <img
                    className="d-block" style={{height:"590px"}}
                    src={img}
                    alt="First slide"
                    />
                    <Carousel.Caption className="bg-">

                        <h1 className="text-primary" style={{marginTop:"-480px", marginLeft: "-550px"}}>Find the best start up jobs that fits you</h1>
                        <p className="text-black w-50" style={{marginLeft:"-100px", marginTop:"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.perferendis quidem error impedit fuga accusamus praesentium mollitia ducimus ad maxime! Ipsum, eveniet deserunt?</p>
                        <div className="" style={{marginTop:"70px", }}>
                            <button className="rounded bg-primary" style={{marginLeft:"-700px"}}>Search A Job</button>
                            <button className="rounded bg-primary" style={{marginLeft:"20px"}}>Find A Talent</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block " style={{height:'620px'}}
                    src={img3}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{marginTop:"-400px", marginLeft:"-120px", width:"400px"}}>Get yourself hired by a mutinational companies</h1>
                        <button className="rounded bg-gradient" style={{marginLeft:"-800px", marginTop:"50px", height:"40px"}}>Sign up now</button>
                         
                    </Carousel.Caption>
                </Carousel.Item>
            
            </Carousel>
        </div>
    
    )
}
export default Header