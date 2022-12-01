import styled from "styled-components";

const StyledMain = styled.main`
    padding: 20px;
    background-color: ${({theme}) => theme.primary};
`
const Searchbar = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.secondary};
    .fa-magnifying-glass {
        color: ${({theme}) => theme.text};
    }
`

export { StyledMain, Searchbar }