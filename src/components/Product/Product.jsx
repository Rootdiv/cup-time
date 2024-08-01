import './product.scss';

export const Product = ({ title, image, price }) => (
  <li className="goods__item">
    <article className="product">
      <img src={image} alt={title} className="product__image" />
      <div className="product__content">
        <h3 className="product__title">{title}</h3>
        <p className="product__price">{price}&nbsp;&#8381;</p>
      </div>
    </article>
  </li>
);
