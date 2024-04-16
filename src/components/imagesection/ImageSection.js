// components/ImageSection.js
const ImageSection = () => (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
    }}>
      <div style={{
        flex: '1 1 30%',
        margin: '5px',
        height: '200px',
        backgroundImage: "url('/sagcard.PNG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div style={{
        flex: '1 1 30%',
        margin: '5px',
        height: '200px',
        backgroundImage: "url('/loaded.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div style={{
        flex: '1 1 30%',
        margin: '5px',
        height: '200px',
        backgroundImage: "url('/sagcard.PNG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
    </div>
  );
  
  export default ImageSection;
  