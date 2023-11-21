import Footer from "components/Footer";
import Header from "components/Header";
import HowToGetYourPlant from "components/HowToGetYourPlant";
import Newsletter from "components/Newsletter";

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <Newsletter />
                <HowToGetYourPlant />
            </main>
            <Footer />
        </>
    )
}

export default Home; 