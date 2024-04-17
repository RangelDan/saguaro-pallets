import React from 'react';
import styles from './ContactComponent.module.css';

const ContactComponent = () => {

    return (
        <div className={styles.container}>
            <h1>Servicing all of metro Phoenix and more!</h1>
            <div className={styles.info}>
                <p>Email: info@yourcompany.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 1234 Street Rd, Your City, State, 12345</p>
            </div>
        </div>
    );
};

export default ContactComponent;
