// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'; // Import your styles as a module

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <nav className={styles.mainMenu}>
                <div className={styles.logoContainer}>
                    <NavLink to="/">
                        <img src="path-to-your-logo.png" alt="Community Aid Network" />
                    </NavLink>
                </div>
                <div className={styles.navItemsContainer}>
                    <NavLink to="/causes" activeClassName={styles.active}>Causes</NavLink>
                    <NavLink to="/events" activeClassName={styles.active}>Events</NavLink>
                    <NavLink to="/testimonials" activeClassName={styles.active}>Testimonials</NavLink>
                    <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
                    <NavLink to="/login" className={styles.loginLink}>Login</NavLink>
                    <NavLink to="/donate-now" className={styles.donateNowBtn}>Donate Now</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
