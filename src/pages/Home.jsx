import { useContext, useEffect } from 'react';
import { LoadStatusContext } from '../context/LoadStatus';
import Layout from '../components/Layout';
import ErrorMessage from '../components/ErrorMessage';
import AllProducts from '../components/AllProducts';

function Home() {
  const { error, setSearchedItem, setSearchedCategory } = useContext(LoadStatusContext);

  useEffect(() => {
    return () => {
      setSearchedItem('');
      setSearchedCategory('');
    }
  }, []);

  return (
    <Layout>
      {error.status && <ErrorMessage />}
      {!error.status && <AllProducts />}
    </Layout>
  );
}

export default Home;