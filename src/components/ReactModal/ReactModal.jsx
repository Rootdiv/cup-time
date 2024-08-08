import { Quantity } from '@/components/Quantity/Quantity';
import style from './ReactModal.module.scss';
import { API_URL } from '@/const';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!data) {
    return null;
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={style.modal}
      overlayClassName={style.overlay}
      contentLabel={`Товар ${data.title}`}>
      <img src={`${API_URL}${data.img}`} alt={data.title} className={style.image} />
      <div className={style.content}>
        <div className="info">
          <h2 className={style.title}>{data.title}</h2>
          <p className={style.price}>{data.price}&nbsp;&#8381;</p>
        </div>
        <ul className={style.additional}>
          {Object.entries(data.additional).map(([key, value]) => (
            <li className={style.additionalList} key={key}>
              <span className={style.additionalField}>{key}:</span>
              <span className={style.additionalValue}>{value}</span>
            </li>
          ))}
        </ul>
        <div className={style.cart}>
          <Quantity
            value={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <button type="button" className={style.cartAdd} onClick={handleAddToCart}>
            Добавить
          </button>
        </div>
      </div>
      <button type="button" className={style.close} onClick={onRequestClose} />
    </ReactModal>
  );
};
