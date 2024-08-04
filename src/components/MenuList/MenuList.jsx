import { Link, useLocation } from 'react-router-dom';
import { useGoods } from '@/context/ProductContext';
import clsx from 'clsx';

export const MenuList = ({ classNameBase, onClick }) => {
  const location = useLocation();

  const { categories } = useGoods();

  const setActiveClass = category => {
    const currentCategory = new URLSearchParams(location.search).get('category');
    return currentCategory === category;
  };

  return (
    <ul className={`${classNameBase}__menu`}>
      {Object.entries(categories).map(([key, value]) => (
        <li key={key} className={`${classNameBase}__menu-item`}>
          <Link
            to={`/products?category=${key}`}
            className={clsx(`${classNameBase}__menu-link`, { active: setActiveClass(key) })}
            onClick={onClick}>
            {value}
          </Link>
        </li>
      ))}
    </ul>
  );
};
