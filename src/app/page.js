// src/app/page.js
import HeroSection from '../../components/HeroSection';
import PillarsSection from '../../components/PillarsSection';
import ReasonsSection from '../../components/ReasonsSection';
import ProductCatalog from '../../components/ProductCatalog';
import ProductIntroSection from '../../components/ProductIntroSection';
import TechnicalAdvantagesSection from '../../components/TechnicalAdvantagesSection';
import Footer from '../../components/Footer';
import InterplastSection from '../../components/InterplastSection';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
    <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <ReasonsSection />
        <ProductIntroSection />
        <ProductCatalog />
        <TechnicalAdvantagesSection />
      </main>
      { /*<InterplastSection /> */}
      <InterplastSection /> 
      <Footer />
    </>  
  );
}