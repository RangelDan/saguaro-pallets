import React from 'react';
import styles from './FirstAd.module.css';

const FirstAd = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>SAGUARO PALLETS</h1>
            </div>
            <div className={styles.content}>
                <p className={styles.subhead}><strong>Need pallets for your business?</strong></p>
                <p className={styles.subhead}><strong>Message us now and get the best prices in town!</strong></p>
                <p className={styles.subhead} style={{fontWeight: '1000'}}>FREE DELIVERY!</p>
                <ul style={{fontSize: '20px', listStyle: 'none', padding: '0'}}>
                    <li>#1 Pallets available</li>
                    <li>#2 Pallets available</li>
                    <li>Custom sizes available</li>
                </ul>
                <button 
                    style={{fontSize: '18px', padding: '10px 20px'}} 
                    // onClick={() => window.location.href = 'tel:+14804695678'}
                >
                    Text Now
                </button>
            </div>
        </div>
    );
};

export default FirstAd;
