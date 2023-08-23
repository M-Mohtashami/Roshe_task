import CartProvider from './context/CartContext';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Product from './pages/Product';
function App() {
  return (
    <>
      <CartProvider>
        <MainLayout>
          {/* {
          <Product
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
                  count: 50,
                },
              ],
            }}
          />
        } */}
          <Home />
        </MainLayout>
      </CartProvider>
    </>
  );
}

export default App;
