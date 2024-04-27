import { useContext } from 'react'
import { LoadStatusContext } from '../context/LoadStatus'
import Layout from '../components/Layout'
import ErrorMessage from '../components/ErrorMessage';
import AllProducts from '../components/AllProducts';

function Home() {

  const { error } = useContext(LoadStatusContext);

  return (
    <Layout>
      {error.status && <ErrorMessage />}
      {!error.status && <AllProducts />}
    </Layout>
  )
}

export default Home