import Titles from "components/Titles";
import { StyledSection, StyledImg, StyledContainerText, StyledUl, StyledList, StyledContainerImgTextList, StyledSpan } from "./styles";

const HowToGetYourPlant = () => {
    return (
        <>
            <StyledSection>
                <StyledImg src="images/my-plant.png" alt="Imagem da planta Monstera deliciosa" />
                <StyledContainerText>
                    <Titles>Como conseguir <br /><strong>minha planta</strong></Titles>
                    <StyledUl>
                        <StyledList>
                            <StyledContainerImgTextList><img src="/images/ellipse.png" alt="Imagem elipse" />
                                <StyledSpan to="/nossasplantas" scrollBehavior="auto">Escolha suas plantas</StyledSpan >
                            </StyledContainerImgTextList>
                        </StyledList>
                        <StyledList>
                            <StyledContainerImgTextList><img src="/images/ellipse.png" alt="Imagem elipse" />
                                <StyledSpan to="">Faça seu pedido</StyledSpan >
                            </StyledContainerImgTextList>
                        </StyledList>
                        <StyledList>
                            <StyledContainerImgTextList><img src="/images/ellipse.png" alt="Imagem elipse" />
                                <StyledSpan to="">Aguarde na sua casa</StyledSpan >
                            </StyledContainerImgTextList>
                        </StyledList>
                    </StyledUl>
                </StyledContainerText>
            </StyledSection >
        </>

    )
}

export default HowToGetYourPlant; 