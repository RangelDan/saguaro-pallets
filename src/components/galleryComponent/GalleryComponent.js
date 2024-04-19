'use client'

import React, { useState } from 'react';
import styles from './GalleryComponent.module.css';
import imageData from '../../data/galleryData'

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
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={styles.thumbnail}
                    onClick={() => openModal(image.src)}
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
