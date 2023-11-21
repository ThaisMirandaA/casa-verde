import { styled } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
`;

export const StyledInput = styled.input`
    flex: 1;
    width: 250px;
    height: 75px;
    border: none;
    box-shadow: 10px 10px 30px 10px #0000000F;
    color: #202020;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    /* opacity: 50%; */
    outline-color: #ffcb47;
    background-image: url("/images/icons/icon-mail.svg");
    background-repeat: no-repeat;
    background-position: 16px center;
    letter-spacing: 0em;
    padding-left: 55px;
    position: relative;
    :hover {
        box-shadow: 10px 10px 30px 0px #0000002e;
    }
    @media(max-width: 919px) {
        font-size: 15px;
    }
    @media(max-width: 500px) {
        font-size: 12px;
        width: 120px;
        height: 30px;
    } 
`;

export const StyledButton = styled.button`
    background-color: #ffcb47;
    border: none;
    box-shadow: 10px 10px 30px 0px #0000000F;
    color: #FFFFFF;
    font-size: 16px;
    width: 150px;
    height: 75px;
    position: relative;
    cursor: pointer;
    @media(max-width: 919px) {
        font-size: 15px;
    }
    @media(max-width: 500px) {
        font-size: 12px;
        width: 90px;
        height: 32px;
    }
`;

export const StyledSpan = styled.span`
    color: #202020;
    font-size: 16px;
    @media(max-width: 919px) {
        font-size: 15px;
    }
    @media(max-width: 500px) {
        font-size: 12px;
    }
`