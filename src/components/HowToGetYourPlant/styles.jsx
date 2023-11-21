import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    position: relative;
    background-color: #FFFFFF;
    box-shadow: 10px 10px 30px 0px #0000000F;
    margin: 0px 0px 0px 160px;
    width: 995px;
    @media(max-width: 919px) {
        width: 80%;
        height: 330px;
        margin-left: 10%;
    }
    @media(max-width: 500px) {
        width: 80%;
        height: 250px;
        margin-left: 12%;
    }
`;

export const StyledImg = styled.img`
    @media(max-width: 919px) {
        width: 50%;
        height: 330px;
    }
    @media(max-width: 500px) {
        display: none;
    }   
`;

export const StyledContainerText = styled.div`
    padding: 30px;
    @media(max-width: 919px) {
        padding: 10px;
    }
    @media(max-width: 500px) {
        padding: 0px;
        margin-left: 10px;
    }
`;

export const StyledUl = styled.ul`
    @media(max-width: 500px) {
        padding: 0px;
        margin: 0px;
    }
`;

export const StyledList = styled.li`
    line-height: 56px;
    list-style: none;
    @media(max-width: 919px) {
        line-height: 10px;
    }
`;

export const StyledContainerImgTextList = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    img{
        @media(max-width: 919px) {
        width: 20px;
        height: 20px;
        }
    }
`;

export const StyledSpan = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: #202020;
    opacity: 50%;
    @media(max-width: 919px) {
        font-size: 10px;
        padding: 5px;
    }
    @media(max-width: 500px) {
        padding: 2px;
    }
`





