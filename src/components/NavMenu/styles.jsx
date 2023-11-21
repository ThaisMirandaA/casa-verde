import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    color: #202020;
    padding: 5px;
    margin-top: 30px;
    position: relative;
    cursor: pointer;
    @media(max-width: 920px) {
        display: none;
    }
`