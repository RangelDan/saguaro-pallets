'use client'

import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
      setMenuOpen(false); // Close the menu if click is outside
    }
  };

  return (
    <div className={styles.navbar}>
      <a href='/'>
        <img src="/saglogo.png" alt="Saguaro Pallets - Buy and sell" style={{height: '100px', width: '100px'}} />
      </a>
      
      <button onClick={toggleMenu} className={styles.mobileMenuButton}>☰</button>

      <div className={styles.links}>
        <a href="/about" style={{ margin: '0 20px', textDecoration: 'none', color: '#0066A2' }}>About</a>
        <a href="/services" style={{ margin: '0 20px', textDecoration: 'none', color: '#0066A2' }}>Services</a>
        <a href="/contact" style={{ margin: '0 20px', textDecoration: 'none', color: '#0066A2' }}>Contact</a>
        <a href="/gallery" style={{ margin: '0 20px', textDecoration: 'none', color: '#0066A2' }}>Gallery</a>
      </div>

      <div className={styles.buttons}>
        <button 
          style={{ background: '#0066A2', color: '#fff', border: 'none', padding: '8px 16px', margin: '0 5px' }}
          onClick={() => window.location.href = 'tel:+14804695678'}
        >
          Call Now
        </button>
        <button 
          style={{ background: '#0066A2', color: '#fff', border: 'none', padding: '8px 16px', margin: '0 5px'  }}
          onClick={() => {
            const subject = encodeURIComponent("I'm intrested in your services!");
            const body = encodeURIComponent("I was just on your site and I want to learn more!");
            window.location.href = `mailto:saguaropallets@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          Email
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <a href="/about" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>About</a>
          <a href="/services" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Services</a>
          <a href="/contact" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Contact</a>
          <a href="/gallery" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Gallery</a>
          <a href="tel:+14804695678" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Call Now</a>
          <a 
            href="mailto:saguaropallets@gmail.com?subject=I'm%20intrested%20in%20your%20services!&body=I%20was%20just%20on%20your%20site%20and%20I%20want%20to%20learn%20more!"
            style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>
            Email
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
