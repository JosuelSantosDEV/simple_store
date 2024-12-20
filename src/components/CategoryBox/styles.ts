import styled from "styled-components";

export const CategoryContent = styled.div`
    width: 100%;
`;
export const BoxCategory = styled.div`
    min-height: 200px;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    gap: 10px;
`;

export const HeaderCategory = styled.div`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    background-color: ${p => p.theme.colors.darkSecondary};
    color: ${p => p.theme.colors.orangePrimary};

    text-align: center;
    padding: 3px;
`;
