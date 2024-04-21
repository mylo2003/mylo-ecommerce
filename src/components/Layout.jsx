import PropTypes from 'prop-types'
import InputSearch from './InputSearch'

function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <div className='flex flex-col items-center mt-10 max-w-7xl mx-auto'>
      <InputSearch />
      {children}
    </div>
  )
}

export default Layout