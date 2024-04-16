// // components/Navbar.js
// const Navbar = () => (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px 20px',
//       background: '#fff',
//       color: '#fff',
//       width: '100%'
//     }}>
//       <img src="/saglogo.png" alt="Company Logo" style={{height: '150px', width: '150px'}}/>
//       <div>
//         <button style={{ 
//           color: '#fff', 
//           background: '#0066A2', 
//           border: 'none', 
//           padding: '8px 16px', 
//           cursor: 'pointer', 
//           display: 'block', 
//           marginBottom: '5px',
//         }}>
//           Call Now
//         </button>
//         <button style={{ 
//           color: '#fff', 
//           background: '#0066A2', 
//           border: 'none', 
//           padding: '8px 16px', 
//           cursor: 'pointer', 
//           display: 'block' 
//         }}>
//           Email
//         </button>
//       </div>
//     </div>
//   );
  
//   export default Navbar;
  

// components/Navbar.js
// const Navbar = () => (
//   <div style={{
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     background: '#fff',
//     color: '#333', // Changed for visibility on white background
//     width: '100%'
//   }}>
//     <img src="/saglogo.png" alt="Company Logo" style={{height: '100px', width: '100px'}}/> {/* Adjusted height for balance */}
//     <div style={{ flexGrow: 1, textAlign: 'center' }}>
//       <a href="#about" style={{ margin: '0 20px', color: '#0066A2', textDecoration: 'none' }}>About</a>
//       <a href="#services" style={{ margin: '0 20px', color: '#0066A2', textDecoration: 'none' }}>Services</a>
//       <a href="#contact" style={{ margin: '0 20px', color: '#0066A2', textDecoration: 'none' }}>Contact</a>
//     </div>
//     <div style={{display: 'flex', gap: '10px'}}> {/* Flex display for horizontal layout */}
//       <button style={{ 
//         color: '#fff', 
//         background: '#0066A2', 
//         border: 'none', 
//         padding: '8px 16px', 
//         cursor: 'pointer', 
//       }}>
//         Call Now
//       </button>
//       <button style={{ 
//         color: '#fff', 
//         background: '#0066A2', 
//         border: 'none', 
//         padding: '8px 16px', 
//         cursor: 'pointer', 
//       }}>
//         Email
//       </button>
//     </div>
//   </div>
// );

// export default Navbar;

// components/Navbar.js
// 'use client'
// import { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '10px 20px',
//         background: '#fff',
//         color: '#333',
//         width: '100%',
//         position: 'relative',
//       }}>
//         <img src="/saglogo.png" alt="Company Logo" style={{ height: '50px', width: '150px' }} />
        
//         {/* Toggle button for mobile */}
//         <button onClick={toggleMenu} style={{
//           display: 'none', // Hidden by default, shown in media query
//           background: 'none',
//           border: 'none',
//           cursor: 'pointer',
//           fontSize: '24px',
//           color: '#0066A2',
//         }}>☰</button>

//         {/* Links container */}
//         <div className="links" style={{ flexGrow: 1, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
//           <a href="#about" style={{ margin: '0 20px', color: '#0066A2', textDecoration: 'none' }}>About</a>
//           <a href="#services" style={{ margin: '0 20px', color: '#0066A2', textDecoration: 'none' }}>Services</a>
//           <a href="#contact" style={{ margin: '0 20px', color: '#0066A2', textDecoration: 'none' }}>Contact</a>
//         </div>

//         {/* Buttons */}
//         <div className="buttons" style={{ display: 'flex', gap: '10px' }}>
//           <button style={{
//             color: '#fff',
//             background: '#0066A2',
//             border: 'none',
//             padding: '8px 16px',
//             cursor: 'pointer',
//           }}>
//             Call Now
//           </button>
//           <button style={{
//             color: '#fff',
//             background: '#0066A2',
//             border: 'none',
//             padding: '8px 16px',
//             cursor: 'pointer',
//           }}>
//             Email
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div style={{
//             position: 'absolute',
//             top: '60px', right: '0',
//             background: 'white',
//             border: '1px solid #ddd',
//             borderRadius: '5px',
//             width: '100%',
//             boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//           }}>
//             <a href="#about" style={{ display: 'block', padding: '10px 20px', color: '#0066A2', textDecoration: 'none' }}>About</a>
//             <a href="#services" style={{ display: 'block', padding: '10px 20px', color: '#0066A2', textDecoration: 'none' }}>Services</a>
//             <a href="#contact" style={{ display: 'block', padding: '10px 20px', color: '#0066A2', textDecoration: 'none' }}>Contact</a>
//           </div>
//         )}
//       </div>

//       {/* Style adjustments for responsiveness */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .links, .buttons {
//             display: none;  
//           }
//           button:first-of-type {
//             display: block;  // Show the menu toggle button
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;
'use client'

import { useState } from 'react';
import './Navbar.module.css'; // Make sure to import the CSS file

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src="/saglogo.png" alt="Company Logo" style={{height: '100px', width: '100px'}} />
      
      <button onClick={toggleMenu} className="mobile-menu-button">☰</button>

      <div className="links">
        <a href="#about" style={{ margin: '0 20px', textDecoration: 'none', color: '#0066A2' }}>About</a>
        <a href="#services" style={{ margin: '0 20px', textDecoration: 'none', color: '#0066A2' }}>Services</a>
        <a href="#contact" style={{ margin: '0 20px', textDecoration: 'none', color: '#0066A2' }}>Contact</a>
      </div>

      <div className="buttons">
        <button style={{ background: '#0066A2', color: '#fff', border: 'none', padding: '8px 16px' }}>Call Now</button>
        <button style={{ background: '#0066A2', color: '#fff', border: 'none', padding: '8px 16px' }}>Email</button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>About</a>
          <a href="#services" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Services</a>
          <a href="#contact" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
