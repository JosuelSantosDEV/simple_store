
import React from "react";
import styled from "styled-components";

interface IProps extends IconProps{
    children: React.ReactNode;
    onClickAction?: (value?:unknown)=> void;
}

type IconProps = {
    size: number;
    color: "orangePrimary" | "white" | "blueLight" | "gray" | "darkPrimary" | "darkSecondary" | "orangeSecondary"
}

const IconContent = styled.span<IconProps>`
    font-size: ${props => props.size}px;
    color: ${props => props.theme.colors[props.color] ?? props.theme.colors.orangePrimary};
    cursor: pointer;
`;

const Icon : React.FC<IProps>= ({children, size, color, onClickAction})=>{
    return (
        <IconContent size={size} color ={color} onClick={onClickAction} >
            {children}
        </IconContent>
    )
}

export default Icon;