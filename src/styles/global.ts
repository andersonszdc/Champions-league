import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        background-color: #2B2323;
        color: #FFF;
        font-family: 'montserrat';
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`