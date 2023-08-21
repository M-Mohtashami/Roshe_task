
import Category from './components/Category';
import MainLayout from './layout/MainLayout';
function App() {
  return (
    <>
      <MainLayout>
        <Category
          src="assets/images/skin.jpg"
          category="پوست"
          link="https://rosheh.com/product-category/skin/"
        />
      </MainLayout>
    </>
  );
}

export default App
