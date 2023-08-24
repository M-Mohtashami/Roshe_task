import CartProvider from './context/CartContext';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Product, { productLoader } from './pages/Product';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider>
        <MainLayout>
          <Home />
        </MainLayout>
      </CartProvider>
    ),
    children:[
      
    ]
  },
  {
    path : '/:id',
    element: (
      <CartProvider>
        <MainLayout>
        <Product />
        </MainLayout>
      </CartProvider>
    ),
    loader:productLoader,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;



// product={{
//   name: 'ادو پرفیوم زنانه دزیره رانسه',
//   images: [
//     'assets/images/Product01.jpeg',
//     'assets/images/Product02.jpeg',
//   ],
//   details: [
//     {
//       price: 8890000,
//       capacity: 100,
//       count: 10,
//     },
//     {
//       price: 5590000,
//       capacity: 50,
//       count: 50,
//     },
//   ],
// }}