import CenterTextSection from '@/components/centertextsection/CenterTextSection';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/herosection/HeroSection';
import CallToAction from '@/components/calltoaction/CallToAction';
import FeatureSection from '@/components/featureSection/FeatureSection';
import FirstAd from '@/components/firstAd/FirstAd';
import AdPage from '@/components/adpage/AdPage';

export default function Home() {

  const features = [
    {
      image: '/top1.jpg',
      title: 'We Supply',
      description: 'We offer a wide range of sizes including 48x40, 48x48, and custom sizes to meet your needs.',
      id: 'wesupply'
    },
    {
      image: '/top2.jpg',
      title: 'We Buy',
      description: 'Looking to sell your used pallets? We buy them back at competitive prices.',
      id: 'webuy'
    },
    {
      image: '/top3.jpg',
      title: 'Custom Jobs',
      description: 'We offer weekly pallet and cardboard bale pickup at no cost, keeping your operations smooth and efficient.',
      id: 'log'
    }
  ];

  return (
    <Layout>
      <HeroSection />
      <CenterTextSection />
      <FeatureSection features={features} />
      {/* <FirstAd /> */}
      <AdPage />
      <CallToAction />
    </Layout>
  );
}
