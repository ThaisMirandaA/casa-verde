import Text from "components/Text";
import { AlertContainer, ImageAlert } from "./styles"

const Alert = ({ img, name }) => {
    return (
        <AlertContainer>
            <ImageAlert src={img} alt="Imagem da planta adcionada ao carrinho" />
            <Text> {name} no carrinho</Text>
        </AlertContainer>
    )
}

export default Alert; 