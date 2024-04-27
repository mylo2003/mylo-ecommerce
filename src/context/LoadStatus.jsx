import { createContext, useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from './ProductContext';
import api from '../api/baseAPI';

const LoadStatusContext = createContext();

function LoadStatusProvider({ children }) {

  const {setProducts} = useContext(ShoppingCartContext);

  //Estado de loading y error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({status: false, message: ''});
  
  useEffect(() => {
    setTimeout(()=> {
      api.get('products?limit=20')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('xd', err)
        setError({status: true, message: err});
      })
    }, 800)
  }, []);

  return (
    <LoadStatusContext.Provider value={{
      loading,
      error,
    }}>
      {children}
    </LoadStatusContext.Provider>
  )
}

export { LoadStatusContext, LoadStatusProvider }