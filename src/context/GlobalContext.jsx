import { createContext, useEffect, useState } from 'react'
import api from '../api/baseAPI';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {

  //Almacena los productos que trae la api
  const [products, setProducts] = useState(null);

  //Contador de productos en el carrito
  const [count, setCount] = useState(0);
  
  //Detalles del producto
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
 
  //Almacena los productos en el carrito
  const [cartProducts, setCartProducts] = useState([]);
  
  useEffect(()=> {
    console.log(cartProducts)
  }, [cartProducts])
  
  //Funciones para abrir o cerrar los detalles del producto
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  useEffect(() => {
    api.get('products?limit=20')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ShoppingCartContext.Provider value={{
      products,
      setProducts,
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }