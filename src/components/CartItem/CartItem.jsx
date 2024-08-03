import './cartItem.scss';
import { API_URL } from '@/const';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export const CartItem = ({ id, title, img, quantity, price }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrement = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(id, quantity);
    } else {
      removeFromCart(id);
    }
  };

  const handleIncrement = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(id, quantity);
  };

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={`${API_URL}${img}`} alt={title} />
      <div className="cart-item__info">
        <h3 className="cart-item__title">{title}</h3>
        <div className="cart-item__quantity">
          <button
            type="button"
            className="cart-item__quantity-btn cart-item__quantity-btn_minus"
            onClick={handleDecrement}></button>
          <input
            type="number"
            className="cart-item__quantity-count"
            value={itemQuantity}
            readOnly
          />
          <button
            type="button"
            className="cart-item__quantity-btn cart-item__quantity-btn_plus"
            onClick={handleIncrement}></button>
        </div>
        <p className="cart-item__price">{price * quantity}&nbsp;&#8381;</p>
      </div>
    </li>
  );
};
