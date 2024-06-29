import { createGlobalStyle } from "styled-components";
import * as colors from "./colors";
import mq from "../../components/MediaQuery";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    /** reset.css */
    ${reset}

    :root {
        --font-sans: 'Noto Sans KR';
        --font-montserrat: 'Montserrat';
        --font-myeongjo: 'Nanum Myeongjo';
        --font-poppins: "Poppins", sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${colors.WHITE};
    }

    *:not(.fa-refular):not(.fa-solid):not(i[class^="fa-"]) {
        font-family: var(--font-poppins);
        /* font-family: var(--font-sans, --font-montserrat, --font-myeongjo, --font-poppins); */
        /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Noto Sans KR", "Nanum Gothic", sans-serif, "Poppins", sans-serif; */
    }

    body {
        overflow-x: hidden;
        background-color: ${colors.BLACK};
    };

    
    a {
        text-decoration: none;
    }
    .inner {
        margin: auto;
        max-width: 1100px;
        
        ${mq.maxWidth("lg")`
        flex-direction: column;
        padding: 60px 50px 80px;
        `}
    }

    section {
        margin-bottom: 70px;
    }
`;

export default GlobalStyle;
