
import React from "react";
import { ProductType } from "../../types/product/productType";
import ProductCard from "../ProductCard";
import { BoxCategory, HeaderCategory } from "./styles";
import { ProductCartType } from "../../types/cart/cartType";

type Props = {
    categoryName: string;
    product: ProductType[];
    handleAddAndRemoveProductInCart: (newProduct: ProductCartType)=> unknown;
    handleIsProductInCart: (id: number)=> boolean;
}

const CategoryBox: React.FC<Props> = ({categoryName, product, handleAddAndRemoveProductInCart, handleIsProductInCart}) => {
    return (
        <div>
            <HeaderCategory>
                <h2>{categoryName}</h2>
            </HeaderCategory>
            <BoxCategory>
                {
                    product.map((product)=>{
                        return <ProductCard key={product.id} product={product} handleProductCart={handleAddAndRemoveProductInCart} checkProductInCart={handleIsProductInCart} />   
                    })
                }
            </BoxCategory>
        </div>
    )
}

export default CategoryBox;