import { useContext } from 'react';
import { LoadStatusContext } from '../context/LoadStatus';
import LoadingCard from './LoadingCard';
import Card from './Card';
import ProductDetails from './ProductDetails';
import InputSearch from './InputSearch';

function AllProducts() {

  const { loading, filteredItems, searchedCategory } = useContext(LoadStatusContext);
  
  return (
    <>
      <InputSearch />
      {
        searchedCategory != '' 
        ?
        <h2 className='mt-5 dark:text-white'>{searchedCategory}</h2>
        :
        <h2 className='mt-5 dark:text-white'>All Products</h2>
      }
      <div className='w-[75%] justify-center lg:justify-start flex flex-wrap mt-7 mb-20 gap-10'>
        {loading && <LoadingCard />}
        {
          filteredItems?.length > 0 
          ?
          filteredItems?.map(product => (
            <Card key={product.id} {...product} product={product} />
          ))
          :
          <div className='w-full mt-10 dark:text-background text-center'>
            <i className='bx bx-sad bx-sm'></i>
            <p className=''>No Items Found </p>
          </div>
        }
      </div>
      <ProductDetails />
    </>
  );
}

export default AllProducts;