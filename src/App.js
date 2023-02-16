import React from 'react'
import Homepage from './pages/homepage/Homepage'
import {
  BrowserRouter,
  Route,Routes,
  RouterProvider,
} from "react-router-dom";
import ProductListing from './pages/productslisting/ProductListing'
import LoginSignup from './pages/login-signupmodal/loginSignup'
import DeveloperDashbord from './pages/develperDashboard/DeveloperDashbord'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/">
        <Route index element={ <ProductListing />} />
        <Route path="developer" element={ <DeveloperDashbord />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
