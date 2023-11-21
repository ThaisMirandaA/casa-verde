import { StyledNewsletter, NewsletterContainer, StyledImg } from "./styles";
import Titles from "components/Titles";
import Text from "components/Text";
import FormNewsletter from "components/FormNewsletter";

const Newsletter = () => {
    return (
        <StyledNewsletter>
            <NewsletterContainer>
                <Titles>Sua casa com as <br /> <strong> melhores <br /> plantas </strong></Titles>
                <Text>Encontre aqui uma vasta seleção de plantas para decorar
                    a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
                    Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </Text>
                <FormNewsletter></FormNewsletter>
            </NewsletterContainer>
            <StyledImg src="/images/imagem-hero.png" alt="Imagem planta Hero" />
        </StyledNewsletter>
    )
}

export default Newsletter;