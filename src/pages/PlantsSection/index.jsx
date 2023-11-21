import PlantCard from "components/PlantCard";
import Header from "components/Header"
import { useEffect, useState } from "react"
import { PlantsSectionContainer, FilterContainer, StylizedButton } from "./styles";
import Footer from "components/Footer";

const PlantsSection = () => {

    const [apiData, setApiData] = useState([])
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ThaisMirandaA/casaverde-api/sales')
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                setPlants(data);
            })
    }, [])

    const showDefaultPlants = () => {
        setPlants([...apiData]);
    }

    const sortByPrice = () => {
        plants.sort((a, b) => {
            if (a.preco > b.preco) {
                return 1;
            }
            if (a.preco < b.preco) {
                return -1;
            }
            return 0;
        });
        setPlants([...plants]);
    }

    const sortByName = () => {
        plants.sort((a, b) => { return a.name.localeCompare(b.name) });
        setPlants([...plants])
    }

    const filterByPrice = () => {
        const filtered = plants.filter((plant) => { return plant.preco < 35 });
        setPlants([...filtered]);
    }

    return (
        <>
            <main>
                <Header />
                <PlantsSectionContainer>
                    {plants.map((plant) => {
                        if (plant.ordem > 0) {
                            return <PlantCard {...plant} img={plant.img} name={plant.name} price={plant.preco} key={plant.name} />
                        }
                        return null;
                    })}
                    <FilterContainer>
                        <StylizedButton onClick={showDefaultPlants}>Padrão</StylizedButton>
                        <StylizedButton onClick={sortByPrice}>Ordenar por preço</StylizedButton>
                        <StylizedButton onClick={sortByName}>Ordenar por nome</StylizedButton>
                        <StylizedButton onClick={filterByPrice}>Produtos abaixo de 35 reais</StylizedButton>
                    </FilterContainer>
                </PlantsSectionContainer>
            </main>
            <Footer />
        </>


    )
}

export default PlantsSection