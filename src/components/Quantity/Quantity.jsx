import style from './Quantity.module.scss';
import clsx from 'clsx';

export const Quantity = ({ value, handleDecrement, handleIncrement, className }) => (
  <div className={clsx(style.quantity, className)}>
    <button
      type="button"
      className={`${style.btn} ${style.btnMinus}`}
      onClick={handleDecrement}></button>
    <input type="number" className={style.count} value={value} readOnly />
    <button
      type="button"
      className={`${style.btn} ${style.btnPlus}`}
      onClick={handleIncrement}></button>
  </div>
);
