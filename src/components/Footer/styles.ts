import styled from "styled-components";

export const FooterContent = styled.footer`
    height: 120px;
    background-color: ${props => props.theme.colors.darkPrimary};

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
`;

export const BoxContent = styled.div`
    height: 100px;
    margin: 10px;
    color: ${props => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
