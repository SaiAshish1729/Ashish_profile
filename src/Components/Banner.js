import React from 'react'
import About from './About'
import './Banner.css'
import Contact from './Contact'
import Skill from './Skill'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <section id='backImage'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mt-5">
                            <h3 className='text-white mt-5'>I am Ashish</h3>
                            <h1 className='display-2 text-white'>Web Developer</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur pariatur veritatis beatae nobis perferendis, fuga maxime vel tempore id cum rem quia, quibusdam unde, voluptate repellat? Deserunt vero voluptatibus modi.</p>
                            <div className='mt-4'>
                            <Link to="/contact"><button className=' BannerBTN'>Contact me</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Skill />
            <Contact />

        </>
    )
}

export default Banner