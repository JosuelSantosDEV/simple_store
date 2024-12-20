import React from "react";
import { LogoContent } from "./styles";

type Props = {
    onClickAction?: ()=>void;
}

const Logo : React.FC<Props>= ({onClickAction})=>{
    return <LogoContent onClick={onClickAction}>
                    <img src="logo.svg" alt="Logo Simple Store" />
        </LogoContent>
}

export default Logo;