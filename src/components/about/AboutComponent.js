// pages/about.js
import React from 'react';
import styles from './AboutComponent.module.css';

const AboutComponent = () => (
  <div className={styles.container}>
    <div className={styles.heroImage}>
      <h1 className={styles.h1}>About Us</h1>
    </div>
    <section className={styles.hero}>
      <p>We are a family-owned pallet company proudly serving Arizona for over two decades.</p>
    </section>
    
    <section className={styles.mission}>
      <h2 className={styles.h2}>Our Mission</h2>
      <p>To provide sustainable and cost-effective pallet solutions to businesses across Arizona.</p>
    </section>
    
    <section className={styles.history}>
      <h2 className={styles.h2}>Our History</h2>
      <p>Founded in 1998, we have grown from a small local workshop to a leading provider in the state’s pallet industry.</p>
    </section>
    
    <section className={styles.testimonials}>
      <h2 className={styles.h2}>What Our Clients Say</h2>
      <div className={styles.testimonial}>
        <p>"Their commitment to quality and timely delivery has been pivotal for our logistics operations."</p>
        <p>- Local Manufacturing Client</p>
      </div>
      <div className={styles.testimonial}>
        <p>"Reliable service and responsive customer support. They truly understand our needs."</p>
        <p>- Food Distribution Partner</p>
      </div>
    </section>
  </div>
);

export default AboutComponent;
