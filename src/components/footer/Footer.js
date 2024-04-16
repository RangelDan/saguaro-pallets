// components/Footer.js
const Footer = () => (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <a href="https://facebook.com" target="_blank" style={{ margin: '0 10px' }}>
        <img src="/facebook-icon.png" alt="Facebook" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <a href="https://twitter.com" target="_blank" style={{ margin: '0 10px' }}>
        <img src="/twitter-icon.png" alt="Twitter" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <a href="https://instagram.com" target="_blank" style={{ margin: '0 10px' }}>
        <img src="/instagram-icon.png" alt="Instagram" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <p>@2024 Saguaro Pallets LLC.</p>
      <p>All Rights Reserved</p>
    </footer>
  );
  
  export default Footer;
  