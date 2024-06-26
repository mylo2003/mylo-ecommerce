import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/ProductContext";

function OrderHistory({ id, monto, cant, date }) {

  const { setIndex } = useContext(ShoppingCartContext);

  return (
    <div className="flex h-[60px] pl-3 md:pl-0 shadow rounded-lg w-full my-1 bg-gray-200 border-b border-gray-400 dark:bg-dark dark:border-dark-accent">
      <div className="flex justify-between h-full w-full items-center text-xs md:text-lg">
        <label className="w-1/5 flex justify-center items-center gap-1"><i className='bx bxs-purchase-tag'></i>#{id + 1}</label>
        <label className='w-1/5 text-left pl-5'><i className='bx bx-dollar-circle pr-1 hidden md:inline-block'></i>{monto}</label>
        <label className='w-1/5 text-left pl-5'><i className='bx bx-shopping-bag pr-1 hidden md:inline-block'></i>{cant}</label>
        <label className='w-1/5 text-left mr-5'><i className='bx bx-calendar pr-1 hidden md:inline-block'></i>{date}</label>
        <NavLink to='/my-order' onClick={()=> setIndex(id)} className=" hover:text-primary mr-2 lg:mr-5"><i className='bx bx-chevron-right bx-sm'></i></NavLink>
      </div>
    </div>
  );
}

export default OrderHistory;