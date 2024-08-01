import './cartItem.scss';

export const CartItem = ({ title, image, price }) => (
  <li className="cart-item">
    <img className="cart-item__image" src={image} alt={title} />
    <div className="cart-item__info">
      <h3 className="cart-item__title">{title}</h3>
      <div className="cart-item__quantity">
        <button className="cart-item__quantity-btn cart-item__quantity-btn_minus"></button>
        <input type="number" className="cart-item__quantity-count" defaultValue={1} />
        <button className="cart-item__quantity-btn cart-item__quantity-btn_plus"></button>
      </div>
      <p className="cart-item__price">{price}&nbsp;&#8381;</p>
    </div>
  </li>
);
