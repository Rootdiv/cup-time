import './order.scss';

export const Order = () => (
  <section className="order">
    <div className="container">
      <h3 className="order__title">Доставка</h3>
      <form id="order" method="POST" className="order__form">
        <input type="text" name="name" placeholder="Имя" className="order__input" required />
        <input type="text" name="phone" placeholder="Телефон" className="order__input" required />
        <input
          type="text"
          name="address"
          placeholder="Адрес"
          className="order__input order__input_address"
          required
        />
        <fieldset className="order__payment">
          <legend className="order__payment-title">Оплата:</legend>
          <label className="order__payment-label">
            <input type="radio" name="payment" value="card" className="order__radio" />
            Картой
          </label>
          <label className="order__payment-label">
            <input
              type="radio"
              name="payment"
              value="cash"
              className="order__radio"
              defaultChecked
            />
            Наличные
          </label>
        </fieldset>
      </form>
    </div>
  </section>
);
