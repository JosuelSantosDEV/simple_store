import styled from "styled-components";

export const MainContent = styled.main`
    min-height: calc(100vh - 240px);

    display: grid;
    grid-template-columns: 80px 1fr 80px;

`;

export const BoxContent = styled.section`
    grid-column: 2/3;
    padding: 10px;
    
`;