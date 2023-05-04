import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/productslisting/ProductListing";
import SingleProduct from "./pages/productOpen.jsx/SingleProduct";
import Footer from "../src/components/footer/Footer";
import ProductsPage from "./pages/productspage/ProductsPage";
import { useState } from "react";
import ChatWidget from "./components/ChatWidget/ChatWidget";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [openLogin, setOpenLogin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="h">
                {localStorage.getItem("access_token") ?
                    <ChatWidget isOpen={isOpen} setIsOpen={setIsOpen} /> : <></>}
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<ProductListing />} />
                            <Route path="products" element={<ProductsPage />} />
                            <Route path="product/:slug" element={<SingleProduct setOpenLogin={setOpenLogin} openLogin={openLogin} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                        </Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}
