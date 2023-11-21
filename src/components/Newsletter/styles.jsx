import { styled } from "styled-components"

export const StyledNewsletter = styled.div`
    padding: 60px 60px 0px 60px;
    margin: 130px 0px 0px 70px;
    position: relative;
    display: flex;
    height: 720px;
    @media(max-width: 919px) {
        margin: 0;
        height: 50vh;
    }
`;

export const NewsletterContainer = styled.div`
    width: 585px;
    @media(max-width: 919px) {
        width: 80%;
        max-height: 100vh;
    }
`;

export const StyledImg = styled.img`
    position: relative; 
    width: 750px;
    height: 975px;
    right: 0;
    bottom: 250px;
    @media(max-width: 919px) {
        display: none;
    }
`