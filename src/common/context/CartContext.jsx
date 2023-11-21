import Alert from 'components/Alert';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [item, setItem] = useState(null);

    const addToCart = (newItem) => {
        const productExist = cart.some((product) => product.id === newItem.id);

        if (!productExist) {
            newItem.quantity = 1;
            setCart((previousShoppingCart) => [...previousShoppingCart, newItem]);
        } else {
            setCart((previousShoppingCart) =>
                previousShoppingCart.map((item) =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        }
        setItem(newItem);
        showAlertNow();
    }

    const showAlertNow = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
            setItem(null);
        }, 3000)
    }


    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
            {showAlert && item && <Alert name={item.name} img={item.img} />}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    return useContext(CartContext);
}