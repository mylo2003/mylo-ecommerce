import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../context/ProductContext';

function NavBar() {

  const { openCheckout } = useContext(ShoppingCartContext);

  const activeStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      textDecorationThickness: isActive ? '1px' : "",
      textUnderlineOffset: isActive ? '4px' : "",
    };
  }
  return (
    <div className='w-full border-b-2 border-white/80 dark:border-dark-secondary shadow-md sticky top-0 z-20 backdrop-blur-md bg-background/70 dark:bg-dark/80'>
      <nav className='flex justify-between items-center max-w-7xl h-24 w-full mx-auto  border-gray-400  px-2 text-text dark:text-[#F6F8F8]'>
        <ul className=' w-[38%] flex justify-between items-baseline '>
          <li className='font-bold text-xl'>
            <NavLink to='/' className="transition-all hover:text-secondary">
              Mylommerce
            </NavLink>
          </li>
          <li>
            <NavLink to='/'
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink to='/clothes'
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink to='/electronics'
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to='/furnitures'
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink to='/toys'
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Toys
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/others'
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Others
            </NavLink>
          </li> */}
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
          <li onClick={
            () => {
              const darkmode = document.querySelector('html');
              const eDark = document.querySelector('#eDark');
              darkmode.classList.toggle('dark');
              eDark.classList.toggle('bxs-moon')
            }
          }>
            <i id='eDark' className='bx bx-moon bx-sm transition-all hover:text-secondary cursor-pointer'></i>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar