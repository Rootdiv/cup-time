import { Link, useLocation } from 'react-router-dom';
import { useGoods } from '@/context/ProductContext';
import style from './MenuList.module.scss';
import clsx from 'clsx';

export const MenuList = ({ className, onClick }) => {
  const location = useLocation();

  const { categories } = useGoods();

  const setActiveClass = category => {
    const currentCategory = new URLSearchParams(location.search).get('category');
    return currentCategory === category;
  };

  return (
    <ul className={clsx(style.menu, className)}>
      {Object.entries(categories).map(([key, value]) => (
        <li key={key} className={style.menuItem}>
          <Link
            to={`/products?category=${key}`}
            className={clsx(style.menuLink, { [style.active]: setActiveClass(key) })}
            onClick={onClick}>
            {value}
          </Link>
        </li>
      ))}
    </ul>
  );
};
