import React from 'react';
import styles from './style.module.css'; 
import backgroundImage from '../../assets/images/we-believe-map.png';
import heartIcon from '../../assets/images/we-use-icon.png';
import rightSideImage from '../../assets/images/blog-1-3.jpg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroContent}>
        <div className={styles.heartIcon} style={{ backgroundImage: `url(${heartIcon})` }} />
        <h1 className={styles.heroTitle}>
        We rise by lifting others.</h1>
        <p className={styles.heroSubtitle}>Join our cause, ignite hope.</p>
        <button className={styles.heroBtn}  onClick={() => navigate("/AllCauses")}>
          Discover More
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
