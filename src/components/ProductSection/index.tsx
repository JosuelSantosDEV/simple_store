import React, { useEffect } from "react";
import CategoryBox from "../CategoryBox";
import { ProductSectionContent } from "./styles";
import { useCartContext } from "../../hooks/useCartContext";
import { useAppDispatch, useAppSelector } from "../../store";
import { useLocation } from "react-router-dom";
import { resetQuery } from "../../store/reducers/search";



const ProductSection: React.FC = ()=>{
    const location =  useLocation();
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => {
        const searchQuery = state.search.query.trim();
        const regex = new RegExp(searchQuery, "i");
    
        const categories = state.product
            .map(item => ({
                ...item,
                products: item.products.filter(product => regex.test(product.name))
            }))
            .filter(item => item.products.length > 0);
    
        return categories;
    });
    

    const {checkProductInCart, addOrRemoveProductInCart} = useCartContext();

    useEffect(()=>{
        dispatch(resetQuery());
    }, [location.pathname, dispatch])

    return (
        
            <ProductSectionContent>
                {
                    products.map(category => {
                        return <CategoryBox key={category.id} categoryName={category.name} product={category.products}
                         handleAddAndRemoveProductInCart={addOrRemoveProductInCart} handleIsProductInCart={checkProductInCart} ></CategoryBox>
                    })
                }
            </ProductSectionContent>
       
    )
}

export default React.memo(ProductSection);