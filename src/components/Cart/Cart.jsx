import './cart.scss';
import { CartItem } from '@/components/CartItem/CartItem';
import { goodsArr } from '@/goodsArr';

export const Cart = () => (
  <section className="cart">
    <div className="container cart__container">
      <h2 className="cart__title">Корзина (6)</h2>
      <ul className="cart__items">
        {goodsArr.map(product => (
          <CartItem key={product.id} {...product} />
        ))}
      </ul>
      <div className="cart__summary">
        <h3 className="cart__summary-title">Итого:</h3>
        <p className="cart__total">2200&nbsp;&#8381;</p>
        <button type="submit" form="order" className="cart__order-btn">
          Заказать
        </button>
      </div>
    </div>
  </section>
);
