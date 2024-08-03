import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cup-time-cart') || '[]');
    setCart(storeCart);
  }, []);

  useEffect(() => {
    if (Array.isArray(cart)) {
      localStorage.setItem('cup-time-cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product, quantity) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === product.id);
    if (itemIndex >= 0) {
      newCart[itemIndex].quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }

    setCart(newCart);
  };

  const removeFromCart = productId => {
    console.log(1);
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => (item.id === productId ? { ...item, quantity } : item)));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
