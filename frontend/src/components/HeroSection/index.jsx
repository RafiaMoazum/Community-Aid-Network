import React from 'react';
import styles from './style.module.css'; 
import backgroundImage from '../../assets/images/we-believe-map.png';
import heartIcon from '../../assets/images/we-use-icon.png';
import rightSideImage from '../../assets/images/blog-1-3.jpg';

const HeroSection = () => {
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroContent}>
        <div className={styles.heartIcon} style={{ backgroundImage: `url(${heartIcon})` }} />
        <h1 className={styles.heroTitle}>
          Lend the helping hand get involved
        </h1>
        <p className={styles.heroSubtitle}>Help the Poor in Need!</p>
        <button className={styles.heroBtn}>
          Discover More
        </button>
      </div>
      <img 
        src={rightSideImage} 
        alt="Decorative" 
        className={styles.rightSideImage} 
      />
    </section>
  );
};

export default HeroSection;
