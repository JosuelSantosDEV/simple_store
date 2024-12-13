import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Cart= styled(FaShoppingCart)`
    font-size: 40px;
    color: ${props => props.theme.colors.orangePrimary};
    margin: 10px;
    cursor: pointer;
`;