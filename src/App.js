import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/productslisting/ProductListing";
import SingleProduct from "./pages/productOpen.jsx/SingleProduct";
import Footer from "../src/components/footer/Footer";
import ProductsPage from "./pages/productspage/ProductsPage";
import Faq from "./pages/faq";
import { useState } from "react";

export default function App() {
    const [openChat, setOpenChat] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <>
            <div className="h">
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<ProductListing />} />
                            <Route path="products" element={<ProductsPage />} />
                            <Route path="product/:slug" element={<SingleProduct setOpenLogin={setOpenLogin} openLogin={openLogin} openChat={openChat} setOpenChat={setOpenChat} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                            <Route path="faq" element={<Faq />} />
                        </Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}
