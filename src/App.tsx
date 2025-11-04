import ProductDetail from './components/ProductDetail';
import HeaderApp from './components/HeaderApp';
import { CartProvider } from './providers/CartProvider';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <CartProvider>
      <div className="m-auto max-w-5xl font-kumbh-sans">
        <HeaderApp />
        <ProductDetail />
        <ToastContainer closeOnClick autoClose={4000} className="text-sm" />
      </div>
    </CartProvider>
  );
}
