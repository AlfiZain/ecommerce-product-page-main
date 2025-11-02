import ProductDetail from './components/ProductDetail';
import HeaderApp from './components/HeaderApp';
import { CartProvider } from './providers/CartProvider';

export default function App() {
  return (
    <CartProvider>
      <div className="m-auto max-w-5xl font-kumbh-sans">
        <HeaderApp />
        <ProductDetail />
      </div>
    </CartProvider>
  );
}
