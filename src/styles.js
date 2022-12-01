import { createGlobalStyle } from "styled-components";

const lightTheme = {
    primary: "hsl(0, 0%, 98%)",
    secondary: "hsl(0, 0%, 100%)",
    text: "hsl(0, 0%, 0%)",
    subText: "hsl(0, 0%, 50%)"
}

const darkTheme = {
    primary: "hsl(207, 26%, 17%)",
    secondary: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    subText: "hsl(0, 0%, 80%)"
}

const fontWeight = {
    light: 300,
    semiBold: 600,
    extraBold: 800
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }
    body {
        font: 16px 'Nunito Sans', sans-serif;
    }
    .App {
        width: 100%;
        margin: auto;
    }
`

export { GlobalStyles, lightTheme, darkTheme, fontWeight }