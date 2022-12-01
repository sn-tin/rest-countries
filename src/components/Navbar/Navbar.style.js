import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.primary};
`

export default StyledNav