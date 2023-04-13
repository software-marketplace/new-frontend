import React from "react";
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
import Faq from "./pages/faq";
import { useState } from "react";

export default function App() {
    const [openChat, setOpenChat] = useState(false);
    const [users, setUsers] = useState([{ email: "priyanka.makhija05@gmail.com", password: "Abc@123!" }]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <>
            {/* <Navbar /> */}
            <div className="h">
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<ProductListing />} />
                            <Route path="developer" element={<DeveloperDashbord />} />
                            <Route path="products" element={<ProductsPage />} />
                            <Route path="product/:slug" element={<SingleProduct setOpenLogin={setOpenLogin} openLogin={openLogin} openChat={openChat} setOpenChat={setOpenChat} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                            <Route path="userDashboard" element={<UserDashboard />} />
                            <Route path="faq" element={<Faq />} />
                        </Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}
