import { StyledNav, ModeButton } from "./Navbar.style";

const Navbar = ({changeTheme}) => {
    return (
        <StyledNav>
            <h1>Where in the world?</h1>
            <ModeButton onClick={changeTheme}>
            <i className="fa-solid fa-moon"></i> Dark Mode</ModeButton>
        </StyledNav>
    )
}

export default Navbar;