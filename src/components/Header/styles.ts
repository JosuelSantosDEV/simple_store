import styled from "styled-components";


export const HeaderContent = styled.header`
    height: 120px;
    width: 100%;
    background-color: ${props => props.theme.colors.darkPrimary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
`;

