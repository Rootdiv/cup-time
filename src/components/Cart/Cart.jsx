import './cart.scss';
import { CartItem } from '@/components/CartItem/CartItem';
import { useCart } from '@/context/CartContext';
import { useOrder } from '@/context/OrderContext';
import { useState } from 'react';
import { API_URL } from '@/const';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, resetOrderDetails } = useOrder();

  const totalPrice = cart ? cart.reduce((acc, item) => item.price * item.quantity + acc, 0) : 0;

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map(({ id, quantity }) => ({ id, quantity })),
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке заказа');
      }

      const result = await response.json();

      setOrderStatus('success');
      setOrderId(result.order.id);
      resetOrderDetails();
      clearCart();
    } catch (error) {
      setOrderStatus(error);
      console.error(`Ошибка: ${error}`);
    } finally {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина ({cart?.length || 0})</h2>
        <ul className="cart__items">
          {cart && cart.length ? (
            cart.map(product => <CartItem key={product.id} {...product} />)
          ) : (
            <p className="cart__empty">В корзине товаров нет</p>
          )}
        </ul>
        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__total">{totalPrice}&nbsp;&#8381;</p>
          <button
            type="button"
            className="cart__order-btn"
            disabled={!cart?.length}
            onClick={handleSubmit}>
            Заказать
          </button>
        </div>
      </div>
      <ReactModal
        className="modal-cart"
        overlayClassName="modal-cart__overlay"
        onRequestClose={closeModal}
        isOpen={modalIsOpen}>
        <h2 className="modal-cart__title">
          {orderStatus === 'success' ? (
            <span>
              Заказ успешно отправлен!
              <br />
              Номер Вашего заказа {orderId}
            </span>
          ) : (
            'Произошла ошибка при отправке заказа'
          )}
        </h2>
        <button type="button" className="modal-cart__close" onClick={closeModal}>
          Закрыть
        </button>
      </ReactModal>
    </section>
  );
};
