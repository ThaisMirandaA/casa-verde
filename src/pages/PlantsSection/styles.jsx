import styled from "styled-components";

export const PlantsSectionContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 120px;
    position: relative;
`;

export const FilterContainer= styled.div`
    display: flex;
`;

export const StylizedButton = styled.button`

    background-color: #FFCB47;
    border: none;
    box-shadow: 10px 10px 30px 0px #0000000F;
    color: #FFFFFF;
    font-size: 16px;
    height: 40px;
    margin-right: 20px;
    padding: 10px 20px 20px 20px;
    cursor: pointer;
    @media(max-width: 919px) {
        padding-bottom: 80px;
    }
`
