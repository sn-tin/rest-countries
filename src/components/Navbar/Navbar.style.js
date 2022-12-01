import styled from "styled-components";
import { fontWeight } from "../../styles";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.secondary};
    padding: 20px;
    h1, button {
        color: ${({theme}) => theme.text};
        font-size: clamp(0.9rem, 2.5vw, 1.2rem);
        font-weight: ${fontWeight.extraBold};
    }
    .fa-moon {
        color: ${({theme}) => theme.text};
        transform: rotate(321deg);
        margin-right: 5px;
    }
`
const ModeButton = styled.button`
    background-color: transparent;
    border: none;
`

export { StyledNav, ModeButton }