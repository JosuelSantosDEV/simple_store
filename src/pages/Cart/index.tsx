import React from "react";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import Main from "../../components/Main";

const Cart: React.FC = ()=>{
    const navigate = useNavigate();
    
    const handleNavigateToHomePage = ()=>{
        navigate("/");
    };
    return (
        <>
            <Header>
                <Logo onClickAction={handleNavigateToHomePage}/>
            </Header>
            <Main>
                <></>
            </Main>
        </>
    )
}

export default Cart;