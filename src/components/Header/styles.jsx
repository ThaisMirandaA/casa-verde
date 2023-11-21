import { styled } from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    position: relative;
    img {
       width: 177px;
       height: 44.84px;
    }
    @media(max-width: 919px) {
        
    }
    @media(max-width: 500px) {
        font-size: 12px;
        width: 60%;
        height: 30px;
        margin: 15% 0px 0px 15% ;
    }
   
`