import styled from "styled-components";

export const ProductContent = styled.div`
    height: 200px;
    width: 500px;

    display: flex;
`;

export  const InfoBox = styled.div`
    height: 100%;
    width: 250px;
    background-color: ${p => p.theme.colors.blueLight};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > div:nth-of-type(1) {
        height: 30px;
        padding: 3px;
        color: ${p => p.theme.colors.white};
        display: flex;
        justify-content: center;

        > h3 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    > div:nth-of-type(2) {
        height: 50px;
        color: ${p => p.theme.colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px 0 5px;

        > span {
            background-color: ${p => p.theme.colors.orangeSecondary};

            height: 30px;
            width: 40px;
            margin-left: 15px;
            border-radius: 5px;

            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background-color: ${p => p.theme.colors.orangePrimary};
            }
        }
    }
    > h2 {
        color: ${p => p.theme.colors.darkPrimary};
    }
`;

export  const ImgBox = styled.div`
    width: 250px;
    overflow: hidden;

    > img {
        height:100% ;
        object-fit: cover;
    }
`;

export  const BoxQuantityProduct = styled.div`
    width: 90px;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
        background-color: ${p => p.theme.colors.darkSecondary};

        height: 20px;
        width: 22px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    > h3 {
        width: 40px;
        border-radius: 2px;
        border: 1px solid ${p => p.theme.colors.darkSecondary};
        text-align: center;
    }

`;