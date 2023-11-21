import { useState } from "react";
import { StyledHamburguerMenu, HamburguerIcon, Bar, MenuItens, StyledLink } from "./styles";

const HamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <StyledHamburguerMenu>
            <HamburguerIcon onClick={toggleMenu}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </HamburguerIcon>
            <MenuItens isOpen={isOpen}>
                <StyledLink to="">Como fazer</StyledLink>
                <StyledLink to="/nossasplantas">Nossas plantas</StyledLink>
                <StyledLink to="">Depoimentos</StyledLink>
                <StyledLink to="">Vídeos</StyledLink>
                <StyledLink to="/meucarrinho">Meu carrinho</StyledLink>
            </MenuItens>
        </StyledHamburguerMenu>


    )
}

export default HamburguerMenu; 