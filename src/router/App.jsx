import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../context/ProductContext';
import { LoadStatusProvider } from '../context/LoadStatus';
import { useMediaQuery } from 'react-responsive';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import MyOrders from '../pages/MyOrders';
import MyOrder from '../pages/MyOrder';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import NavBarSm from '../components/NavBarSm';
import Footer from '../components/Footer';
import CheckoutSideMenu from '../components/CheckoutSideMenu';
import '../styles/index.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home />, },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

function App() {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <ShoppingCartProvider>
      <LoadStatusProvider>
        <BrowserRouter>
          {
            isDesktopOrLaptop && <NavBar />
          }
          {
            isTabletOrMobile && <NavBarSm />
          }
          <AppRoutes />
          <CheckoutSideMenu />
          <Footer />
        </BrowserRouter>
      </LoadStatusProvider>
    </ShoppingCartProvider>
  );
}

export default App;
