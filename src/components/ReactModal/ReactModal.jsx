import './modal.scss';
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
      className="modal"
      overlayClassName="modal__overlay"
      contentLabel={`Товар ${data.title}`}>
      <img src={`${API_URL}${data.img}`} alt={data.title} className="modal__image" />
      <div className="modal__content">
        <div className="info">
          <h2 className="modal__title">{data.title}</h2>
          <p className="modal__price">{data.price}&nbsp;&#8381;</p>
        </div>
        <ul className="modal__additional">
          {Object.entries(data.additional).map(([key, value]) => (
            <li className="modal__additional-list" key={key}>
              <span className="modal__additional-field">{key}:</span>
              <span className="modal__additional-value">{value}</span>
            </li>
          ))}
        </ul>
        <div className="modal__cart">
          <div className="modal__quantity">
            <button
              type="button"
              className="modal__quantity-btn modal__quantity-btn_minus"
              onClick={handleDecrement}></button>
            <input type="number" className="modal__quantity-count" value={quantity} readOnly />
            <button
              type="button"
              className="modal__quantity-btn modal__quantity-btn_plus"
              onClick={handleIncrement}></button>
          </div>
          <button type="button" className="modal__cart-add" onClick={handleAddToCart}>
            Добавить
          </button>
        </div>
      </div>
      <button type="button" className="modal__close" onClick={onRequestClose} />
    </ReactModal>
  );
};
