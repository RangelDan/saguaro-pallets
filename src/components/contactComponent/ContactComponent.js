import React from 'react';
import styles from './ContactComponent.module.css';

const ContactComponent = () => {

    return (
        <div className={styles.container}>
            <h1>Servicing all of metro Phoenix and more!</h1>
            <div className={styles.info}>
                <p>Email: Saguaropallets@gmail.com</p>
                <p>Phone: (480) 469-5678</p>
                <p>Address: El Mirage, AZ, 85335</p>
            </div>
        </div>
    );
};

export default ContactComponent;
