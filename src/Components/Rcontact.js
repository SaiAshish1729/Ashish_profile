import React from 'react'

const Rcontact = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            {/* <h2 className='text-center mt-3' style={{color:"#ff7200"}}>Contact me</h2> */}
            <div className='col-md-12 p-3 mt-4 text-center'>
                <img src="https://st4.depositphotos.com/2673929/30895/i/600/depositphotos_308956512-stock-photo-man-with-tablet-world-map.jpg" style={{width:"100%", height:"500px"}} alt="" />
            </div>
        </div>
    </div>
      <div className='container'>
        <div className='row mt-4 p-3'>
            <div className='col-md-4 text-center p-3'>
                <div className='p-2 border'>
                    <h1><i class="bi bi-telephone-inbound-fill" style={{color:"#ff7200"}}></i></h1>
                    <h3 style={{color:"#ff7200"}}>Phone</h3>
                    <p>Call: +91 7003957953</p>
                </div>
            </div>
            
            <div className='col-md-4 text-center p-3'>
                <div className='p-2 border'>
                    <h1><i class="bi bi-envelope-at-fill" style={{color:"#ff7200"}}></i></h1>
                    <h3 style={{color:"#ff7200"}}>Email</h3>
                    <p>shawashish500@gmail.com</p>
                </div>
            </div>

            <div className='col-md-4 text-center p-3'>
                <div className='p-2 border'>
                    <h1><i class="bi bi-geo-alt-fill" style={{color:"#ff7200"}}></i></h1>
                    <h3 style={{color:"#ff7200"}}>Location</h3>
                    <p>Kolkata, India</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Rcontact
