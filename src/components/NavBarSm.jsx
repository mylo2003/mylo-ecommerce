import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../context/ProductContext';
import { LoadStatusContext } from '../context/LoadStatus';

function NavBarSm() {
  const { openCheckout, darkMode, setDarkMode } = useContext(ShoppingCartContext);
  const { setSearchedCategory } = useContext(LoadStatusContext);

  const [isActive, setIsActive] = useState(false);

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

  const toggleNavSlideMenu = () => {
    const navMobile = document.getElementById('navMobile');
    navMobile.classList.toggle('left-full')
    window.scrollTo({    
      top: 0,
      behavior: "smooth"
    });
    setIsActive(!isActive);
  };

  return (
    <div className='w-full flex justify-center border-b-2 border-white/80 dark:border-dark-secondary shadow-md sticky top-0 z-20 backdrop-blur-md bg-background/70 dark:bg-dark/80'>
      <div className='lg:hidden w-[80%] h-16 flex items-center justify-between md:justify-center font-bold text-xl dark:text-background'>
        <NavLink to='/'
          onClick={() => {
            window.scrollTo({    
              top: 0,
              behavior: "smooth"
            });
            setSearchedCategory('');
          }}
          className="md:w-2/4 md:text-2xl text-right transition-all hover:text-secondary">
          Mylommerce
        </NavLink>
        <button onClick={() => toggleNavSlideMenu()} className='md:w-1/4 flex justify-end items-center'>
          { !isActive ? 
              <i className='bx bx-menu bx-sm  hover:text-secondary '></i>
            :
              <i className='bx bx-x bx-sm hover:text-red-400'></i>
          }
        </button>
      </div>
      <nav id='navMobile' className='absolute transition-all md:text-xl left-full top-20 shadow-xl rounded-xl p-10 w-[90vw] h-[60vh] md:w-[70vw] md:h-[40vh] bg-gray-400 border-dark-accent text-text dark:text-background dark:bg-dark-secondary'>
        <ul className='w-full flex flex-col items-center gap-2 mb-8'>
          <li>
            <NavLink to='/'
              onClick={() => {
                toggleNavSlideMenu();
                setSearchedCategory('');
              }}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/electronics'
              onClick={() => {
                toggleNavSlideMenu();
                setSearchedCategory('electronics');
              }}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/jewelery'
              onClick={() => {
                toggleNavSlideMenu();
                setSearchedCategory('jewelery');
              }}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Jewelry
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/mens-clothing'
              onClick={() => {
                toggleNavSlideMenu();
                setSearchedCategory("men's clothing");
              }}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Men&apos;s clothing
            </NavLink>
          </li>
          <li>
            <NavLink to='/category/womens-clothing'
              onClick={() => {
                toggleNavSlideMenu();
                setSearchedCategory("women's clothing")
              }}
              style={activeStyle}
              className="transition-all hover:text-secondary"
            >
              Women&apos;s clothing
            </NavLink>
          </li>
        </ul>
        <ul className='w-full flex flex-col items-center gap-2'>
          <li>
            <NavLink to='/my-account'
              onClick={toggleNavSlideMenu}
              className='transition-all hover:text-secondary'
            >
              <i className='bx bx-user-circle bx-sm'></i>
            </NavLink>
          </li>
          <li onClick={() => {
            openCheckout();
            toggleNavSlideMenu();
          }}>
            <i className='bx bx-cart-alt bx-sm transition-all hover:text-secondary cursor-pointer'></i>
          </li>
          <li>
            <NavLink to='/my-orders'
              onClick={toggleNavSlideMenu}
              className='transition-all hover:text-secondary'
            >
              <i className='bx bx-purchase-tag bx-sm' ></i>
            </NavLink>
          </li>
          <li onClick={() => {
              toggleNavSlideMenu();
              setDarkMode(!darkMode);
            }}>
            {renderThemeIcon()}
          </li>
          <li className='text-gray-500'>
            camiloalf23@gmail.com
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarSm;