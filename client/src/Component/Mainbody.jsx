import React from 'react'
import about1 from '../Images/about1.jpg'
import about2 from '../Images/about2.jpg'
import about3 from '../Images/about3.jpg'
import about4 from '../Images/about4.jpg'
import newsletter from '../Images/newsletter.png'
import { Button } from '@mui/material'
import { MdMailOutline } from "react-icons/md";

function Mainbody() {
  return (
    // <div>Mainbody</div>
    <>
     <div className="banner-section d-flex flex-wrap mt-4 mb-5 align-items-center w-100" >
        {[about1, about2, about3, about4].map((image, index) => (
          <div className="banner col-12 col-md-6 col-lg-3 mb-3 mb-lg-0" key={index} >
            <img src={image} alt={`Banner ${index + 1}`} className="w-100" style={{borderRadius: "5px"}}/>
          </div>
        ))}
      </div>


      <section className='newsletter mt-3 mb-3 d-flex align-items-center'>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-12 mb-3 mb-md-0">
        <p className='text-white mb-1' style={{fontSize: "18px", margin: "10px 0px"}}>$20 discount for your first order</p>
        <h3 className='text-white' style={{fontSize: "35px", fontWeight: "bold"}}>Join our newsletter and get...</h3>
        <p style={{color: "#fff", opacity: 0.5, fontSize: "15px"}}>Join our email subscription now to get updates on
          <br />promotions and coupons.</p>

        <form action="">
          <MdMailOutline />
          <input type="text" placeholder='Your Email Address' />
          <Button>Subscribe</Button>
        </form>
      </div>
      <div className="col-md-6 col-12">
        <img src={newsletter} alt="Newsletter" className="img-fluid"/>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Mainbody