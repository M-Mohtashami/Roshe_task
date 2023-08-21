
import Category from './components/Category';
import MainLayout from './layout/MainLayout';
import ProductCard from './components/ProductCard';
import ArticleCard from './components/ArticleCard';
function App() {
  return (
    <>
      <MainLayout>
        <Category
          src="assets/images/skin.jpg"
          category="پوست"
          link="https://rosheh.com/product-category/skin/"
        />
        <ProductCard
          product={{
            name: 'ادو پرفیوم زنانه دزیره رانسه',
            images: [
              'assets/images/Product01.jpeg',
              'assets/images/Product02.jpeg',
            ],
            details: [
              {
                price: 8890000,
                capacity: 100,
                count: 10,
              },
              {
                price: 5590000,
                capacity: 50,
                count: 0,
              },
            ],
          }}
        />
        <ArticleCard
          article={{
            title: 'طراحی داخلی سبز',
            author: 'امید',
            category: 'مقیاس',
            comments: 0,
            image: 'assets/images/article02.jpg',
            createdAt: new Date(),
          }}
        />
      </MainLayout>
    </>
  );
}

export default App
