import styled from "styled-components";

export const InputContent = styled.div`
    margin: 5px;
    > input {
        height: 50px;
        width: 350px;
        border-radius:5px;
        margin-right:5px;
        padding: 5px;
        font-size: 16px;
    }

    > button {
        height: 35px;
        width: 100px;
        font-size: 16px;
        border-radius:5px;
        font-family: ${props => props.theme.fonts.montserratMedium};
        color: ${props => props.theme.colors.darkPrimary};
        background-color: ${props => props.theme.colors.orangeSecondary};

        &:hover {
            background-color: ${props => props.theme.colors.orangePrimary};
        }
    }

`;