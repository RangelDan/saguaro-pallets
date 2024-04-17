'use client'

import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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
        <button style={{ background: '#0066A2', color: '#fff', border: 'none', padding: '8px 16px', margin: '0 5px' }}>Call Now</button>
        <button style={{ background: '#0066A2', color: '#fff', border: 'none', padding: '8px 16px', margin: '0 5px'  }}>Email</button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="/about" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>About</a>
          <a href="/services" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Services</a>
          <a href="/contact" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Contact</a>
          <a href="/gallery" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#0066A2' }}>Gallery</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
