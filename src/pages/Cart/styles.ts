import styled from "styled-components";

export const BoxItemsProduct = styled.div`
    grid-column: 2/3;
    max-width: 50%;
    min-width: 500px;
    flex: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Box = styled.div`
    grid-column: 2/3;
    display: flex;
`;

export const BoxInfo = styled.div`
    flex: 1;
    margin: 10px 0 0 10px;
    border-radius: 5px;
    height: 300px;
    background-color: ${p => p.theme.colors.darkSecondary};
    color: ${p => p.theme.colors.white};

    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    > h1 {
        color: ${p => p.theme.colors.orangePrimary};
    }
    
    > button {
        width: 90%;
        height: 40px;
        border-radius: 5px;


        font-size: 24px;
        font-family: ${p => p.theme.fonts.montserratMedium}, ${p => p.theme.fonts.montserrat}, Roboto;

        color: ${p => p.theme.colors.darkPrimary};
        background-color:  ${p => p.theme.colors.orangeSecondary}; 

        &:hover {
            background-color:  ${p => p.theme.colors.orangePrimary}; 
        }
    }
`;

