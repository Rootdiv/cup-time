import { MenuList } from '@/components/MenuList/MenuList';
import { useCart } from '@/context/CartContext';
import style from './Header.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { cart } = useCart();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? 'hidden' : 'auto';
  }, [isOpenMenu]);

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  return (
    <header className={style.header}>
      <div className="container" id={style.container}>
        <Link to="/" className={style.logoLink}>
          <img src="image/logo.svg" alt="Логотип Cup Time" className={style.logo} />
        </Link>
        <nav className={clsx(style.nav, { [style.navActive]: isOpenMenu })}>
          <MenuList onClick={closeMenu} />
          <button
            type="button"
            className={style.closeBtn}
            aria-label="Закрыть меню"
            onClick={closeMenu}>
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
        <div className={style.control}>
          <Link to="/cart" className={style.cartLink}>
            {cart?.length || 0}
          </Link>
          <button
            type="button"
            className={style.burger}
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
