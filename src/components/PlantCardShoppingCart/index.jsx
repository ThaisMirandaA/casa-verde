import { PlantContainer, StyledImg, InfoPlant, Name } from './styles';
import Text from "components/Text";

const PlantCardShoppingCart = ({ img, name, price, quantity }) => {
    return (
        <PlantContainer>
            <StyledImg src={img} alt={name}></StyledImg>
            <InfoPlant>
                <Name>{name}</Name>
                <Text>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                <Text>Qtd: {quantity}</Text>
            </InfoPlant>
        </PlantContainer>
    )
}

export default PlantCardShoppingCart; 