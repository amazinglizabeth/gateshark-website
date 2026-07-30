import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import WorkflowSection from './components/WorkFlowSection/WorkFlowSection';
import FeaturesGridSection from './components/FeaturesGridSection/FeaturesGridSection';
import AudienceSection from './components/AudienceSection/AudienceSection';
import SecurityBannerSection from './components/SecurityBannerSection/SecurityBannerSection';
import FAQSection from './components/FAQSection/FAQSection';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <main>
        <HeroSection />
        <WorkflowSection />
        <FeaturesGridSection />
        <AudienceSection />
        <SecurityBannerSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;