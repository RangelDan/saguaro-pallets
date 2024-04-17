import React from 'react';
import styles from './FeatureSection.module.css';

const Card = ({ image, title, description }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.cardImage} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeatureSection = ({ features }) => (
  <div className={styles.container}>
    {features.map((feature, index) => (
      <Card key={index} {...feature} />
    ))}
  </div>
);

export default FeatureSection;
