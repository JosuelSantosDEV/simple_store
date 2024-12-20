import styled from "styled-components";

export const CartSideBarContent = styled.aside`
    position: absolute;
    top: 120px;
    right: 0px;

    height: calc(100vh - 120px);
    width: 300px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${p => p.theme.colors.blueLight};

    > span {

        position: absolute;
        top: 5px;
        left: 5px;

        background-color: ${p => p.theme.colors.darkSecondary};
        
        height: 50px;
        width: 50px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-of-type(1){
        width: 100%;
        height: 60px;
        margin-bottom: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    
        color: ${p => p.theme.colors.darkPrimary};
        background-color:  ${p => p.theme.colors.orangeSecondary};
    }       
    
`;

export const InfoCartBox = styled.div`
    width: 90%;
    height: 130px;
    padding: 5px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
    color: ${p => p.theme.colors.white};
    background-color:  ${p => p.theme.colors.darkSecondary}; 

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