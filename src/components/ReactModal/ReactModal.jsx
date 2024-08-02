import './modal.scss';
import { API_URL } from '@/const';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    borderRadius: '6px',
  },
};

ReactModal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  if (!data) {
    return null;
  }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Product Modal">
      <div className="modal">
        <img src={`${API_URL}${data.img}`} alt={data.title} className="modal__image" />
        <div className="modal__content">
          <div className="info">
            <h2 className="modal__title">{data.title}</h2>
            <p className="modal__price">{data.price}&nbsp;&#8381;</p>
          </div>
          <ul className="modal__additional">
            {Object.entries(data.additional).map(([key, value]) => (
              <li className="modal__additional-list" key={key}>
                <span className="modal__additional-item">{key}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <div className="modal__cart">
            <div className="modal__quantity">
              <button
                type="button"
                className="modal__quantity-btn modal__quantity-btn_minus"></button>
              <input type="number" className="modal__quantity-count" defaultValue={1} />
              <button
                type="button"
                className="modal__quantity-btn modal__quantity-btn_plus"></button>
            </div>
            <button type="button" className="modal__cart-add">
              Добавить
            </button>
          </div>
        </div>
        <button type="button" className="modal__close" onClick={onRequestClose} />
      </div>
    </ReactModal>
  );
};
