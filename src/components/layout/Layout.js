import ContactForm from "../contactform/ContactForm";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import SEOHead from "../seohead/SeoHead";

const Layout = ({ children }) => (
  <>
    <SEOHead />
    <Navbar />
    <main>{children}</main>
    <ContactForm id="contact"/>
    <Footer />
  </>
);

export default Layout;
