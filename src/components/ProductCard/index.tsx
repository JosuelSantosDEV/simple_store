import { IoCart, IoCartOutline } from "react-icons/io5";
import Icon from "../icon";
import { ProductContent , InfoBox, ImgBox} from "./styles";
import React, { useState } from "react";
import ProductModal from "../ProductModal";
import { ProductType } from "../../types/product/productType";

type Props = {
    product: ProductType;
}

const ProductCard: React.FC<Props> = ({product}) => {
    const [openModal, setModalOpen] = useState(false)
    const [productInCart, setProductInCart] = useState(false)
    const onModalOpen = ()=> {
        setModalOpen(!openModal);
    };
    const onProductInCart = ()=> {
        setProductInCart(!productInCart);
    };
    return (
        <>
            <ProductContent>
                    <ImgBox onClick={onModalOpen}>
                        <img src={product.image} alt="Image product" />
                    </ImgBox>
                <InfoBox>
                    <div>
                        <h3>{product.name}</h3>
                    </div>
                    <div>
                        <h4>R$ {product.price.toFixed(2)}</h4>
                        <Icon size={24} color="orangePrimary" onClickAction={onProductInCart}>
                            {productInCart ? <IoCart/> : <IoCartOutline/>}
                        </Icon>
                    </div>
                </InfoBox>
            </ProductContent>
            {openModal && (
                <ProductModal onModalOpen={onModalOpen} product={product} />
            )}
        </>
    )
}

export default ProductCard;