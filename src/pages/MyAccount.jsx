import Layout from '../components/Layout';

function MyAccount() {
  return (
    <Layout>
      <div className='md:w-[550px] h-[500px] md:h-[400px] px-1 md:px-0 text-center flex flex-col justify-center items-center dark:text-background'>
        <h2 className='text-lg mb-2'>Hey! It&apos;s me, <span className='text-primary'>Mylo!</span></h2>
        <p className='text-xl'>This project was <span className='text-primary'>coding</span> with the objective of improving my React, Tailwind and Vite skills.</p>
        <p className='my-5'>Visit my github for more projects.</p>
        <a href="https://github.com/mylo2003" target='_blank'><i className='bx bxl-github bx-lg hover:text-secondary'></i></a>
      </div>
    </Layout>
  );
}

export default MyAccount;