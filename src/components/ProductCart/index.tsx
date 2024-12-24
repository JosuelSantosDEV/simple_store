
import Icon from "../icon";
import { ProductContent , InfoBox, ImgBox, BoxQuantityProduct} from "./styles";
import React from "react";

import { MdAdd, MdRemove } from "react-icons/md";
import { ProductCartType } from "../../types/cart/cartType";

type Props = {
    product: ProductCartType;
    handleIncreaseProduct: (id: number)=> void;
    handleDecrementProduct: (id: number)=> void;
}

const ProductCart: React.FC<Props> = ({product, handleDecrementProduct, handleIncreaseProduct}) => {
    
    return (
        <>
            <ProductContent>
                    <ImgBox>
                        <img src={product.image} alt="Image product" />
                    </ImgBox>
                <InfoBox>
                    <div>
                        <h3>{product.name}</h3>
                    </div>
                    <div>
                        <h4> {product.price.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}</h4>
                        <BoxQuantityProduct>
                            <Icon size={24} color="orangePrimary" onClickAction={()=> handleIncreaseProduct(product.id)}>
                                <MdAdd/>
                            </Icon>
                            <h3>{product.quantity}</h3>
                            <Icon size={24} color="orangePrimary" onClickAction={()=> handleDecrementProduct(product.id)}>
                                <MdRemove/>
                            </Icon>
                        </BoxQuantityProduct>

                    </div>
                </InfoBox>
            </ProductContent>
        </>
    )
}

export default ProductCart;