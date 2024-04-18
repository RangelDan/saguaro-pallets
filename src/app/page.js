import CenterTextSection from '@/components/centertextsection/CenterTextSection';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/herosection/HeroSection';
import ImageSection from '@/components/imagesection/ImageSection';
import CallToAction from '@/components/calltoaction/CallToAction';
import ContactForm from '@/components/contactform/ContactForm';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ImageSlider from '@/components/imageslider/ImageSlider';
import FeatureSection from '@/components/featureSection/FeatureSection';

export default function Home() {

  const features = [
    {
      image: '/top1.jpg',
      title: 'We supply',
      description: 'We offer a wide range of sizes including 48x40, 48x48, and custom sizes to meet your needs.',
      id: 'wesupply'
    },
    {
      image: '/top2.jpg',
      title: 'We buy',
      description: 'Looking to sell your used pallets? We buy them back at competitive prices.',
      id: 'webuy'
    },
    {
      image: '/top3.jpg',
      title: 'Custom jobs',
      description: 'We offer weekly pallet and cardboard bale pickup at no cost, helping you keep your operations smooth and efficient.',
      id: 'wesupply'
    }
  ];

  return (
    <Layout>
      <HeroSection />
      <CenterTextSection />
      <FeatureSection features={features} />
      <CallToAction />
    </Layout>
  );
}
