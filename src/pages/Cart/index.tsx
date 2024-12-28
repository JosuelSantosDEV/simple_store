import React from "react";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import Main from "../../components/Main";
import { Box, BoxInfo, BoxItemsProduct } from "./styles";
import Footer from "../../components/Footer";
import ItemProductCard from "../../components/ItemProductCard";
import { useCartContext } from "../../hooks/useCartContext";

const Cart: React.FC = ()=>{
    const navigate = useNavigate();
    const {cart, increaseProduct, decrementProduct, addOrRemoveProductInCart,  quantity, totalPrice} = useCartContext();
    const handleNavigateToHomePage = ()=>{
        navigate("/");
    };
    return (
        <>
            <Header>
                <Logo onClickAction={handleNavigateToHomePage}/>
            </Header>
            <Main>
                <Box> 
                    <BoxItemsProduct>
                        { cart.map(product => <ItemProductCard key={product.id} product={product} 
                        handleDecrementProduct={decrementProduct} handleIncreaseProduct={increaseProduct} removeItem={addOrRemoveProductInCart} />)}
                    </BoxItemsProduct>
                    <BoxInfo>
                        <h1>Manage your items</h1>
                        <h2>Quantity: {quantity}</h2>
                        <h2>Total price: {totalPrice.toLocaleString("pt-BR", {style: "currency",currency: "BRL"})}</h2>
                        <button>Go to payment</button>
                    </BoxInfo>
                </Box>
            </Main>
            <Footer/>
        </>
    )
}

export default Cart;