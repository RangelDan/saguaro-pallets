import React from 'react';
import styles from './FeatureSection.module.css';
import Image from 'next/image';

const Card = ({ image, title, description, id }) => {
  // Correct usage of dynamic link with template literals
  const targetdest = `/services#${id}`;
  return (
    <div className={styles.card}>
        <Image
          src={image}
          className={styles.cardImage}          
          alt={title}
          width={400}
          height={400}
          objectFit="cover"
        />
        <a href={targetdest} style={{textDecoration: 'none'}}>
          <h3 style={{color: '#0066A2', fontSize: '2rem', marginBottom: '0'}}>{title}</h3>
        </a>
        <p style={{fontSize: '20px'}}>{description}</p>
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
// 'use client'

// import React, { useRef, useEffect } from 'react';
// import Image from 'next/image';
// import styles from './FeatureSection.module.css';

// const Card = ({ image, title, description, id, innerRef }) => {
//   const targetdest = `/services#${id}`;
//   return (
//     <div ref={innerRef} className={styles.card}>
//       <Image
//         src={image}
//         className={styles.cardImage}
//         alt={title}
//         width={400}
//         height={400}
//         objectFit="cover"
//       />
//       <a href={targetdest} style={{ textDecoration: 'none' }}>
//         <h3 style={{ color: '#0066A2', fontSize: '2rem', marginBottom: '0' }}>{title}</h3>
//       </a>
//       <p style={{ fontSize: '20px' }}>{description}</p>
//     </div>
//   );
// };

// const FeatureSection = ({ features }) => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.visible);
//           } else {
//             entry.target.classList.remove(styles.visible);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     cardRefs.current.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, [features]);

//   return (
//     <div className={styles.container}>
//       {features.map((feature, index) => (
//         <Card
//           key={index}
//           {...feature}
//           innerRef={el => cardRefs.current[index] = el}
//         />
//       ))}
//     </div>
//   );
// };

// export default FeatureSection;
