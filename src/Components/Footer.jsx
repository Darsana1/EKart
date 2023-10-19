import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center bg-success text-dark mt-5'>
<div className='footer-div d-flex justify-content-evenly w-100 flex-wrap'>
    <div className="website" style={{width:'400px'}}>
      <h4></h4>
    <Link to={"/"} className='fs-4 mb-3' style={{textDecoration: "none", color: "white"}}>
      <i class="fa-solid fa-truck-fast"></i>{"   "}EKart
      <h6 className='fs-6 mb-3'>
          Designed and built with all the love in the world by the Luminar team with the help of our contributors. </h6>
    <h6>Code licensed MIT, docs CC BY 3.0.</h6>
   <p> Currently v5.0.2.</p>
      
      </Link>
    </div>
    <div className='links d-flex flex-column'>
        <h4 className='fs-4'>Links</h4>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}>Home</Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}>Cart</Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}>Wishlist</Link>
    </div>
    <div className='links d-flex flex-column'>
        <h4 className='fs-4'>Guides</h4>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}>React</Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}>React Bootstrap</Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}>Routing</Link>
    </div>
    <div className='contact'>
        <h4>Contact Us</h4>
        <div className='sub d-flex'>
            <input type='text' className='form-control' placeholder='Enter your email'/>
            <div className="btn btn-warning ms-3">
            <i class="fa-solid fa-arrow-right fa-beat"></i>
            </div>
        </div>
        <div className='icons fs-4 d-flex justify-content-evenly mt-3'>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}><i className='fa-brands fa-github'></i></Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}><i className='fa-solid fa-envelope'></i></Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}><i className='fa-brands fa-twitter'></i></Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}><i className='fa-brands fa-linkedin'></i></Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}><i className='fa-brands fa-instagram'></i></Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}><i className='fa-brands fa-facebook-f'></i></Link>
        <Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"} style={{textDecoration: "none", color: "white"}}><i className='fa-brands fa-tiktok'></i></Link>
    </div>
    </div>

</div>
<p>Copyright @ 2023 EKart Built with react</p>
    </div>
  )
}

export default Footer