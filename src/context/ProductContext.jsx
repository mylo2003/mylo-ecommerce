import { createContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  //Cart counter and total
  const [countCart, setCountCart] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //Product Details
  const [productToShow, setProductToShow] = useState({});

  //Products in cart and last purchased products store, index of bill
  const [cartProducts, setCartProducts] = useState([]);
  const [lastOrders, setLastOrders] = useState([]);
  const [index, setIndex] = useState(null);

  //Stores the order to the order history
  const [orderNum, setOrderNum] = useState(0);
  const [ordersHistory, setOrdersHistory] = useState([]);

  //ProductDetail | Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => {
    setIsCheckoutSideMenuOpen(false);
    setIsProductDetailOpen(false);
  };

  //ChecoutSideMenu | Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckout = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckout = () => {
    setIsProductDetailOpen(false);
    setIsCheckoutSideMenuOpen(false);
  };

  //Add products to cart
  const addProductToCart = (e, productData) => {
    e.stopPropagation();
    openCheckout();
    setCartProducts([...cartProducts, productData]);
    setCountCart(countCart + 1);
    setTotalAmount((parseFloat(totalAmount) + parseFloat(productData.price)).toFixed(2));
  };

  //Remove products from cart
  const handleDelete = (id, price) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);

    setCartProducts(filteredProducts);
    setCountCart(countCart - 1);
    setTotalAmount((parseFloat(totalAmount) - parseFloat(price)).toFixed(2));
  };

  //Stores products from cart to history
  const addOrderAtHistory = (date) => {
    const newOrderNum = orderNum + 1;
    setOrderNum(newOrderNum);

    const updatedOrdersHistory = [...ordersHistory, { id: orderNum, monto: totalAmount, cant: countCart, date: date }];
    setOrdersHistory(updatedOrdersHistory);

    const updatedLastOrders = [...lastOrders, cartProducts];
    setLastOrders(updatedLastOrders);

    localStorage.setItem('orderNum', newOrderNum.toString());
    localStorage.setItem('ordersHistory', JSON.stringify(updatedOrdersHistory));
    localStorage.setItem('lastOrders', JSON.stringify(updatedLastOrders));
    
    setCartProducts([]);
    setProductToShow({});
    setCountCart(0);
    setTotalAmount(0);
    closeCheckout();
  };

  useEffect(() => {
    const storedOrdersHistory = localStorage.getItem('ordersHistory');
    const storedLastOrders = localStorage.getItem('lastOrders');
    const storedOrderNum = localStorage.getItem('orderNum');

    if (storedOrdersHistory) {
      setOrdersHistory(JSON.parse(storedOrdersHistory));
    }
  
    if (storedLastOrders) {
      setLastOrders(JSON.parse(storedLastOrders));
    }
  
    if (storedOrderNum) {
      setOrderNum(parseInt(storedOrderNum));
    }
  }, []);

  useEffect(() => {
    const switchTheme = document.querySelector('html');
    if (darkMode) {
      switchTheme.classList.add('dark');
    } else {
      switchTheme.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <ShoppingCartContext.Provider value={{
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
      addOrderAtHistory,
      ordersHistory,
      setOrderNum,
      orderNum,
      lastOrders,
      setIndex,
      index,
      darkMode,
      setDarkMode,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };