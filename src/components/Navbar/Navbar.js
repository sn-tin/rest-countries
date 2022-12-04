import { StyledNav, ModeButton } from "./Navbar.style";

const Navbar = ({theme, changeTheme}) => {
    return (
        <StyledNav>
            <h1>Where in the world?</h1>
            <ModeButton onClick={changeTheme}>
            {
                theme === "dark" ? <i className="fa-regular fa-moon"></i> : <i className="fa-solid fa-moon"></i>
            }
            { theme === "dark" ? "Light Mode" : "Dark Mode" }
            </ModeButton>
        </StyledNav>
    )
}

export default Navbar;