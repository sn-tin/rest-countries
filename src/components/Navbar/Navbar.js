import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles";
import { StyledNav, ModeButton } from "./Navbar.style";

const Navbar = ({theme, changeTheme}) => {
    return (
        <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
            <StyledNav>
                <h1>Where in the world?</h1>
                <ModeButton onClick={changeTheme}>
                <i className="fa-solid fa-moon"></i> Dark Mode</ModeButton>
            </StyledNav>
        </ThemeProvider>
    )
}

export default Navbar;