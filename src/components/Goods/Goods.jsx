import './goods.scss';
import { Product } from '@/components/Product/Product';
import { goodsArr } from '@/goodsArr';

export const Goods = () => (
  <section className="goods">
    <div className="container">
      <h2 className="goods__title">Чай</h2>
      <ul className="goods__list">
        {goodsArr.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  </section>
);
