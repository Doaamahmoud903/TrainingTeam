import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="text-white py-1 pb-4">
      <div className="footerContent container py-1">
        <div className="footerImg">
          <img src="../assets/images/seff_logo_transparent.png" alt="logo" width="200" height="200" />
        </div>
        <div className="footerDesc row ">
          <div className="footerDescLeft mr-auto col-9">
            <div>
              <h3>SOFTWARE ENGINEERING FOR FUTURE</h3>
            </div>
            <div className="mt-4 w-50 d-flex justify-content-between">
              <h6 className="text-uppercase">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/about" className="text-white text-decoration-none">About</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/tech" className="text-white text-decoration-none">TECH</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/business" className="text-white text-decoration-none">BUSINESS</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/security" className="text-white text-decoration-none">SECURITY</Link>
              </h6>
            </div>
            <div className="mt-1 w-75 d-flex justify-content-between">
              <h6 className="text-uppercase">
                <Link to="/medical" className="text-white text-decoration-none">MEDICAL</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/startups" className="text-white text-decoration-none">STARTUPS</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/apps" className="text-white text-decoration-none">APPS</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/courses" className="text-white text-decoration-none">COURSES</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/contactus" className="text-white text-decoration-none">CONTACT US</Link>
              </h6>
              <h6 className="text-uppercase">
                <Link to="/sports" className="text-white text-decoration-none">SPORTS</Link>
              </h6>
            </div>
          </div>

          <div className="footerDescRight col-3 mt-4 text-end ">

            <p className="m-0">
              sefffuture@gmail.com
              <i className="far fa-envelope-open" style={{fontSize:" 21px", color: "#bf9b30", marginLeft:" 28px",}}></i>
            </p>
            <p className="my-1">
              +20 109 8481 288
              <i className="fas fa-phone-volume"
                style={{transform: "rotate(310deg)",fontSize: "22px",color: "#bf9b30", marginLeft: "44px",}}></i>
            </p>
            <p className="m-0 text-center">+20 155 5177 645</p>
          </div>
        </div>

        <div className="copyRights border-top py-4  pb-5 my-3 ">
          <div className="float-start w-50">
            <p>@2023 EGYPT, ALL RIGHTS RESERVED</p>
          </div>
          <div className="float-end w-25 d-flex justify-content-between">
            <Link to="https://www.facebook.com/profile.php?id=100088343374799" target='_blank' className="text-white">
              <i className="fab fa-facebook" style={{fontSize:"30px"}}></i>
            </Link>
            <i className="fab fa-twitter" style={{fontSize:"30px"}}></i>
            <i className="fab fa-instagram" style={{fontSize:"30px"}}></i>
            <i className="fab fa-linkedin" style={{fontSize:"30px"}}></i>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer