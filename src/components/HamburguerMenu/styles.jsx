import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHamburguerMenu = styled.div`
    display: none;
    @media(max-width: 920px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 10px;
        background-color: #ffcb47;
        color: white;
        position: relative;
        right: -15%;
    }  
`;

export const HamburguerIcon = styled.div`
    cursor: pointer;
`;

export const Bar = styled.div`
    width: 25px;
    height: 3px;
    background-color: #202020;
    margin: 5px 0;
`;

export const MenuItens = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    margin-top: 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
    color: #202020;
    cursor: pointer;
    white-space: nowrap;
    margin-bottom: 5px;
`;