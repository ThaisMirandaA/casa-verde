import { styled } from "styled-components";

export const PlantContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-end;
    height: 180px;
    margin: 5px 20px 20px 5px;
    background-color: #FFFFFF;
    box-shadow: 10px 10px 30px 0px #0000000F;
    @media(max-width: 500px) {
        padding: 0px 50% 0px 0px;
    }
`;

export const StyledImg = styled.img`
    width: 160px;
    height: 160px;
`;

export const InfoPlant = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    max-width: 120px;
    
`;

export const Name = styled.h2`
    font-family: 'Elsie Swash Caps', serif;
    font-size: 25px;
    line-height: 1;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0em;
`;

export const StyledButton = styled.button`
    color: #FFCB47; 
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
`;

export const StyledArrow = styled.img`
    margin-left: 10px;
`