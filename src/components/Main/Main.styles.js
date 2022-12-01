import styled from "styled-components";

const StyledMain = styled.main`
    padding: 20px;
    background-color: ${({theme}) => theme.primary};
`
const Searchbar = styled.div`
    width: 100%;
    border-radius: 5px;
    padding: 12px 30px;
    background-color: ${({theme}) => theme.secondary};
    .fa-magnifying-glass {
        color: ${({theme}) => theme.text};
    }
    input {
        border: none;
        background-color: ${({theme}) => theme.secondary};
        margin-left: 30px;
        &::placeholder {
            color: ${({theme}) => theme.text};
        }
    }
`

export { StyledMain, Searchbar }