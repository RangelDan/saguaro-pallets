import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  
  return(
  <div className={styles.heroContainer}>
    <div className={styles.backgroundImage}>
      <Image
        src="/loaded.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority 
      />
    </div>
    
    <div className={styles.contentLayer}>
      <h1 className={styles.title}>Saguaro Pallets</h1>
      <p className={styles.subtitle}>High Quality • Sustainable • Affordable</p>
      <a className={styles.button} href='/contact'>
        Learn More
      </a>
    </div>
  </div>)
};

export default HeroSection;
