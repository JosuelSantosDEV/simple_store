import { IoCart, IoCartOutline } from "react-icons/io5";
import Icon from "../icon";
import { ProductContent , InfoBox, ImgBox} from "./styles";
import React, { useEffect, useState } from "react";
import ProductModal from "../ProductModal";
import { ProductType } from "../../types/product/productType";
import { ProductCartType } from "../../types/cart/cartType";

type Props = {
    product: ProductType;
    handleProductCart: (newProduct: ProductCartType)=> unknown;
    checkProductInCart: (id: number) => boolean;
}

const ProductCard: React.FC<Props> = ({product, handleProductCart, checkProductInCart}) => {
    const [openModal, setModalOpen] = useState(false)
    const [productInCart, setProductInCart] = useState(checkProductInCart(product.id))
    const onModalOpen = ()=> {
        setModalOpen(!openModal);
    };

    const handleProductInCart = () => {
        handleProductCart({id: product.id,image: product.image, name: product.name, price: product.price, quantity: 1});
    }

    useEffect(() => {
        setProductInCart(checkProductInCart(product.id))
    }, [checkProductInCart, product.id]);
    
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
                        <h4> {product.price.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}</h4>
                        
                        <Icon size={24} color="orangePrimary" onClickAction={() => handleProductInCart()}>
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