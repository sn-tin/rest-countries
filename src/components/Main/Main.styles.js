import styled from "styled-components";

const StyledMain = styled.main`
    padding: 20px;
    background-color: ${({theme}) => theme.primary};
`
const Searchbar = styled.div`
    width: 100%;
    max-width: 25rem;
    border-radius: 5px;
    padding: 12px 30px;
    background-color: ${({theme}) => theme.secondary};
    .fa-magnifying-glass {
        color: ${({theme}) => theme.text};
    }
    input {
        color: ${({theme}) => theme.text};
        border: none;
        background-color: ${({theme}) => theme.secondary};
        padding: 0 30px;
        &::placeholder {
            color: ${({theme}) => theme.text};
            font-size: clamp(0.9rem, 2.5vw, 1rem);
        }
        &:focus {
            outline: none;
        }
    }
`
const Dropdown = styled(Searchbar)`
    width: 70%;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    padding: 12 20px;
    margin-top: 30px;
    color: ${({theme}) => theme.text};
    position: relative;
    @media screen and (min-width: 990px) {
        flex-direction: row;
        margin-top: 0;
        margin-left: auto;
    }
`
const DropdownList = styled.ul`
    width: 100%;
    border-radius: 5px;
    padding: 12px 20px;
    position: absolute;
    left: 0;
    z-index: 1;
    background-color: ${({theme}) => theme.secondary};
    li {
        &:not(:last-of-type) {
            margin-bottom: 8px;
        }
    }
`

export { StyledMain, Searchbar, Dropdown, DropdownList }