import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from 'react-bootstrap';

const UpperNav =() =>{

        return (
            <Navbar expand="lg" bg="dark">
            <Container>
              <Navbar.Collapse className="flex-lg-row-reverse" id="navbarNav">
                <Nav className="navbar-nav">
                    <Link className="text-decoration-none text-white px-4 text-uppercase"to="#">ADMIN PANEL</Link>
                    <Link className="text-decoration-none text-white px-4 text-uppercase" to="#">Profile</Link>
                    <Link className="text-decoration-none text-white px-4 text-uppercase" to="#">Logout</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )

}
export default UpperNav;