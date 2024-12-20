import styled from "styled-components";

export const ModalContent = styled.dialog`
    height: 700px;
    width: 800px;
    position: fixed;
    top: 100px;
    left: 25vw;
    background-color: ${p => p.theme.colors.darkSecondary};

    > img {
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
    > span {
        background-color: ${p => p.theme.colors.darkSecondary};
        
        height: 50px;
        width: 50px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 5px;
        left: 5px;
    }

`;

export const ModalBox = styled.div`
    height: 100px;
    width: 800px;
    padding: 8px;
    color: ${p => p.theme.colors.white};
    overflow: hidden;

    > div {
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
    > h3 {

    }
`;

export const ModalBackground = styled.div`
    background-color: ${p => p.theme.colors.gray};
    opacity: .6;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;
