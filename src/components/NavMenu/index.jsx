import { StyledLink } from "./styles";
import HamburguerMenu from "components/HamburguerMenu";

const LinkHeader = () => {
    return (
        <>
            <HamburguerMenu />
            <nav>
                <StyledLink to="">
                    Como fazer/
                </StyledLink>
                <StyledLink to="/nossasplantas">
                    Nossas plantas/
                </StyledLink>
                <StyledLink to="">
                    Depoimentos /
                </StyledLink>
                <StyledLink to="">
                    Vídeos /
                </StyledLink>
                <StyledLink to="/meucarrinho">
                    Meu carrinho
                </StyledLink>
            </nav>
        </>

    )
}

export default LinkHeader; 