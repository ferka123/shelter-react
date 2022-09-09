import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
    font-family: Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
    margin: 0;
}
#root {
    width: 100%;
}
`;

export default GlobalStyles;
