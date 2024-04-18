import React from 'react';
import styles from './FeatureSection.module.css';

const Card = ({ image, title, description, id }) => {
  // Correct usage of dynamic link with template literals
  const targetdest = `/services#${id}`;
  return (
    <div className={styles.card}>
      {/* Correct usage of the dynamic destination in the href attribute */}
        <img src={image} alt={title} className={styles.cardImage} />
        <a href={targetdest} style={{textDecoration: 'none'}}>
          <h3 style={{color: '#0066A2', fontSize: '24px', marginBottom: '0'}}>{title}</h3>
        </a>
        <p>{description}</p>
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
