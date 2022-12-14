import styled from "styled-components";
import { fontWeight } from "../../styles";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.secondary};
    padding: 30px 20px;
    box-shadow: ${({theme}) => theme.shadow};
    h1 {
        color: ${({theme}) => theme.text};
        font-size: clamp(0.9rem, 2.5vw, 1.2rem);
        font-weight: ${fontWeight.extraBold};
    }
    .fa-moon {
        color: ${({theme}) => theme.text};
        transform: rotate(321deg);
        margin-right: 5px;
    }
    @media screen and (min-width: 990px) {
        padding: 25px 80px;
    }
`
const ModeButton = styled.button`
    color: ${({theme}) => theme.text};
    font-size: clamp(0.8rem, 2.5vw, 1rem);
    font-weight: ${fontWeight.semiBold};
    background-color: transparent;
    border: none;
`

export { StyledNav, ModeButton }