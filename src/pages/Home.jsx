import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import api from '../api/baseAPI'

function Home() {

  const [ products, setProducts] = useState(null);

  useEffect(()=> {
    api.get('products?limit=20')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <h2 className='mt-5 dark:text-white'>All Products</h2>
      <div className='w-[75%] flex flex-wrap mt-7 mb-20 gap-10 justify-center'>
        {
          products?.map(product => (
            <Card key={product.id} {...product}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default Home