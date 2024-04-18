/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './AboutComponent.module.css';

const AboutComponent = () => (
  <div className={styles.container}>
    <section className={styles.hero}>
      <h1 className={styles.h1}>About Us</h1>
      <p>
        We are a family-owned pallet company proudly serving Arizona for over two decades. 
        Our commitment to quality and customer satisfaction has established us as a trusted leader in the pallet industry. 
        We specialize in providing a comprehensive range of pallet solutions, including sales, purchases, repairs, 
        and logistics services tailored to meet the diverse needs of our clients. Over the years, we have built strong relationships 
        with local businesses and major corporations alike, ensuring that every client receives personalized attention and service. 
        Our dedication to sustainable practices helps us protect the environment while delivering cost-effective solutions to our customers.
      </p>
    </section>
    <div className={styles.heroImage}>
    </div>
    
    <section className={styles.mission}>
      <h2 className={styles.h2}>Our Mission</h2>
      <p>
      To provide sustainable and cost-effective pallet solutions to businesses across Arizona. 
      We aim to lead the industry in environmental stewardship by utilizing recycled materials and innovative processes 
      that reduce waste and conserve resources. Our mission extends beyond mere transactions; 
      we strive to build lasting partnerships with our clients, offering them reliability and quality in every product and service. 
      By focusing on the needs of our customers and the health of our planet, we endeavor to create a positive impact in our community 
      and set new standards for sustainability and efficiency in the pallet industry.
    </p>
    </section>
    
    <section className={styles.history}>
      <h2 className={styles.h2}>Our History</h2>
      <p>Founded in 1998, we have grown from a small local workshop to a leading provider in the state’s pallet industry. 
        Over the years, our commitment to excellence and innovation has driven our expansion, allowing us to increase our capacity 
        and capabilities significantly. Today, we operate a state-of-the-art facility equipped with advanced machinery that enhances 
        our production efficiency and product quality. Our journey has been marked by a deep dedication to our community and a continuous 
        effort to improve our services, adapting to the evolving needs of our customers while staying true to our roots. 
        Through hard work and perseverance, Saguaro Pallets has become synonymous with reliability and quality in Arizona's 
        bustling logistics and supply chain sectors.
      </p>
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
