import { styled } from "styled-components"

const Titles = styled.h2`
    font-size: 24px;
    color: #202020;
    line-height: 27px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
    
    strong{
        font-family: 'Elsie Swash Caps', serif;
        font-size: 50px;
        line-height: 1;
        font-style: normal;
        font-weight: 900;
        letter-spacing: 0em;
        text-align: left;
        @media(max-width: 919px) {
        font-size: 40px;
    }
        @media(max-width: 500px) {
        font-size: 30px;
    }
    }

    @media(max-width: 919px) {
        font-size: 18px;
    }

    @media(max-width: 500px) {
        font-size: 12px;
        margin-bottom: 5px;
    }
`;

export default Titles; 