import { Cart } from '@/components/Cart/Cart';
import { Goods } from '@/components/Goods/Goods';
import { Order } from '@/components/Order/Order';
import { Promo } from '@/components/Promo/Promo';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Main = () => (
  <main className="main">
    <Routes>
      <Route path="/" element={<Navigate to="/products?category=tea" />} />
      <Route
        path="/products"
        element={
          <>
            <Promo />
            <Goods />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Cart />
            <Order />
          </>
        }
      />
    </Routes>
  </main>
);
