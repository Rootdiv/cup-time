import './footer.scss';
import { useGoods } from '@/context/ProductContext';
import { MenuList } from '@/components/MenuList/MenuList';

export const Footer = () => {
  const { goodsRef } = useGoods();

  const scrollToGoods = () => {
    goodsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <a className="footer__logo-link">
          <img src="image/logo.svg" alt="Логотип Cup Time" className="footer__logo" />
        </a>
        <div className="footer__nav">
          <MenuList classNameBase="footer" onClick={scrollToGoods} />
        </div>
        <div className="footer__info">
          <p className="footer__copyright">©CUPTIME, 2024</p>
          <p className="footer__description">Проект сделан в учебных целях</p>
          <ul className="footer__developers">
            <li className="footer__developer">
              Designer:
              <a
                href="https://t.me/Mrshmallowww"
                className="footer__developer-link"
                target="_blank"
                rel="noreferrer">
                Anastasia Ilina
              </a>
            </li>
            <li className="footer__developer">
              Developer:
              <a
                href="https://t.me/Rootdiv"
                className="footer__developer-link"
                target="_blank"
                rel="noreferrer">
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
              <a
                href="#"
                className="footer__social-link"
                target="_blank"
                aria-label="Канал в Телеграмм">
                <svg width="32" height="30" className="footer__social-icon">
                  <use href="image/sprite.svg#tg" />
                </svg>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                href="#"
                className="footer__social-link"
                target="_blank"
                aria-label="Канал в YouTube">
                <svg width="32" height="30" className="footer__social-icon">
                  <use href="image/sprite.svg#yt" />
                </svg>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                href="#"
                className="footer__social-link"
                target="_blank"
                aria-label="Группа во ВКонтакте">
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
};
