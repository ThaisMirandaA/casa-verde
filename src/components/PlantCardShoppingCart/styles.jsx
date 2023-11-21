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
    padding: 20px 0px 0px 0px;
    @media(max-width: 600px) {
        padding: 0px 60% 0px 0px;
    }
`;

export const StyledImg = styled.img`
    width: 160px;
    height: 160px;
`;

export const InfoPlant = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
`;

export const Name = styled.h2`
    font-family: 'Elsie Swash Caps', serif;
    font-size: 25px;
    line-height: 1;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0em;
`