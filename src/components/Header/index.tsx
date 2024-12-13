import React from "react";
import { HeaderContent } from "./styles";

type props = {
    children: React.ReactNode;

}

const Header: React.FC<props> = ({children})=>{
   
    return (
        <HeaderContent>
            {children} 
        </HeaderContent>
    )
}

export default Header;