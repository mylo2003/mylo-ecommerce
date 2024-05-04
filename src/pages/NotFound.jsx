import Layout from '../components/Layout';

function NotFound() {
  return (
    <Layout>
      <div className="my-10 flex flex-col items-center dark:text-white">
        <i className='bx bx-error-circle bx-lg mt-12 text-red-400'></i>
        <p className="mt-6 text-2xl">Whoops... </p>
        <p className="text-2xl">The page you&apos;re trying to find <span className="font-semibold text-red-400">doesn&apos;t exist.</span></p>
      </div>
    </Layout>
  );
}

export default NotFound;