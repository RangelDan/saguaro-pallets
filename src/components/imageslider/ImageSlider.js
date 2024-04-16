'use client'

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 960, // Change to 1 image at tablet size and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={image.src} alt={image.alt} width={300} height={200} />
          </div>
        ))}
      </Slider>
      <div className={styles.viewGallery}>
        <a href="/gallery">View Gallery</a>
      </div>
    </div>
  );
};

export default ImageSlider;
