import { API_URL } from '@/const';
import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [goods, setGoods] = useState([]);
  const [category, setCategory] = useState('');

  const categories = {
    tea: 'Чай',
    coffee: 'Кофе',
    teapots: 'Чайники',
    cezves: 'Турки',
    other: 'Прочее',
  };

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}/api/products/${category}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(data => {
          setGoods(data);
        })
        .catch(error => {
          console.error(`Error fetching goods: ${error}`);
        });
    }
  }, [category]);

  return (
    <ProductContext.Provider value={{ goods, setCategory, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGoods = () => useContext(ProductContext);
