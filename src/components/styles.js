import styled, { createGlobalStyle } from "styled-components";

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

const lightTheme = {
    primary: "hsl(0, 0%, 100%)",
    secondary: "hsl(0, 0%, 98%)",
    text: "hsl(0, 0%, 0%)",
    subText: "hsl(0, 0%, 50%)"
}

const darkTheme = {
    primary: "hsl(207, 26%, 17%)",
    secondary: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    subText: "hsl(0, 0%, 80%)"
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Nunito Sans', sans-serif;
    }
    .App {
        width: 100%;
        max-width: 1800px;
        padding: 0 20px;
        margin: auto;
    }
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.primary};
`

export { GlobalStyles, lightTheme, darkTheme, StyledNav }