import React,{ useEffect,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavbarM = () => {  
  

return (
    <div>
      <Navbar collapseOnSelect expand="lg" style = {{backgroundColor: "white"}}>
        <Container fluid>
          <img alt="" src="/logo2.png" width="100" height="110" className="d-inline-block align-top"/>
          <Navbar.Brand href="#home"> <b>Community Aid Network</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
             

                <Link to="/" style={{textDecoration:'none', color:'black', marginRight: '20px'}}><b> Home </b></Link>
                <Link to="/AddCausePage" style={{textDecoration:'none', color:'black', marginRight: '20px'}}><b> Add Cause </b></Link>
                <Link to="/AdminPanel" style={{textDecoration:'none', color:'black', marginRight: '20px'}}><b> Admin </b></Link>
                <Link to="/registration" style={{textDecoration:'none', color:'black', marginRight: '20px'}}><b> Register </b></Link>
                <Link to="/signin" style={{textDecoration:'none', color:'black', marginRight: '20px'}}><b> | Login</b></Link>
               
            
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarM;
