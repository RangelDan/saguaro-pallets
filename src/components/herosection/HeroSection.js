// components/HeroSection.js
const HeroSection = () => (
    <div style={{
      background: "url('/loaded.jpg') no-repeat center center",
      backgroundSize: 'cover',
      backgroundColor: 'black',
      color: '#fff',
      textAlign: 'center',
      padding: '100px 20px',
      height: '40vh',
      width: '100%'
    }}>
      <h1 style={{fontSize: '3rem', color: 'light grey'}}>Saguaro Pallets</h1>
      <p style={{fontSize: '1.5rem', color: 'light grey'}}>High Quality • Sustainable • Affordable</p>
      <button style={{
        fontSize: '18px', 
        color: 'light grey',
        padding: '10px 20px' 
        }}>
          Learn More
        </button>
    </div>
  );
  
  export default HeroSection;
  