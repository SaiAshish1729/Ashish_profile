import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <section style={{ background: "black" }}>
                <div className="container">
                    <div className="row justify-content-between p-3 pb-5">
                        <div className="col-md-4">
                            <div className='mt-5'>
                                <h4 className=' mt-4 mb-2' style={{color:"#ff7200"}}>GET IN TOUCH</h4>
                                <p className='text-white'>Feel free to get in touch with me.I am always open to discussing new projects, creative ideas or opportuninties to be part of your vision.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <h1 className='text-center' style={{color:"#ff7200"}}><i class="bi bi-envelope"></i></h1>
                            <p className='text-white text-center'><a href="">shawashis500@gmail.com</a></p>
                        </div>
                        <div className="col-md-4 mt-5">
                            <h1 className='text-center' style={{color:"#ff7200"}}><i class="bi bi-telephone"></i></h1>
                            <p className='text-white text-center'>  Call me : <a href="">7003957953</a></p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-center' style={{color:"#ff7200"}}>Ashish Shaw Productions</p>
                </div>
            </section>

            <section>
                
            </section>
            
        </>
    )
}

export default Contact