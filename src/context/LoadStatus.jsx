import { createContext, useEffect, useState } from 'react';

const LoadStatusContext = createContext();

function LoadStatusProvider({ children }) {

  //Api
  const api = 'https://fakestoreapi.com/products';

  //All products
  const [products, setProducts] = useState(null);

  //In case of loading or error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: '' });

  //Get Products by title and category
  const [searchedItem, setSearchedItem] = useState('');
  const [searchedCategory, setSearchedCategory] = useState('');

  //Filtered Products to show
  const [filteredItems, setFilteredItems] = useState(null);

  //Fetchin data

  useEffect(() => {
    setTimeout(() => {
      const dataFetching = async () => {
        try {
          const res = await fetch(api);

          if (!res.ok) throw new Error('Something wrong');

          const data = await res.json();

          setProducts(data);
          setLoading(false);
        } catch (error) {
          setError({ status: true, message: error });
        }
      }
      dataFetching();
    }, 500);
    return;
  }, []);



  const filtered = (products, searchedItem) => {
    return products.filter(
      (product) => (
        product.title.toLowerCase().includes(searchedItem.toLowerCase()) ||
        product.category.includes(searchedItem.toLowerCase()) ||
        product.description.toLowerCase().includes(searchedItem.toLowerCase())
      )
    );
  };

  const filteredCategory = (products, searchedCategory) => {
    return products.filter(
      (product) => (
        product.category === searchedCategory
      )
    );
  };

  useEffect(() => {
    if (searchedItem) {
      setFilteredItems(filtered(products, searchedItem));
    }
    else if (searchedCategory) {
      setFilteredItems(filteredCategory(products, searchedCategory));
    }
    else if (searchedCategory === '/' || searchedItem === '') {
      setFilteredItems(products);
    }
  }, [products, searchedItem, searchedCategory]);

  return (
    <LoadStatusContext.Provider value={{
      loading,
      error,
      searchedItem,
      setSearchedItem,
      filteredItems,
      setFilteredItems,
      searchedCategory,
      setSearchedCategory,
    }}>
      {children}
    </LoadStatusContext.Provider>
  );
}

export { LoadStatusContext, LoadStatusProvider };