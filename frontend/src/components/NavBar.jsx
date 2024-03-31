import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Remove BrowserRouter as Router, not used here
import { useUserAuthContext } from '../context/userAuthContext';
import LogoutButton from './LogoutButton/LogoutButton';
import styles from './NavBar.module.css' ;// Import the CSS module

const NavbarM = () => {
  const { userDetails } = useUserAuthContext();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <Container fluid>
          <img alt="" src="/logo2.png" className={`d-inline-block align-top ${styles.logo}`}/>
          <Navbar.Brand href="#home" className={styles.navbarBrand}>Community Aid Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Link to="/" className={styles.navLink}><b>Home</b></Link>
              <Link to="/AddCausePage" className={styles.navLink}><b>Add Cause</b></Link>
              <Link to="/AdminPanel" className={styles.navLink}><b>Admin</b></Link>
              {userDetails && userDetails.isValid ? (
                <>
                  <div className={styles.userName}>{userDetails.name}</div>
                  <LogoutButton />
                </>
              ) : (
                <>
                  <Link to="/registration" className={styles.navLink}>Register</Link>
                  <Link to="/signin" className={styles.navLink}>| Login</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarM;
