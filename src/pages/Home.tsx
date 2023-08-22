import React from 'react';
import MainSlider from '../components/MainSlider';
import CategoriesSection from '../components/CategoriesSection';
import ProductSection from '../components/ProductSection';

const Home = () => {
  return (
    <div className="w-full space-y-5">
      <div className="w-full">
        <MainSlider />
      </div>
      <CategoriesSection />
      <ProductSection />
    </div>
  );
};

export default Home;
