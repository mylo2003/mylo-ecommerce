import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/ProductContext";
import OrderCard from "./OrderCard";

function CheckoutSideMenu() {
  
  const { isCheckoutSideMenuOpen, closeCheckout, cartProducts, countCart, totalAmount, addOrderAtHistory } = useContext(ShoppingCartContext);

  let date = new Date();
  let orderDay = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}` ;
  
  return (
    <aside className={`${(isCheckoutSideMenuOpen) ? 'bottom-0 md:bottom-10' : '-bottom-[80vh]'} w-[280px] md:w-[450px] h-[60vh] md:h-[60vh] lg:h-[80vh] fixed transition-all right-10 rounded-t-xl px-5 md:px-10 pt-7 pb-16 md:py-6 shadow-2xl border border-b-0 border-primary bg-white dark:text-background dark:border-white dark:bg-dark-secondary`}>
      <div className="flex justify-between">
        <h2 className="text-text font-semibold w-[85%] md:w-[90%] text-base md:text-lg flex justify-between dark:text-background">My Order <span className=" text-gray-400 font-medium">Cant: {countCart}</span></h2>
        <button onClick={closeCheckout}>
          <i className='bx bx-x-circle bx-sm transition-colors hover:text-red-500'></i>
        </button>
      </div>
      <div className="my-3 overflow-auto w-full h-[80%] rounded-lg border-b border-gray-400 dark:bg-dark-secondary">
        {
          cartProducts.map(product => (
            <OrderCard key={product.id} {...product} visible={true}/>
          ))
        }
      </div>
      <div className="flex justify-between items-center px-2">
        <span>TOTAL:</span>
        <span className="font-semibold">$ {totalAmount}</span>
      </div>
      <NavLink to='/my-orders' onClick={() => totalAmount != 0 ? addOrderAtHistory(orderDay) : null} 
        className='bg-primary text-white w-full mt-1 h-10 flex items-center justify-center rounded-lg transition-all hover:text-text hover:border hover:border-black hover:bg-white'>
        Checkout
      </NavLink>
    </aside>
  );
}

export default CheckoutSideMenu;