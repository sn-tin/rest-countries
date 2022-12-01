import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.primary};
    h1, button {
        color: ${({theme}) => theme.text};
        font-size: clamp(1rem, 2.5vw, 1.2rem);
    }
`
const ModeButton = styled.button`
    background-color: transparent;
    border: none;
`

export { StyledNav, ModeButton }