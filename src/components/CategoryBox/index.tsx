
import React from "react";
import { ProductType } from "../../types/product/productType";
import ProductCard from "../ProductCard";
import { BoxCategory, HeaderCategory } from "./styles";

type Props = {
    categoryName: string;
    product: ProductType[];
}

const CategoryBox: React.FC<Props> = ({categoryName, product}) => {
    return (
        <div>
            <HeaderCategory>
                <h2>{categoryName}</h2>
            </HeaderCategory>
            <BoxCategory>
                {
                    product.map((product)=>{
                        return <ProductCard key={product.id} product={product}/>   
                    })
                }
            </BoxCategory>
        </div>
    )
}

export default CategoryBox;