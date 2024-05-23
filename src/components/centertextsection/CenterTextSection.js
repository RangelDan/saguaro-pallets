// components/CenterTextSection.js
const CenterTextSection = () => (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: '50px 20px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <h2 style={{fontSize: '2.5rem'}}>About Our Products</h2>
      <h3 style={{fontSize: '1.5rem'}}>Durable & Reliable</h3>
      <p style={{fontSize: '20px'}}>Our pallets are designed to withstand the rigors of heavy use, ensuring longevity and reliability.</p>
      <hr />
      <p style={{fontSize: '20px'}}>These products are made from high-quality, sustainable materials, meeting both environmental and performance standards. Each unit undergoes rigorous testing to ensure durability and safety, offering exceptional value across various industries.
      </p>
    </div>
  );
  
  export default CenterTextSection;
  
// 'use client'

// import React, { useEffect, useRef } from 'react';

// const CenterTextSection = () => {
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.style.opacity = 1;
//                         entry.target.style.transform = 'translateY(0)';
//                     } else {
//                         entry.target.style.opacity = 0;
//                         entry.target.style.transform = 'translateY(50px)';
//                     }
//                 });
//             },
//             {
//                 threshold: 0.5 // Adjust as necessary for when you want the animation to trigger
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
//         <div ref={ref} style={{
//             textAlign: 'center',
//             backgroundColor: '#fff',
//             padding: '50px 20px',
//             width: '100%',
//             boxSizing: 'border-box',
//             opacity: 0, // Initialize invisible for animation
//             transform: 'translateY(50px)', // Start from below its final position
//             transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', // Smooth transition for both properties
//         }}>
//             <h2 style={{fontSize: '2.5rem'}}>About Our Products</h2>
//             <h3 style={{fontSize: '1.5rem'}}>Durable & Reliable</h3>
//             <p style={{fontSize: '20px'}}>Our pallets are designed to withstand the rigors of heavy use, ensuring longevity and reliability.</p>
//             <hr />
//             <p style={{fontSize: '20px'}}>
//                 These products are made from high-quality, sustainable materials, meeting both environmental and performance standards. Each unit undergoes rigorous testing to ensure durability and safety, offering exceptional value across various industries.
//             </p>
//         </div>
//     );
// };

// export default CenterTextSection;
