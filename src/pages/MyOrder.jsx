import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ProductContext';
import Layout from '../components/Layout';
import OrderCard from '../components/OrderCard';

function MyOrder() {

  const { lastOrders, ordersHistory, index } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='w-[300px] md:w-[600px] h-[70vh] md:h-[70vh] flex flex-wrap items-center rounded-xl py-5 md:py-7 px-5 md:px-10 shadow-2xl border border-primary dark:text-background bg-white dark:border-white dark:bg-dark-secondary'>
        <div className='w-full flex justify-between'>
          <NavLink to='/my-orders' className='w-1/4 hover:text-primary'><i className='bx bx-chevron-left bx-sm '></i></NavLink>
          <h2 className="w-2/4 text-center text-text font-semibold text-lg dark:text-background">My Order # {ordersHistory[index]?.id != undefined ? ordersHistory[index]?.id + 1 : ''}</h2>
          <i className='bx bx-shopping-bag bx-sm w-1/4 text-right'></i>
        </div>
        <div className="my-3 overflow-auto w-full h-[70%] md:h-[80%] rounded-lg border-b border-dark-accent ">
          { (index != null) ?      
             lastOrders[index].map(order => (
              <OrderCard key={order.id} {...order} visible={false} />
            )) : ''
          }
        </div>
        <div className='flex flex-col md:flex-row w-full md:h-8 px-2'>
          <p className='md:w-2/6 h-full flex'><i className='bx bx-shopping-bag bx-sm pr-1'></i>Items: {ordersHistory[index]?.cant}</p>
          <p className='md:w-3/6 h-full flex'><i className='bx bx-calendar bx-sm pr-1'></i>Order Placed: {ordersHistory[index]?.date}</p>
          <p className='md:w-2/6 h-full flex md:justify-end font-bold truncate'><i className='bx bx-dollar-circle bx-sm pr-1'></i>Total: {ordersHistory[index]?.monto}</p>
        </div>
      </div>
    </Layout>
  );
}

export default MyOrder;