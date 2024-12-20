import React, { useState } from "react";
import { Cart, HomeContent } from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import CartSideBar from "../../components/CartSideBar";

const Home: React.FC = ()=>{
    const navigate = useNavigate();

    const [carSideBar, setCarSideBar] = useState(false);

    const handleCloseCartSideBar = () => {
        setCarSideBar(false);
    }
    const handleOpenCartSideBar = () => {
        setCarSideBar(true);
    }
    
    const handleNavigateToCartPage = ()=>{
        navigate("/cart");
    };
    return (
        <HomeContent>
            <Header>
                <Logo/>
                <CustomInput 
                    buttonTitle="Search" 
                    onClickButton={(value: string)=> console.log(value)}
                    placeholderInput="Informe algo"

                />
                <Cart onClick={handleOpenCartSideBar} onMouseEnter={handleOpenCartSideBar} isCartSideBarOpen={carSideBar} />
                {carSideBar && <CartSideBar onClickCloseButton={handleCloseCartSideBar} onClickSideBarButton={handleNavigateToCartPage} />}
            </Header>
            <Main/>
            <Footer/>
        </HomeContent>
    )
}

export default Home;