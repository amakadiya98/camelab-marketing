"use client";
import headerStyles from "../styles/header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";

function Header() {
  return (
    <>
      <Navbar expand="lg" className={`${headerStyles['header']}`}>
        <Container>
          <Navbar.Brand href="/">
            <Image
             src={require('../../assets/images/header/nav-logo.svg').default}
             width={170}
             height={70}
              alt="camelab-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${headerStyles['navbar-toggler']}`} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${headerStyles['leftside-links']} me-auto align-items-center`}>
              <Nav.Link className={`${headerStyles['header-links']} ${headerStyles['active-page']} underline`} href="/about">About Us</Nav.Link>
              <Nav.Link className={`${headerStyles['header-links']} underline`} href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className={`${headerStyles['rightside-links']} ms-auto align-items-center`} >
              <Nav.Link className={`${headerStyles['header-links']} underline`} href="/creator">Become a creator</Nav.Link>
              <Nav.Link className={`${headerStyles['header-links']}`} href="#link"> <button className="primary-button" variant="primary">Login</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
