import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

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
            <li className="header__menu-item">
              <Link
                to="/products?category=tea"
                className={clsx('header__menu-link', { active: setActiveClass('tea') })}>
                Чай
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="/products?category=coffee"
                className={clsx('header__menu-link', { active: setActiveClass('coffee') })}>
                Кофе
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="/products?category=teapots"
                className={clsx('header__menu-link', { active: setActiveClass('teapots') })}>
                Чайники
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="/products?category=cezves"
                className={clsx('header__menu-link', { active: setActiveClass('cezves') })}>
                Турки
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="/products?category=other"
                className={clsx('header__menu-link', { active: setActiveClass('other') })}>
                Прочее
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/cart" className="header__cart-link">
          6
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
