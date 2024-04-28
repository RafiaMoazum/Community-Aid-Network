import React from 'react';
import styles from './style.module.css'; 
import backgroundImage from '../../assets/images/we-believe-map.png';
import heartIcon from '../../assets/images/we-use-icon.png';
import rightSideImage from '../../assets/images/blog-1-3.jpg'; // Make sure the path is correct
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroContent}>
        <div className={styles.heartIconWithText}> {/* Adjusted class name */}
          <img src={heartIcon} alt="Heart" className={styles.heartIcon} /> {/* Use img tag for the icon */}
        </div>
        <h1 className={styles.heroTitle}>
          We rise by lifting others.
        </h1>
        <p className={styles.heroSubtitle}>Join our cause, ignite hope.</p>
        <button className={styles.contactButton} onClick={() => navigate("/AllCauses")}>
          Discover More
          <div className={styles.iconButton}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
            </svg>
          </div>
        </button>
      </div>
      <img 
        src="heroSec2.png"
        alt="Decorative" 
        className={styles.rightSideImage} 
      />
    </section>
  );
};

export default HeroSection;
