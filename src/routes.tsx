import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound404 from "./pages/NotFound404";

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index path="/" Component={Home}/>
            <Route path="/cart" Component={Cart}/>
            <Route path="*" Component={NotFound404}/>
        </Routes>
    )
}