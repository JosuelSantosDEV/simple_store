import { createGlobalStyle } from "styled-components";
import MontserratLight from "../assets/fonts/Montserrat-Light.ttf";
import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "MontserratLight";
        src: local("Montserrat Light"), local("MontserratLight"), url(${MontserratLight}) format('truetype');
    }
    @font-face {
        font-family: "MontserratMedium";
        src: local("Montserrat Medium"), local("MontserratMedium"), url(${MontserratMedium}) format('truetype');
    }
    @font-face {
        font-family: "RobotoLight";
        src: local("Roboto Light"), local("RobotoLight"), url(${RobotoLight}) format('truetype');
    }

    html {
        font-family: ${props => props.theme.fonts.montserrat}, RobotoLight, sans-serif;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        height: 100vh;
        width: 100vw;
    }

    #root {
        height: 100%;
        width: 100%;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: inherit;
    }
    button {
        cursor: pointer;
    }
`;