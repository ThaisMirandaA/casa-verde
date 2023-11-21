import { PlantContainer, StyledImg, InfoPlant, Name, StyledButton, StyledArrow } from './styles';
import Text from "components/Text";
import { useCart } from "common/context/CartContext";

const PlantCard = ({ name, price, img, id }) => {
    const { addToCart } = useCart(); 
    
    return (
        <PlantContainer>
            <StyledImg src={img} alt={name}></StyledImg>
            <InfoPlant>
                <Name>{name}</Name>
                <Text>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                <StyledButton onClick={() => { addToCart({ name, price, img, id }) }}>Comprar<StyledArrow src='/images/seta.png' alt='Imagem seta'></StyledArrow></StyledButton>
            </InfoPlant>
        </PlantContainer>
    )
}

export default PlantCard; 