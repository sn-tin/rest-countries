import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, StyledNav } from "./styles";

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
            <StyledNav>
                <h1>Where in the world?</h1>
                <button onClick={changeTheme}>Dark Mode</button>
            </StyledNav>
        </ThemeProvider>
    )
}

export default Navbar;