import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <a className="footer__logo-link">
        <img src="image/logo.svg" alt="Логотип Cup Time" className="footer__logo" />
      </a>
      <div className="footer__nav">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a href="#" className="footer__menu-link">
              Чай
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="#" className="footer__menu-link">
              Кофе
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="#" className="footer__menu-link">
              Чайники
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="#" className="footer__menu-link">
              Турки
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="#" className="footer__menu-link">
              Прочее
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <p className="footer__copyright">©CUPTIME, 2024</p>
        <p className="footer__description">Проект сделан в учебных целях</p>
        <ul className="footer__developers">
          <li className="footer__developer">
            Designer:
            <a href="https://t.me/Mrshmallowww" className="footer__developer-link">
              Anastasia Ilina
            </a>
          </li>
          <li className="footer__developer">
            Developer:
            <a href="https://t.me/Rootdiv" className="footer__developer-link">
              Vladimir
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__contacts">
        <a href="mailto:CUPTIME@gmail.com" className="footer__email">
          CUPTIME@gmail.com
        </a>
        <ul className="footer__social">
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <svg width="32" height="30" className="footer__social-icon">
                <use href="image/sprite.svg#tg" />
              </svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <svg width="32" height="30" className="footer__social-icon">
                <use href="image/sprite.svg#yt" />
              </svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <svg width="32" height="30" className="footer__social-icon">
                <use href="image/sprite.svg#vk" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
