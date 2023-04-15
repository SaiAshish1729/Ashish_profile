import React from 'react'
import './About.css'
import img from '../Components/images/About.png'
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <section style={{ background: "black", color: "whitesmoke" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            {/* <h1 className='text-center mb-5'>About me</h1> */}
                            <div className="row justify-content-evenly">
                                <div className="col-md-5">
                                    <img src={img} className='img-fluid' id='AboutImg' alt="" />
                                </div>
                                <div className="col-md-5 mt-5">
                                    <h1 className='about mb-4'>About me!</h1>
                                    <p className='about_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident, impedit necessitatibus tenetur consequuntur quae tempora non numquam soluta, dignissimos sapiente nemo ut fugit quidem perspiciatis commodi laudantium, blanditiis sint.</p>
                                    <div className='mb-5'>
                                        <Link to='/about'><button className='Contact_BTN'>Know more</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About