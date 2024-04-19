'use client'

const CallToAction = () => (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      background: 'green',
      color: '#fff'
    }}>
      <h1 style={{fontSize: '3rem'}}>Call now for a free quote!</h1>
      <h2 style={{fontSize: '2rem'}}>Best Prices Guaranteed</h2>
      <button 
        style={{fontSize: '18px', padding: '10px 20px'}} 
        onClick={() => window.location.href = 'tel:+4804695678'}
      >
        Call Now
      </button>
    </div>
  );
  
  export default CallToAction;
  