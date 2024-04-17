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

  const images = [
    { src: '/loaded.jpg', alt: 'Description of Image 1' },
    { src: '/loaded.jpg', alt: 'Description of Image 2' },
    { src: '/loaded.jpg', alt: 'Description of Image 3' },
    // Add more images as needed
  ];
  const features = [
    {
      image: '/top1.jpg',
      title: 'We supply',
      description: 'Description for feature one...'
    },
    {
      image: '/top2.jpg',
      title: 'We buy',
      description: 'Description for feature two...'
    },
    {
      image: '/top3.jpg',
      title: 'Custom jobs',
      description: 'Description for feature three...'
    }
  ];

  return (
    <Layout>
    {/* <div> */}
      {/* <Navbar /> */}
      <HeroSection />
      <CenterTextSection />
      <FeatureSection features={features} />
      <CallToAction />
      {/* <Footer /> */}
    {/* </div> */}
    </Layout>
  );
}
