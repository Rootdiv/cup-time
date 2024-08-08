import style from './Footer.module.scss';
import { useGoods } from '@/context/ProductContext';
import { MenuList } from '@/components/MenuList/MenuList';

export const Footer = () => {
  const { goodsRef } = useGoods();

  const scrollToGoods = () => {
    goodsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={style.footer}>
      <div className={`container ${style.container}`}>
        <a className={style.logoLink}>
          <img src="image/logo.svg" alt="Логотип Cup Time" className={style.logo} />
        </a>
        <div className={style.nav}>
          <MenuList className={style.menu} onClick={scrollToGoods} />
        </div>
        <div className={style.info}>
          <p className={style.copyright}>©CUPTIME, 2024</p>
          <p className={style.description}>Проект сделан в учебных целях</p>
          <ul className={style.developers}>
            <li className={style.developer}>
              Designer:
              <a
                href="https://t.me/Mrshmallowww"
                className={style.developerLink}
                target="_blank"
                rel="noreferrer">
                Anastasia Ilina
              </a>
            </li>
            <li className={style.developer}>
              Developer:
              <a
                href="https://t.me/Rootdiv"
                className={style.developerLink}
                target="_blank"
                rel="noreferrer">
                Vladimir
              </a>
            </li>
          </ul>
        </div>
        <div className={style.contacts}>
          <a href="mailto:CUPTIME@gmail.com" className={style.email}>
            CUPTIME@gmail.com
          </a>
          <ul className={style.social}>
            <li className={style.socialItem}>
              <a
                href="#"
                className={style.socialLink}
                target="_blank"
                aria-label="Канал в Телеграмм">
                <svg width="32" height="30" className={style.socialIcon}>
                  <use href="image/sprite.svg#tg" />
                </svg>
              </a>
            </li>
            <li className={style.socialItem}>
              <a href="#" className={style.socialLink} target="_blank" aria-label="Канал в YouTube">
                <svg width="32" height="30" className={style.socialIcon}>
                  <use href="image/sprite.svg#yt" />
                </svg>
              </a>
            </li>
            <li className={style.socialItem}>
              <a
                href="#"
                className={style.socialLink}
                target="_blank"
                aria-label="Группа во ВКонтакте">
                <svg width="32" height="30" className={style.socialIcon}>
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
