import './order.scss';
import { useOrder } from '@/context/OrderContext';

export const Order = () => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = ({ target: { name, value } }) => {
    updateOrderDetails(name, value);
  };

  return (
    <section className="order">
      <div className="container">
        <h3 className="order__title">Доставка</h3>
        <form className="order__form">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="order__input"
            value={orderDetails.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Телефон"
            className="order__input"
            value={orderDetails.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Адрес"
            className="order__input order__input_address"
            value={orderDetails.address}
            onChange={handleChange}
            required
          />
          <fieldset className="order__payment">
            <legend className="order__payment-title">Оплата:</legend>
            <label className="order__payment-label">
              <input
                type="radio"
                name="payment"
                value="card"
                className="order__radio"
                checked={orderDetails.payment === 'card'}
                onChange={handleChange}
                required
              />
              Картой
            </label>
            <label className="order__payment-label">
              <input
                type="radio"
                name="payment"
                value="cash"
                className="order__radio"
                checked={orderDetails.payment === 'cash'}
                onChange={handleChange}
                required
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
