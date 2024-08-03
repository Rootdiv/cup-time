import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ProductProvider } from '@/context/ProductContext.jsx';
import { CartProvider } from '@/context/CartContext.jsx';

import 'normalize.css';
import '@/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
);
