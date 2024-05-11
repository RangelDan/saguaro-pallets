// 'use client'

// const CallToAction = () => (
//     <div style={{
//       textAlign: 'center',
//       padding: '50px 20px',
//       background: 'green',
//       color: '#fff'
//     }}>
//       <h1 style={{fontSize: '3rem'}}>Call for a free quote!</h1>
//       <h2 style={{fontSize: '2rem'}}>Best Prices Guaranteed</h2>
//       <button 
//         style={{fontSize: '18px', padding: '10px 20px'}} 
//         onClick={() => window.location.href = 'tel:+14804695678'}
//       >
//         Call Now
//       </button>
//     </div>
//   );
  
//   export default CallToAction;
  
'use client'

import React, { useEffect, useRef } from 'react';

const CallToAction = () => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    } else {
                        entry.target.style.opacity = 0;
                        entry.target.style.transform = 'translateY(50px)';
                    }
                });
            },
            {
                threshold: 0.5  // Trigger when 50% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} style={{
            textAlign: 'center',
            padding: '50px 20px',
            background: 'green',
            color: '#fff',
            opacity: 0, // Start as invisible for animation
            transform: 'translateY(50px)', // Start below its final position
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', // Smooth transition
        }}>
            <h1 style={{fontSize: '3rem'}}>Call for a free quote!</h1>
            <h2 style={{fontSize: '2rem'}}>Best Prices Guaranteed</h2>
            <button 
                style={{fontSize: '18px', padding: '10px 20px'}} 
                onClick={() => window.location.href = 'tel:+14804695678'}
            >
                Call Now
            </button>
        </div>
    );
};

export default CallToAction;
