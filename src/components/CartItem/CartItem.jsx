import style from './CartItem.module.scss';
import { API_URL } from '@/const';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Quantity } from '@/components/Quantity/Quantity';

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
    <li className={style.cartItem}>
      <img className={style.image} src={`${API_URL}${img}`} alt={title} />
      <div className={style.info}>
        <h3 className={style.title}>{title}</h3>
        <Quantity
          value={itemQuantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          className={style.quantity}
        />
        <p className={style.price}>{price * quantity}&nbsp;&#8381;</p>
      </div>
    </li>
  );
};
