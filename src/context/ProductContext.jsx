import { createContext, useState } from 'react'

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  //Almacena los productos que trae la api
  const [products, setProducts] = useState(null);

  //Contador de productos en el carrito y total
  const [countCart, setCountCart] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //Detalles del producto
  const [productToShow, setProductToShow] = useState({});
  
  //Almacena los productos en el carrito
  const [cartProducts, setCartProducts] = useState([]);
  
  //ProductDetail | Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => {
    setIsCheckoutSideMenuOpen(false);
    setIsProductDetailOpen(false);
  }

  //ChecoutSideMenu | Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckout = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckout = () => {
    setIsProductDetailOpen(false);
    setIsCheckoutSideMenuOpen(false);
  };

  //Agrega productos al carrito
  const addProductToCart = (e, productData) => {
    e.stopPropagation();
    openCheckout();
    setCartProducts([...cartProducts, productData]);
    setCountCart(countCart + 1);
    setTotalAmount(totalAmount + productData.price);
  }

  //Elimina productos del carrito
  const handleDelete = (id, price) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);

    setCartProducts(filteredProducts);
    setCountCart(countCart - 1);
    setTotalAmount(totalAmount - price);
  }

  return (
    <ShoppingCartContext.Provider value={{
      products,
      setProducts,
      countCart,
      setCountCart,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      addProductToCart,
      isCheckoutSideMenuOpen,
      openCheckout,
      closeCheckout,
      totalAmount,
      setTotalAmount,
      handleDelete,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }