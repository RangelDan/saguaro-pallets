// components/Footer.js
const Footer = () => (
    <footer style={{
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <p>@2024 Saguaro Pallets LLC.</p>
      <a href="https://facebook.com" target="_blank" style={{ margin: '0 5px' }}>
        <img src="/facebook.png" alt="Facebook" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <a href="https://twitter.com" target="_blank" style={{ margin: '0 5px' }}>
        <img src="/x.png" alt="Twitter" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <a href="https://instagram.com/saguaropallets" target="_blank" style={{ margin: '0 5px' }}>
        <img src="/gram.png" alt="Instagram" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <a href="https://instagram.com" target="_blank" style={{ margin: '0 5px' }}>
        <img src="/yelp.png" alt="Instagram" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <a href="https://instagram.com" target="_blank" style={{ margin: '0 5px' }}>
        <img src="/snap.png" alt="Instagram" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <a href="https://instagram.com" target="_blank" style={{ margin: '0 5px' }}>
        <img src="/mes.png" alt="Instagram" style={{ width: '24px', verticalAlign: 'middle' }} />
      </a>
      <p>All Rights Reserved</p>
      <p style={{
          fontSize: '0.75rem',
          marginTop: '1rem',  
          color: '#b0b0b0',  
      }}>
        <a style={{textDecoration: 'none', color: '#b0b0b0' }} href="https://www.exhaless.com" id="powered-by" target="_blank" rel="noopener noreferrer">Powered by Exhale</a>
      </p>
    </footer>
  );
  
  export default Footer;
  