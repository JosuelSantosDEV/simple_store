import styled from "styled-components";

export const ProductContent = styled.div`
    height: 204px;
    width: 260px;
   
    border: 2px solid ${p => p.theme.colors.darkSecondary};
    
`;

export  const InfoBox = styled.div`
    height: 60px;
    background-color: ${p => p.theme.colors.blueLight};

    > div:nth-of-type(1) {
        height: 30px;
        padding: 3px;
        color: ${p => p.theme.colors.white};
        display: flex;
        justify-content: center;

        > h3 {
            
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    > div:nth-of-type(2) {
        height: 50px;
        color: ${p => p.theme.colors.white};
        display: flex;
        justify-content: space-between;
        padding: 0 5px 0 5px;
    }
`;

export  const ImgBox = styled.div`
    height: 140px;
    overflow: hidden;

    > img {
        width:100% ;
        object-fit: cover;
    }
`;

export  const BoxQuantityProduct = styled.div`
    width: 80px;
    height: auto;
    display: flex;
    justify-content: space-between;

    > span {
        background-color: ${p => p.theme.colors.darkSecondary};

        height: 22px;
        width: 22px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

`;