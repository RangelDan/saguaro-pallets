import React from 'react';
import styles from './FeatureSection.module.css';
import Image from 'next/image';

const Card = ({ image, title, description, id }) => {
  // Correct usage of dynamic link with template literals
  const targetdest = `/services#${id}`;
  return (
    <div className={styles.card}>
        <Image
          src={image}
          className={styles.cardImage}          
          alt={title}
          width={400}
          height={400}
          objectFit="cover"
        />
        <a href={targetdest} style={{textDecoration: 'none'}}>
          <h3 style={{color: '#0066A2', fontSize: '2rem', marginBottom: '0'}}>{title}</h3>
        </a>
        <p style={{fontSize: '20px'}}>{description}</p>
    </div>
  );
};

const FeatureSection = ({ features }) => (
  <div className={styles.container}>
    {features.map((feature, index) => (
      <Card key={index} {...feature} />
    ))}
  </div>
);

export default FeatureSection;
