// src/app/page.js
import HeroSection from '../../components/HeroSection';
import PillarsSection from '../../components/PillarsSection';
import ReasonsSection from '../../components/ReasonsSection';
import ProductCatalog from '../../components/ProductCatalog';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PillarsSection />
      <ReasonsSection />
      <ProductCatalog />
    </main>
  );
}