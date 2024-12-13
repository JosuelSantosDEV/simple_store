import React from "react";
import { Cart, HomeContent } from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import Logo from "../../components/Logo";

const Home: React.FC = ()=>{
    const navigate = useNavigate();
    
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
                <Cart onClick={handleNavigateToCartPage}/>
            </Header>
        </HomeContent>
    )
}

export default Home;