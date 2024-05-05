import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ProductContext';
import Layout from '../components/Layout'
import OrderHistory from '../components/OrderHistory';

function MyOrders() {

  const { ordersHistory } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='w-[300px] md:w-[600px] h-[70vh] flex flex-wrap py-3 justify-center items-center rounded-xl px-5 md:px-10 shadow-2xl border border-primary bg-white dark:border-white dark:bg-dark-secondary dark:text-background'>
        <div className='w-full flex justify-between'>
          <NavLink to='/' className='w-1/4 hover:text-primary'><i className='bx bx-chevron-left bx-sm '></i></NavLink>
          <h2 className="w-2/4 text-center text-text font-semibold text-lg dark:text-background">My Orders</h2>
          <i className='bx bx-receipt bx-sm w-1/4 text-right'></i>
        </div>
        <div className='text-xs md:text-lg w-full flex items-center justify-between border-y border-gray-400'>
          <label className='w-1/5 text-center'>Order</label>
          <label className='w-1/5 text-center'>Total</label>
          <label className='w-1/5 text-center'>Items</label>
          <label className='w-1/5 text-center'>Date</label>
          <label className='w-1/5 text-center'>See details</label>
        </div>
        <div className="overflow-auto w-full h-[80%] rounded-lg border-b border-dark-accent dark:bg-dark-secondary">
          {
            ordersHistory.map(product => (
              <OrderHistory key={product.id} {...product} />
            ))
          }
        </div>
      </div>
    </Layout>
  );
}

export default MyOrders;