import { NavLink } from 'react-router-dom'
import { MdOutlineDarkMode } from 'react-icons/md'

function NavBar() {
  const activeStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      textDecorationThickness: isActive ? '1px' : "",
      textUnderlineOffset: isActive ? '4px' : "",
    };
  }

  return (
    <nav className='flex justify-between items-center h-24 w-full mx-auto border-b-2 border-gray-400 shadow-b-xl text-text dark:text-[#F6F8F8]'>
      <ul className=' w-[43%] flex justify-between items-baseline'>
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

      <ul className='w-[33%] flex justify-between items-baseline'>
        <li className='text-gray-500'>
          camilo@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' 
            style={activeStyle}
            className="transition-all hover:text-secondary"
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' 
            style={activeStyle}
            className="transition-all hover:text-secondary"
          >
            👤
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'
            style={activeStyle}
            className="transition-all hover:text-secondary"
          >
            Sign In
          </NavLink>
        </li>
        <li>
          🛒
        </li>
        <li>
          <MdOutlineDarkMode 
          onClick={
            () => {
              const main = document.querySelector('html');

              main.classList.toggle('dark');
            }
          }         
          className='text-2xl cursor-pointer align-middle'/>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar