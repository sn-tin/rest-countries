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
    color: ${({theme}) => theme.text};
    position: relative;
`

export { StyledMain, Searchbar, Dropdown }