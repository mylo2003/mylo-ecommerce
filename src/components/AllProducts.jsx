import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ProductContext';
import { LoadStatusContext } from '../context/LoadStatus';
import LoadingCard from './LoadingCard';
import Card from './Card';
import ProductDetails from './ProductDetails';
import InputSearch from './InputSearch';

function AllProducts() {

  const { products } = useContext(ShoppingCartContext);
  const { loading } = useContext(LoadStatusContext);

  return (
    <>
      <InputSearch />
      <h2 className='mt-5 dark:text-white'>All Products</h2>
      <div className='w-[75%] flex flex-wrap mt-7 mb-20 gap-10 justify-center'>
        {loading && <LoadingCard />}
        {
          products?.map(product => (
            <Card key={product.id} {...product} product={product} />
          ))
        }
      </div>
      <ProductDetails />
    </>
  )
}

export default AllProducts