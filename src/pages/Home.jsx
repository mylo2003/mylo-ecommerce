import { useContext } from 'react'
import { ShoppingCartContext } from '../context/GlobalContext'
import Layout from '../components/Layout'
import Card from '../components/Card'
import ProductDetails from '../components/ProductDetails';

function Home() {

  const { products } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h2 className='mt-5 dark:text-white'>All Products</h2>
      <div className='w-[75%] flex flex-wrap mt-7 mb-20 gap-10 justify-center'>
        {
          products?.map(product => (
            <Card key={product.id} {...product} product={product} />
          ))
        }
      </div>
      <ProductDetails />
    </Layout>
  )
}

export default Home