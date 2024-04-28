/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import styles from './ServiceComponent.module.css';
import Image from 'next/image';

const ServiceComponent = () => (
  <div className={styles.container}>
    <h1 className={styles.h1}>Our Services</h1>
    
    <section className={styles.service} id="wesupply">
      <div className={styles.content}>
        <h2 className={styles.h2}>We Sell Pallets</h2>
        <p>
          We offer a wide range of sizes including 48x40, 48x48, and custom sizes to meet your needs. 
          Our pallets are constructed from high-quality materials, ensuring durability and reliability 
          for all types of shipping and storage requirements. Whether you're looking for standard options 
          or unique specifications tailored to specific goods, we provide exceptional solutions. 
          Additionally, our team is committed to sustainable practices, using recycled materials whenever possible 
          to minimize environmental impact.        
        </p>
      </div>
      {/* <img src="/service1.jpg" alt="Pallets for Sale" className={styles.serviceImage}/> */}
      <Image
          src='/service1.jpg'
          alt="Pallets for Sale"
          width={400}
          height={400}
          className={styles.serviceImage}
          objectFit="cover"
        />
    </section>
    
    <section className={styles.service} id='webuy'>
      <div className={styles.content}>
        <h2 className={styles.h2}>We Buy Pallets</h2>
        <p>
          Looking to sell your used pallets? We buy them back at competitive prices. 
          Our streamlined acquisition process ensures that selling your old pallets is hassle-free and financially rewarding. 
          We accept a variety of pallet conditions and sizes, aiming to recycle and refurbish what we can to promote sustainability. 
          Whether you have a small quantity or a large stock, our team is ready to provide quick evaluations and prompt payments.        
        </p>
      </div>
      {/* <img src="/top2.jpg" alt="Buying Pallets" className={styles.serviceImage}/> */}
      <Image
          src="/top2.jpg"
          alt="Buying Pallets"
          width={400}
          height={400}
          className={styles.serviceImage}
          objectFit="cover"
        />
    </section>
    
    <section className={styles.service} id="custom">
      <div className={styles.content}>
        <h2 className={styles.h2}>Pallet Repair</h2>
        <p>
          Our pallet repair services help you save money and extend the lifecycle of your pallets. 
          With a dedicated team of specialists, we efficiently repair damaged pallets to meet industry standards, 
          ensuring they are as good as new. We use quality materials and proven techniques to strengthen your pallets, 
          making them more durable for repeated use. This not only reduces waste but also cuts down on your procurement costs, 
          offering an eco-friendly and cost-effective solution to your logistics needs.
        </p>
      </div>
      {/* <img src="/serv3.jpg" alt="Pallet Repair" className={styles.serviceImage}/> */}
      <Image
          src="/serv3.jpg"
          alt="Pallet Repair"
          width={400}
          height={400}
          className={styles.serviceImage}
          objectFit="cover"
        />
    </section>
    
    <section className={styles.service}>
      <div className={styles.content}>
        <h2 className={styles.h2}>Logistics Services</h2>
        <p>
          We offer weekly pallet and cardboard bale pickup at no cost, helping you keep your operations smooth and efficient. 
          This service is designed to alleviate the hassle of waste management and recycling, 
          allowing you to focus on the core aspects of your business. We work with a flexible schedule to accommodate your 
          unique operational needs, ensuring that pickups are timely and non-disruptive. 
          Additionally, our commitment to sustainability means that all collected materials are handled in an environmentally 
          responsible manner, contributing to your company's green initiatives.
        </p>
      </div>
      {/* <img src="/serv4.jpg" alt="Logistics Services" className={styles.serviceImage}/> */}
      <Image
          src="/serv4.jpg"
          alt="Logistics Services"
          width={400}
          height={400}
          className={styles.serviceImage}
          objectFit="cover"
        />
    </section>

    <div className={styles.callNow}>
      <button onClick={() => window.location.href = 'tel:+14804695678'}>
        Call Now
      </button>
    </div>
  </div>
);

export default ServiceComponent;
