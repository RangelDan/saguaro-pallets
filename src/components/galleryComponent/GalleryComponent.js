'use client'

import React, { useState } from 'react';
import styles from './GalleryComponent.module.css';
import imageData from '../../data/galleryData'
import Image from 'next/image';

const GalleryComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };

    return (
        <div className={styles.container}>
            {imageData.map((image, index) => (
                
                <Image
                    className={styles.thumbnail}
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openModal(image.src)}
                    
                    width={400}
                    height={400}
                    objectFit="cover"
                />
            ))}

            {selectedImg && (
                <div className={styles.modal} onClick={closeModal}>
                    <img src={selectedImg} alt="Enlarged pic" className={styles.fullsizeImage} />
                </div>
            )}
        </div>
    );
};

export default GalleryComponent;
