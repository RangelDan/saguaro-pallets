import ContactForm from "../contactform/ContactForm";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <ContactForm id="contact"/>
    <Footer />
  </>
);

export default Layout;
