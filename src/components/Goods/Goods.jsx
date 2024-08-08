import { SkeletonLoader } from '@/components/SkeletonLoader/SkeletonLoader';
import style from './Goods.module.scss';
import { Product } from '@/components/Product/Product';
import { useGoods } from '@/context/ProductContext';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Goods = () => {
  const [searchParams] = useSearchParams();
  const { goods, setCategory, categories, goodsRef } = useGoods();
  const category = searchParams.get('category');

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  const categoryTitle = categories[category] || 'Товары';

  return (
    <section className={style.goods} ref={goodsRef}>
      <div className="container">
        <h2 className={style.title}>{categoryTitle}</h2>
        <ul className={style.list}>
          {goods.length ? (
            goods.map(product => <Product key={product.id} data={product} />)
          ) : (
            <SkeletonLoader />
          )}
        </ul>
      </div>
    </section>
  );
};
