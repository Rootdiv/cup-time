import './product.scss';
import { useEffect, useState } from 'react';
import { API_URL } from '@/const';
import { ProductModal } from '@/components/ReactModal/ReactModal';

export const Product = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalIsOpen ? 'hidden' : 'auto';
  }, [modalIsOpen]);

  const openModal = event => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li className="goods__item">
      <a href="#" className="goods__link" onClick={openModal}>
        <article className="product">
          <img src={`${API_URL}${data.img}`} alt={data.title} className="product__image" />
          <div className="product__content">
            <h3 className="product__title">{data.title}</h3>
            <p className="product__price">{data.price}&nbsp;&#8381;</p>
          </div>
        </article>
      </a>
      <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} data={data} />
    </li>
  );
};
