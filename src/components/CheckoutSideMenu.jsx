import { useContext } from "react";
import { ShoppingCartContext } from "../context/ProductContext";
import OrderCard from "./OrderCard";

function CheckoutSideMenu() {

  const { isCheckoutSideMenuOpen, closeCheckout, cartProducts, countCart, totalAmount } = useContext(ShoppingCartContext);


  return (
    <aside className={`w-[450px] h-[80vh] ${(isCheckoutSideMenuOpen) ? 'bottom-10' : '-bottom-[80vh]'} fixed transition-all right-10  rounded-t-xl px-10 py-6 shadow-2xl border border-b-0 border-primary bg-white`}>
      <div className="flex justify-between">
        <h2 className="text-text font-semibold w-[90%] text-lg flex justify-between">My Order <span className=" text-gray-400 font-medium">Cant: {countCart}</span></h2>
        <button onClick={closeCheckout}>
          <i className='bx bx-x-circle bx-sm hover:text-secondary'></i>
        </button>
      </div>
      <div className="my-3 overflow-auto w-full h-[80%] bg-gray-200 rounded-lg border-b border-gray-400">
        {
          cartProducts.map(product => (
            <OrderCard key={product.id} {...product}/>
          ))
        }
      </div>
      <div className="flex justify-between items-center px-2">
        <span>TOTAL</span>
        <span className="font-bold">$ {totalAmount}</span>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu