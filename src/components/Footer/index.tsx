import React from "react";
import { FooterContent, BoxContent } from "./styles";
import Icon from "../icon";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = ()=>{
    return (
        <FooterContent>
            <BoxContent>
                <small>
                    Copyright © 2024 Simple Store. All Rights Reserved.
                </small>
            </BoxContent>
            <BoxContent>
                <Icon size={30} color="orangeSecondary">
                    <MdWhatsapp/>
                </Icon>
                <Icon size={30} color="orangeSecondary">
                    <FaInstagram/>
                </Icon>
                <Icon size={30} color="orangeSecondary">
                    <MdFacebook/>
                </Icon>
            </BoxContent>
            <BoxContent>
                <small>
                    Project developed with Context API and Redux
                </small>
            </BoxContent>
        </FooterContent>
    )
}

export default Footer;