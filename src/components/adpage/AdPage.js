import React from 'react';
import Image from 'next/image';
import styles from './AdPage.module.css';
import FirstAd from '../firstAd/FirstAd';

const AdPage = () => {
    return (
        <div className={styles.wrapper}>
            <FirstAd />
            <div className={styles.imageContainer}>
                <Image
                    src="/type4-1.jpg" // Update this path to your image location
                    alt="Saguaro Pallets"
                    width={500}  // Set your desired width
                    height={300} // Set your desired height
                    layout="intrinsic" // This keeps the image at the specified dimensions
                    objectFit="cover" // Adjusts the size of the image to cover the frame without distortion
                />
            </div>
        </div>
    );
};

export default AdPage;
