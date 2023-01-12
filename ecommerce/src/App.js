import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  RouterProvider } from 'react-router-dom';
import { loader as SearchedProductsLoader } from './routes/products/SearchedProducts';
import { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Login from './routes/login/Login';
import Home from './routes/home/Home';
import Sign from './routes/sign/Sign';
import Sales from './routes/sales/Sales';
import Laptops from './routes/categories/Laptops';
import Phones from './routes/categories/Phones';
import Memories from './routes/categories/Memories';
import SearchedProducts from './routes/products/SearchedProducts';
import Purchases from './routes/purchases/Purchases';
import History from './routes/history/History'
import axios from 'axios';
import Wishlist from './routes/wishlist/Wishlist';
import Cart from './routes/cart/Cart';
import Profile from './routes/profile/Profile';
import Api from './api/Api';
import SalesPhones from './routes/sales/sales-by-category/phones';
import SalesLaptops from './routes/sales/sales-by-category/laptops';
import SalesMemories from './routes/sales/sales-by-category/memories';
import SalesHeader from './components/SalesHeader';
import ForgotPassword from './routes/forgot-password/ForgotPassword';
import ResetPassword, { loaderForVerification } from './routes/reset-password/ResetPassword';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  axios.defaults.withCredentials = true;

  console.log(isLoggedIn);

  useEffect(() => {
    const api = new Api();
    api.getIsLogin()
    .then((result) => {
      if(result.data) {
        setIsLoggedIn(true);
      } else if(result.data) {
        setIsLoggedIn(false);
      }
    });
  }, [])

  const Root = () => {
    return (
      <>
        <NavigationBar isLoggedIn={isLoggedIn} />
        <Outlet />
      </>
    );
  }

  const SalesRoot = () => {
    return (
      <>
        <SalesHeader />
        <Outlet />
      </>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path='/login' element={<Login setLogin={setIsLoggedIn} /> } />
        <Route path='/sign' element={<Sign />} />
        <Route path='/sales' element={<SalesRoot />} >
          <Route index element={<Sales isLoggedIn={isLoggedIn}/>} />
          <Route path='/sales/phones' element={<SalesPhones isLoggedIn={isLoggedIn}/>} />
          <Route path='/sales/laptops' element={<SalesLaptops isLoggedIn={isLoggedIn}/>} />
          <Route path='/sales/memories' element={<SalesMemories isLoggedIn={isLoggedIn}/>} />
        </Route>
        <Route path='/laptops' element={<Laptops isLoggedIn={isLoggedIn}/>} />
        <Route path='/phones' element={<Phones isLoggedIn={isLoggedIn}/>} />
        <Route path='/memories' element={<Memories isLoggedIn={isLoggedIn}/>} />
        <Route path='/products/:product' element={<SearchedProducts isLoggedIn={isLoggedIn}/>} loader={SearchedProductsLoader} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/history' element={<History />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword/:id/:token' element={<ResetPassword />} loader={loaderForVerification} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
