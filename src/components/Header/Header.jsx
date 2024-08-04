import { useCart } from '@/context/CartContext';
import { useGoods } from '@/context/ProductContext';
import clsx from 'clsx';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { categories } = useGoods();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const setActiveClass = category => {
    const currentCategory = new URLSearchParams(location.search).get('category');
    return currentCategory === category;
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo-link">
          <img src="image/logo.svg" alt="Логотип Cup Time" className="header__logo" />
        </Link>
        <nav className={clsx('header__nav', { header__nav_active: isOpenMenu })}>
          <ul className="header__menu">
            {Object.entries(categories).map(([key, value]) => (
              <li key={key} className="header__menu-item">
                <Link
                  to={`/products?category=${key}`}
                  className={clsx('header__menu-link', { active: setActiveClass(key) })}
                  onClick={closeMenu}>
                  {value}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="header__close-btn" onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none">
              <path fill="#D9D9D9" d="m7.282 7.075 14.142 14.142-.707.708L6.575 7.782z" />
              <path fill="#D9D9D9" d="M6.575 21.217 20.717 7.075l.707.707L7.282 21.924z" />
            </svg>
          </button>
        </nav>
        <div className="header__control">
          <Link to="/cart" className="header__cart-link">
            {cart?.length || 0}
          </Link>
          <button
            type="button"
            className="header__burger"
            aria-label="Открыть меню"
            onClick={openMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none">
              <path fill="#D9D9D9" d="M4 9.5h20v1H4zM4 14.5h20v1H4zM4 19.5h20v1H4z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
