export const Header = () => (
  <header className="header">
    <div className="container header__container">
      <a className="header__logo-link">
        <img src="image/logo.svg" alt="Логотип Cup Time" className="header__logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">
              Чай
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">
              Кофе
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">
              Чайники
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">
              Турки
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">
              Прочее
            </a>
          </li>
        </ul>
      </nav>
      <a className="header__cart-link">6</a>
      <div className="header__mobile-menu">
        <span className="header__mobile-line"></span>
        <span className="header__mobile-line"></span>
        <span className="header__mobile-line"></span>
      </div>
    </div>
  </header>
);
