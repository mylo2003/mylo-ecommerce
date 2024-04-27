import { createContext, useState } from 'react'

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

  //Funciones para abrir o cerrar los detalles del producto
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const addProductToCart = (e, productData, viewDetail = true) => {
    e.stopPropagation();
    if (viewDetail) e.target.classList.add('bxs-plus-circle');
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
  }

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
      addProductToCart,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }