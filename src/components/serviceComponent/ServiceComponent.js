'use client'

import React from 'react';
import styles from './ServiceComponent.module.css';

const ServiceComponent = () => (
  <div className={styles.container}>
    <h1 className={styles.h1}>Our Services</h1>
    
    <section className={styles.service} id="wesupply">
      <div className={styles.content}>
        <h2 className={styles.h2}>We Sell Pallets</h2>
        <p>We offer a wide range of sizes including 48x40, 48x48, and custom sizes to meet your needs.</p>
      </div>
      <img src="/service1.jpg" alt="Pallets for Sale" className={styles.serviceImage}/>
    </section>
    
    <section className={styles.service} id='webuy'>
      <div className={styles.content}>
        <h2 className={styles.h2}>We Buy Pallets</h2>
        <p>Looking to sell your used pallets? We buy them back at competitive prices.</p>
      </div>
      <img src="/top2.jpg" alt="Buying Pallets" className={styles.serviceImage}/>
    </section>
    
    <section className={styles.service} id="custom">
      <div className={styles.content}>
        <h2 className={styles.h2}>Pallet Repair</h2>
        <p>Our pallet repair services help you save money and extend the lifecycle of your pallets.</p>
      </div>
      <img src="/serv3.jpg" alt="Pallet Repair" className={styles.serviceImage}/>
    </section>
    
    <section className={styles.service}>
      <div className={styles.content}>
        <h2 className={styles.h2}>Logistics Services</h2>
        <p>We offer weekly pallet and cardboard bale pickup at no cost, helping you keep your operations smooth and efficient.</p>
      </div>
      <img src="/serv4.jpg" alt="Logistics Services" className={styles.serviceImage}/>
    </section>

    <div className={styles.callNow}>
      <button onClick={() => window.location.href = 'tel:+1234567890'}>
        Call Now
      </button>
    </div>
  </div>
);

export default ServiceComponent;
