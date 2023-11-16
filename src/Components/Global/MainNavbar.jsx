import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Nav } from 'react-bootstrap';

const MainNavbar = () =>{
    return (
        <Navbar expand="lg"  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link className='text-decoration-none text-white' to="/">
              <img
                src="../assets/images/seff_logo_transparent.png"
                width="100"
                height="70"
                className="d-inline-block align-top me-4"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between ps-5 w-100 align-items-center ">
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal active text-uppercase" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal  text-uppercase" to="/about">
                ABOUT
              </Link>
              <NavDropdown className="fs-7 text-white fw-normal text-uppercase" title="TECH" id="basic-nav-dropdown">
                <NavDropdown.Item to="/tech/laptops">LAPTOPS</NavDropdown.Item>
                <NavDropdown.Item to="/tech/phones"> PHONES</NavDropdown.Item>
                <NavDropdown.Item to="/tech/tablets">TABLESTS</NavDropdown.Item>
              </NavDropdown>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal text-uppercase " to="/business">
                BUSINESS
              </Link>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal  text-uppercase" to="/security">
                SECURITY
              </Link>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal  text-uppercase" to="/sports">
                SPORTS
              </Link>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal  text-uppercase" to="/medical">
                MEDICAL
              </Link>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal  text-uppercase" to="/startups">
                STARTUPS
              </Link>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal  text-uppercase" to="/apps">
                APPS
              </Link>
              <Link className="text-decoration-none text-white px-1 fs-7 fw-normal  text-uppercase" to="/jobs">
                JOBS
              </Link>
              <Link type="button" class="btn btn-primary ms-5 fs-7 text-uppercase" to="contactus">
                CONTACT US
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
}
export default MainNavbar