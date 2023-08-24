import MainSlider from '../components/MainSlider';
import CategoriesSection from '../components/CategoriesSection';
import ProductSection from '../components/ProductSection';
import ArticleSection from '../components/ArticleSection';
import DiscountSection from '../components/DiscountSection';

const Home = () => {
  return (
    <div className="w-full space-y-10">
      <div className="w-full">
        <MainSlider />
      </div>
      <CategoriesSection />
      <div className="w-full">
        <ProductSection />
      </div>
      <ArticleSection />
      <DiscountSection />
    </div>
  );
};

export default Home;
