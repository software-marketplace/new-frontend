import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/productslisting/ProductListing";
import SingleProduct from "./pages/productOpen.jsx/SingleProduct";
import Footer from "../src/components/footer/Footer";
import ProductsPage from "./pages/productspage/ProductsPage";
import ProductComparisonTable from "./components/compare/ProductComparisonTable";
// import ProductContext from "./ProductContext";
import ChatWidget from './components/ChatWidget/ChatWidget.jsx'
import Faq from "./pages/faq";
import { useState } from "react";
// import ProductComparisonTable from './ProductComparisonTable';
export default function App() {

    function contactDeveloper(email) {
        console.log('in')
        setEmail(email);
        localStorage.getItem("access_token") ? setIsOpen(true) : setOpenLogin(true);
    };

    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [openChat, setOpenChat] = useState(false);
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
      // const [openChat, setOpenChat] = useState(false);
      // const [isLoggedIn, setIsLoggedIn] = useState(false);
      // const [currentUser, setCurrentUser] = useState(null);
      // const [openLogin, setOpenLogin] = useState(false);
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
                {localStorage.getItem("access_token") ?
                    <ChatWidget email={email} isOpen={isOpen} setIsOpen={setIsOpen} /> : <></>}
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<ProductListing />} />
              {/* <Route path="developer" element={<DeveloperDashbord />} /> */}
              <Route
                path="products"
                element={
                  <ProductsPage
                    handleProductRemove={handleProductRemove}
                    contactDeveloper={contactDeveloper}
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
                    contactDeveloper={contactDeveloper}
                    openChat={openChat}
                    setOpenChat={setOpenChat}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              {/* <Route path="userDashboard" element={<UserDashboard />} /> */}
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
