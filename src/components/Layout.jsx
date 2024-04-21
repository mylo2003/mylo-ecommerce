import InputSearch from './InputSearch'

function Layout({ children }) {
  return (
    <div className='flex flex-col items-center mt-10 max-w-7xl mx-auto'>
      <InputSearch />
      {children}
    </div>
  )
}

export default Layout