import style from './Product.module.scss';
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
    <li className={style.item}>
      <a href="#" className={style.link} onClick={openModal}>
        <article className={style.product}>
          <img src={`${API_URL}${data.img}`} alt={data.title} className={style.image} />
          <div className={style.content}>
            <h3 className={style.title}>{data.title}</h3>
            <p className={style.price}>{data.price}&nbsp;&#8381;</p>
          </div>
        </article>
      </a>
      <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} data={data} />
    </li>
  );
};
