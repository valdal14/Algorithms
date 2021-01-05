import React from 'react';
import './Header.css';
import { Navbar, Nav, Image } from 'react-bootstrap';
import jsLogo from '../../images/jsLogo.png';

const Header = (props)=> {
    return(
        <Navbar bg="dark" className='NavBar' expand="lg" sticky="top" variant="pills">
        <Navbar.Brand>
            <Image src={ jsLogo } alt='JS' className='JSLogo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;