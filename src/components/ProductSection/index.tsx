import React, { useState } from "react";
import CategoryBox from "../CategoryBox";

import data from "../../mocks/products.json";
import { ProductSectionContent } from "./styles";
import { useCartContext } from "../../hooks/useCartContext";



const ProductSection: React.FC = ()=>{

    const [dataState, setDataState] = useState(data.categories);

    const {checkProductInCart, addOrRemoveProductInCart} = useCartContext();

    
    return (
        
            <ProductSectionContent>
                {
                    dataState.map(category => {
                        return <CategoryBox key={category.id} categoryName={category.name} product={category.products}
                         handleAddAndRemoveProductInCart={addOrRemoveProductInCart} handleIsProductInCart={checkProductInCart} ></CategoryBox>
                    })
                }
            </ProductSectionContent>
       
    )
}

export default ProductSection;