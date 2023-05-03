import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import ProductListing from "./pages/productslisting/ProductListing";
import LoginSignup from "./pages/login-signupmodal/loginSignup";
import DeveloperDashbord from "./pages/develperDashboard/DeveloperDashbord";
// import Navbar from './components/Navbar/Navbar';
import SingleProduct from "./pages/productOpen.jsx/SingleProduct";
import UserDashboard from "./pages/userDashboard/userDashboard";
import Footer from "../src/components/footer/Footer";
import ProductsPage from "./pages/productspage/ProductsPage";
import ProductComparisonTable from "./components/compare/ProductComparisonTable";
// import ProductContext from "./ProductContext";
import Faq from "./pages/faq";
import { useState } from "react";
// import ProductComparisonTable from './ProductComparisonTable';
export default function App() {
  const [openChat, setOpenChat] = useState(false);
  const [users, setUsers] = useState([
    { email: "priyanka.makhija05@gmail.com", password: "Abc@123!" },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleProductSelect = (product) => {
    console.log("in HPS");
    if (selectedProducts.length >= 3) return false;
    const newSelectedProducts = [...selectedProducts, product];
    setSelectedProducts(newSelectedProducts);
    console.log("New selected products ", selectedProducts);
    return true;
  };

  const handleProductRemove = (product) => {
    const newSelectedProducts = selectedProducts.filter(
      (p) => p._id !== product._id
    );
    setSelectedProducts(newSelectedProducts);
  };

  const isProductSelected = (product) => {
    return selectedProducts.some((p) => p._id === product._id);
  };

  const getSelectedProductCount = () => {
    return selectedProducts.length;
  };

  useEffect(() => {
    console.log("New selected products ", selectedProducts);
  }, [selectedProducts]);

  return (
    // <ProductContext.Provider value={[selectedProducts, setSelectedProducts]}>
    <>
      {/* <Navbar /> */}
      <div className="h">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<ProductListing />} />
              <Route path="developer" element={<DeveloperDashbord />} />
              <Route
                path="products"
                element={
                  <ProductsPage
                    handleProductRemove={handleProductRemove}
                    handleProductSelect={handleProductSelect}
                    isProductSelected={isProductSelected}
                    getSelectedProductCount={getSelectedProductCount}
                  />
                }
              />
              <Route
                path="product/:slug"
                element={
                  <SingleProduct
                    setOpenLogin={setOpenLogin}
                    openLogin={openLogin}
                    openChat={openChat}
                    setOpenChat={setOpenChat}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route path="userDashboard" element={<UserDashboard />} />
              <Route path="faq" element={<Faq />} />
              <Route
                path="/product-comparison-table"
                element={<ProductComparisonTable products={selectedProducts} />}
              />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
    // </ProductContext.Provider>
  );
}
