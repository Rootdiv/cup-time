import { useCart } from '@/context/CartContext';
import { useGoods } from '@/context/ProductContext';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { categories } = useGoods();

  const setActiveClass = category => {
    const currentCategory = new URLSearchParams(location.search).get('category');
    return currentCategory === category;
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo-link">
          <img src="image/logo.svg" alt="Логотип Cup Time" className="header__logo" />
        </Link>
        <nav className="header__nav">
          <ul className="header__menu">
            {Object.entries(categories).map(([key, value]) => (
              <li key={key} className="header__menu-item">
                <Link
                  to={`/products?category=${key}`}
                  className={clsx('header__menu-link', { active: setActiveClass(key) })}>
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/cart" className="header__cart-link">
          {cart?.length || 0}
        </Link>
        <div className="header__mobile-menu">
          <span className="header__mobile-line"></span>
          <span className="header__mobile-line"></span>
          <span className="header__mobile-line"></span>
        </div>
      </div>
    </header>
  );
};
