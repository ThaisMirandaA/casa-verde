import Footer from "components/Footer";
import Header from "components/Header";
import { SectionContainer } from "./styles";
import { useCart } from "common/context/CartContext";
import PlantCardShoppingCart from "components/PlantCardShoppingCart";
import Titles from "components/Titles";

const ShoppingCart = () => {
    const { cart } = useCart();
    const totalValue = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <main>
                <Header />
                <SectionContainer>
                        {cart.map((item) => (<PlantCardShoppingCart name={item.name} img={item.img} price={item.price} quantity={item.quantity}/>))}
                    <Titles>Valor total: {totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Titles>
                </SectionContainer>
            </main>
            <Footer />
        </>

    )
}

export default ShoppingCart; 