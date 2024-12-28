
import Icon from "../icon";
import { ProductContent , InfoBox, ImgBox, BoxQuantityProduct} from "./styles";
import React from "react";
import { ProductCartType } from "../../types/cart/cartType";
import { MdAdd, MdRemove } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";


type Props = {
    product: ProductCartType;
    handleIncreaseProduct: (id: number) => void;
    handleDecrementProduct: (id: number) => void;
    removeItem: (product: ProductCartType) => void;
}

const ItemProductCard: React.FC<Props> = ({product, handleIncreaseProduct,handleDecrementProduct, removeItem}) => {


    
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
                    <h2> {product.price.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}</h2>
                    <div>
                        <BoxQuantityProduct>
                            <Icon size={24} color="orangePrimary" onClickAction={()=> handleIncreaseProduct(product.id)}>
                                <MdAdd/>
                            </Icon>
                            <h3>{product.quantity}</h3>
                            <Icon size={24} color="orangePrimary" onClickAction={()=> handleDecrementProduct(product.id)}>
                                <MdRemove/>
                            </Icon>
                        </BoxQuantityProduct>
                        <Icon size={24} color="darkSecondary" onClickAction={()=>removeItem(product)}>
                            <IoMdTrash/>
                        </Icon>
                    </div>
                </InfoBox>
            </ProductContent>
        </>
    )
}

export default ItemProductCard;