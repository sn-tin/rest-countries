import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fontWeight } from "../../styles";

const LoadingText = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StyledMain = styled(motion.main)`
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
    padding: 12px 20px;
    margin-top: 30px;
    color: ${({theme}) => theme.text};
    position: relative;
    cursor: pointer;
    @media screen and (min-width: 990px) {
        flex-direction: row;
        margin-top: 0;
        margin-left: auto;
    }
`
const DropdownList = styled(motion.ul)`
    width: 100%;
    border-radius: 5px;
    padding: 15px 20px;
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 1;
    background-color: ${({theme}) => theme.secondary};
    cursor: pointer;
    li {
        &:not(:last-of-type) {
            margin-bottom: 8px;
        }
    }
`
const CardRow = styled(motion.div)`
    justify-content: space-between;
    margin: 50px auto;
    gap: 8px;
    /* p {
        color: ${({theme}) => theme.text};
        font-size: clamp(1.2rem, 2.5vw, 1.2rem);
        margin: auto;
    } */
    @media screen and (min-width: 990px) {
        gap: 40px;
    }
`
const CardCol = styled(motion.div)`
    width: 17rem;
    margin-bottom: 30px;
    margin: auto auto 30px;
    @media screen and (min-width: 1400px) {
        margin: 0 0 30px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
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
const StyledButtons = styled.button`
    width: 100px;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.secondary};
    margin: 0 0 8px 0;
    padding: 5px 10px;
    border: none;
    border-radius: 2px;
    box-shadow: ${({theme}) => theme.shadow};
    i {
        margin-right: 5px;
    }
`
const ImageFlag = styled.img`
    width: 100%;
    max-width: 35rem;
    margin: 50px 0;
`
const StyledContent = styled.div`
    color: ${({theme}) => theme.text};
    h2 {
        font-weight: ${fontWeight.extraBold};
        margin: 5px 0;
    }
    p {
        font-size: clamp(1rem, 2.5vw, 1.1rem);
        font-weight: ${fontWeight.semiBold};
        margin: 8px 0;
        span {
            font-weight: ${fontWeight.light};
        }
    }
    .content-1, .content-2, .border-countries {
        margin: 15px 0;
        &:not(:last-of-type) {
            margin-right: 50px;
        }
    }
    @media screen and (min-width: 990px) {
        margin-left: 100px;
    }
`

export { LoadingText, StyledMain, Searchbar, Dropdown, DropdownList, CardRow, CardCol, StyledLink, Card, StyledButtons, ImageFlag, StyledContent }