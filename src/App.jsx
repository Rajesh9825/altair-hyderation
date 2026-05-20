import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import QualityProcess from './components/QualityProcess';
import DistributorBanner from './components/DistributorBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div class="bg-white min-h-screen font-sans antialiased selection:bg-brand-skyBlue selection:text-brand-darkNavy">
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <QualityProcess />
      <DistributorBanner />
      <Footer />
    </div>
  );
}