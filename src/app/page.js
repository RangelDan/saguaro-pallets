import CenterTextSection from '@/components/centertextsection/CenterTextSection';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/herosection/HeroSection';
import ImageSection from '@/components/imagesection/ImageSection';
import CallToAction from '@/components/calltoaction/CallToAction';
import ContactForm from '@/components/contactform/ContactForm';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <Layout>
    {/* <div> */}
      {/* <Navbar /> */}
      <HeroSection />
      <CenterTextSection />
      <ImageSection />
      <CallToAction />
      <ContactForm />
      {/* <Footer /> */}
    {/* </div> */}
    </Layout>
  );
}
