import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import PlantsSection from "./pages/PlantsSection"
import ScrollToTop from "components/ScrollToTop";
import Background from "components/Background";
import ShoppingCart from "pages/ShoppingCart";
import { CartProvider } from "common/context/CartContext";

const AppRoutes = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Background />
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="nossasplantas" element={<PlantsSection />}></Route>
                    <Route path="meucarrinho" element={<ShoppingCart />}></Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default AppRoutes; 