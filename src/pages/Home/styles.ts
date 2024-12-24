import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

type CartProps = {
    isCartSideBarOpen?: boolean;
}

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Cart= styled(FaShoppingCart)<CartProps>`
    font-size: 40px;
    color: ${props => props.isCartSideBarOpen ? props.theme.colors.orangePrimary : props.theme.colors.orangeSecondary};
    margin: 20px;
    cursor: pointer;
`;