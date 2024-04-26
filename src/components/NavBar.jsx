import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../context/GlobalContext';

function NavBar() {
  const activeStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      textDecorationThickness: isActive ? '1px' : "",
      textUnderlineOffset: isActive ? '4px' : "",
    };
  }
  const { count } = useContext(ShoppingCartContext);

  return (
    <div className='w-full border-b-2 shadow-md sticky top-0 z-20 backdrop-blur-md bg-background/70 dark:bg-[#030707]/70'>
      <nav className='flex justify-between items-center max-w-7xl h-24 w-full mx-auto  border-gray-400  px-2 text-text dark:text-[#F6F8F8]'>
        <ul className=' w-[43%] flex justify-between items-baseline '>
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
          <li>
            <NavLink to='/others'
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Others
            </NavLink>
          </li>
        </ul>

        <ul className='w-[20%] flex justify-between'>
          <li className='text-gray-500'>
            camilo@gmail.com
          </li>
          {/* <li>
            <NavLink to='/my-orders'
              style={activeStyle}
              className='transition-all hover:text-secondary'
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-in'
              style={activeStyle}
              className='transition-all hover:text-secondary'
            >
              Sign In
            </NavLink>
          </li> */}
          <li>
            <NavLink to='/my-account'
              style={activeStyle}
              className='transition-all hover:text-secondary'
            >
              <i className='bx bx-user-circle bx-sm'></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='/my-orders'>
              <i className='bx bx-cart-alt bx-sm transition-all hover:text-secondary cursor-pointer'></i>
            </NavLink>
            <span className='text-sm  text-primary px-2'>{count}</span>
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