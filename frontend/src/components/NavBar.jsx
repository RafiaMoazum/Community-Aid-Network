import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useUserAuthContext } from '../context/userAuthContext';
import LogoutButton from './LogoutButton/LogoutButton';
import styles from './NavBar.module.css'; // Corrected import path

const NavbarM = () => {
  const { userDetails } = useUserAuthContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className={styles.navbar} fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          <img
            alt="Community Aid Network"
            src="/logo2.png"
            className={styles.logo}
          />
          Community Aid Network
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Link to="/" className={styles.navLink}><b>Home</b></Link>
            <Link to="/AddCausePage" className={styles.navLink}><b>Add Cause</b></Link>
            {userDetails && userDetails.role === 'admin' && (
              <Link to="/AdminPanel" className={styles.navLink}><b>Admin</b></Link>
            )}
            {userDetails && userDetails.isValid ? (
              <>
                <Link to="/userProfile" className={styles.navLink}>
                  {userDetails.name}
                </Link>
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
  );
};

export default NavbarM;
