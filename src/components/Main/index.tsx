import React, { useState } from "react";
import { MainContent, BoxContent } from "./styles";
import CategoryBox from "../CategoryBox";

import data from "../../data/data.json";

const Main: React.FC = ()=>{

    const [dataState, setDataState] = useState(data.categories);

    return (
        <MainContent>
            <BoxContent>
                {
                    dataState.map(category => {
                        return <CategoryBox key={category.id} categoryName={category.name} product={category.products}></CategoryBox>
                    })
                }
            </BoxContent>
        </MainContent>
    )
}

export default Main;