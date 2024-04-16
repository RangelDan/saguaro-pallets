// pages/index.js
import CenterTextSection from '@/components/centertextsection/CenterTextSection';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/herosection/HeroSection';
import ImageSection from '@/components/imagesection/ImageSection';
import CallToAction from '@/components/calltoaction/CallToAction';
import ContactForm from '@/components/contactform/ContactForm';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CenterTextSection />
      <ImageSection />
      <CallToAction />
      <ContactForm />
    </Layout>
  );
}
