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
                    alt="Saguaro Pallets - Free Delivery"
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
// 'use client'

// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import styles from './AdPage.module.css';
// import FirstAd from '../firstAd/FirstAd';

// const AdPage = () => {
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add(styles.visible);
//                     } else {
//                         entry.target.classList.remove(styles.visible);
//                     }
//                 });
//             },
//             {
//                 threshold: 0.5 // Adjust this value based on when you want the animation to start
//             }
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current);
//             }
//         };
//     }, []);

//     return (
//         <div ref={ref} className={styles.wrapper}>
//             <FirstAd />
//             <div className={styles.imageContainer}>
//                 <Image
//                     src="/type4-1.jpg"
//                     alt="Saguaro Pallets - Free Delivery"
//                     width={500}
//                     height={300}
//                     layout="intrinsic"
//                     objectFit="cover"
//                 />
//             </div>
//         </div>
//     );
// };

// export default AdPage;
