// components/ContactForm.js
const ContactForm = () => (
    <div style={{
      background: '#f8f8f8',
      padding: '20px',
      textAlign: 'center',
      boxSizing: 'border-box',
    }}>
      <h2 style={{fontSize: '2rem'}}>Contact us</h2>
      <form action="/submit_form" method="POST" style={{ textAlign: 'center' }}>
        <input type="text" name="name" placeholder="Your Name" required style={{
          width: '90%', margin: '10px 0', padding: '10px'
        }} />
        <input type="email" name="email" placeholder="Your Email" required style={{
          width: '90%', margin: '10px 0', padding: '10px'
        }} />
        <textarea name="message" placeholder="Your Message" required style={{
          width: '90%', margin: '10px 0', padding: '10px'
        }}></textarea>
        <button type="submit" style={{
          padding: '10px 20px', backgroundColor: '#0066A2', color: 'white', border: 'none', cursor: 'pointer'
        }}>Send message</button>
      </form>
    </div>
  );
  
  export default ContactForm;
  