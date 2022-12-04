import styled from "styled-components";
import { fontWeight } from "../../styles";

const StyledMain = styled.main`
    padding: 20px;
    background-color: ${({theme}) => theme.primary};
    @media screen and (min-width: 990px) {
        padding: 50px 80px;
    }
`
const Searchbar = styled.div`
    width: 100%;
    max-width: 25rem;
    border-radius: 5px;
    padding: 12px 30px;
    background-color: ${({theme}) => theme.secondary};
    box-shadow: ${({theme}) => theme.shadow};
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
    max-width: 14rem;
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
const CardRow = styled.div`
    justify-content: space-between;
    margin: 50px auto;
    gap: 8px;
    @media screen and (min-width: 990px) {
        gap: 40px;
    }
`
const CardCol = styled.div`
    width: 17rem;
    margin-bottom: 30px;
    margin: auto auto 30px;
    @media screen and (min-width: 700px) {
        margin: 0 0 30px;
    }
`
const Card = styled.div`
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.secondary};
    border: none;
    margin: auto;
    box-shadow:  ${({theme}) => theme.shadow};
    .card-img-top {
        height: 11rem;
        object-fit: cover;
        object-position: center;
    }
    .card-body {
        padding: 40px 20px;
    }
    .card-text {
        font-weight: ${fontWeight.semiBold};
        margin-bottom: 3px;
        span {
            font-weight: ${fontWeight.light};
        }
    }
    .card-title {
        font-weight: ${fontWeight.extraBold};
        margin-bottom: 8px;
    }
`

export { StyledMain, Searchbar, Dropdown, DropdownList, CardRow, CardCol, Card }