import React, { useState, useCallback } from "react";
import { Cart, HomeContent } from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import CartSideBar from "../../components/CartSideBar";
import ProductSection from "../../components/ProductSection";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [carSideBar, setCarSideBar] = useState(false);

    const handleCloseCartSideBar = useCallback(() => {
        setCarSideBar(false);
    }, []);

    const handleOpenCartSideBar = useCallback(() => {
        setCarSideBar(true);
    }, []);

    const handleNavigateToCartPage = useCallback(() => {
        navigate("/cart");
    }, [navigate]);

    return (
        <HomeContent>
            <Header>
                <Logo />
                <CustomInput
                    buttonTitle="Search"
                    placeholderInput="Informe algo"
                />
                <Cart 
                    onClick={handleOpenCartSideBar} 
                    onMouseEnter={handleOpenCartSideBar} 
                    isCartSideBarOpen={carSideBar} 
                />
                {carSideBar && (
                    <CartSideBar 
                        onClickCloseButton={handleCloseCartSideBar} 
                        onClickSideBarButton={handleNavigateToCartPage}
                         
                    />
                )}
            </Header>
            <Main>
                <ProductSection />
            </Main>
            <Footer />
        </HomeContent>
    );
};

export default React.memo(Home);
