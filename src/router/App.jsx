import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../context/GlobalContext'
import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount'
import MyOrders from '../pages/MyOrders'
import MyOrder from '../pages/MyOrder'
import SignIn from '../pages/SignIn'
import NotFound from '../pages/NotFound'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
