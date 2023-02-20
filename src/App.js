import React from 'react'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import {
  BrowserRouter,
  Route,Routes,
  RouterProvider,
} from "react-router-dom";
import ProductListing from './pages/productslisting/ProductListing'
import LoginSignup from './pages/login-signupmodal/loginSignup'
import DeveloperDashbord from './pages/develperDashboard/DeveloperDashbord'
// import Navbar from './components/Navbar/Navbar';
import SingleProduct from './pages/productOpen.jsx/SingleProduct';

export default function App() {
  return (
    <>
   {/* <Navbar /> */}
   <div className='h'>
    <BrowserRouter>
    <Routes>
      <Route path ="/">
        <Route index element={ <ProductListing />} />
        <Route path="developer" element={ <DeveloperDashbord />} />
        <Route path="product" element={ <SingleProduct />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}
