import style from './Order.module.scss';
import { useOrder } from '@/context/OrderContext';

export const Order = () => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = ({ target: { name, value } }) => {
    updateOrderDetails(name, value);
  };

  return (
    <section className={style.order}>
      <div className="container">
        <h3 className={style.title}>Доставка</h3>
        <form className={style.form}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className={style.input}
            value={orderDetails.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Телефон"
            className={style.input}
            value={orderDetails.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Адрес"
            className={`${style.input} ${style.inputAddress}`}
            value={orderDetails.address}
            onChange={handleChange}
            required
          />
          <fieldset className={style.payment}>
            <legend className={style.paymentTitle}>Оплата:</legend>
            <label className={style.paymentLabel}>
              <input
                type="radio"
                name="payment"
                value="card"
                className={style.radio}
                checked={orderDetails.payment === 'card'}
                onChange={handleChange}
                required
              />
              Картой
            </label>
            <label className={style.paymentLabel}>
              <input
                type="radio"
                name="payment"
                value="cash"
                className={style.radio}
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
