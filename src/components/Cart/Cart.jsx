import './cart.scss';
import { CartItem } from '@/components/CartItem/CartItem';
import { useCart } from '@/context/CartContext';

export const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart ? cart.reduce((acc, item) => item.price * item.quantity + acc, 0) : 0;

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
          <button type="submit" form="order" className="cart__order-btn" disabled={!cart?.length}>
            Заказать
          </button>
        </div>
      </div>
    </section>
  );
};
