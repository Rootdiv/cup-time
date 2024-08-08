import style from './Promo.module.scss';
import { Link, useSearchParams } from 'react-router-dom';

export const Promo = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <section className={style.promo}>
      <div className="container">
        <div className={style.container}>
          <h1 className={style.title}>Попробуй новый вкус Арабики</h1>
          {category !== 'coffee' && (
            <Link to="/products?category=coffee" className={style.link}>
              Перейти к кофе
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
