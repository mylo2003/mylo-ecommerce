import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../context/ProductContext';
import { LoadStatusContext } from '../context/LoadStatus';

function NavBar() {

  const { openCheckout, darkMode, setDarkMode } = useContext(ShoppingCartContext);
  const { setSearchedCategory } = useContext(LoadStatusContext);

  const activeStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      textDecorationThickness: isActive ? '1px' : "",
      textUnderlineOffset: isActive ? '4px' : "",
    };
  };

  const renderThemeIcon = () => {
    const currentTheme = darkMode;
    localStorage.setItem('darkMode', JSON.stringify(currentTheme));

    return (
      (darkMode !== true)
        ?
        <i className='bx bx-moon bx-sm transition-all hover:text-secondary cursor-pointer'></i>
        :
        <i className='bx bxs-moon bx-sm transition-all hover:text-secondary cursor-pointer'></i>
    );
  };

  return (
    <div className='w-full border-b-2 border-white/80 dark:border-dark-secondary shadow-md sticky top-0 z-20 backdrop-blur-md bg-background/70 dark:bg-dark/80'>
      <nav className='flex justify-between items-center max-w-7xl h-24 w-full mx-auto  border-gray-400  px-2 text-text dark:text-[#F6F8F8]'>
        <ul className=' w-[50%] flex justify-between items-baseline '>
          <li className='font-bold text-xl'>
            <NavLink to='/'
              onClick={() => setSearchedCategory('')}
              className="transition-all hover:text-secondary">
              Mylommerce
            </NavLink>
          </li>
          <li>
            <NavLink to='/'
              onClick={() => setSearchedCategory('')}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/electronics'
              onClick={() => setSearchedCategory('electronics')}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/jewelery'
              onClick={() => setSearchedCategory('jewelery')}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/mens-clothing'
              onClick={() => setSearchedCategory("men's clothing")}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Men&apos;s clothing
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/womens-clothing'
              onClick={() => setSearchedCategory("women's clothing")}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Women&apos;s clothing
            </NavLink>
          </li>
        </ul>

        <ul className='w-[22%] flex justify-between'>
          <li className='text-gray-500'>
            camilo@gmail.com
          </li>
          {/*
          <li>
            <NavLink to='/sign-in'
              style={activeStyle}
              className='transition-all hover:text-secondary'
            >
              Sign In
            </NavLink>
          </li> 
          */}
          <li>
            <NavLink to='/my-account'
              className='transition-all hover:text-secondary'
            >
              <i className='bx bx-user-circle bx-sm'></i>
            </NavLink>
          </li>
          <li onClick={openCheckout}>
            <i className='bx bx-cart-alt bx-sm transition-all hover:text-secondary cursor-pointer'></i>
          </li>
          <li>
            <NavLink to='/my-orders'
              className='transition-all hover:text-secondary'
            >
              <i className='bx bx-purchase-tag bx-sm' ></i>
            </NavLink>
          </li>
          <li onClick={() => setDarkMode(!darkMode)}>
            {renderThemeIcon()}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;