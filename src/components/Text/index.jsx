import { styled } from "styled-components"

const Text = styled.p`
    color: #202020;
    font-size: 18px;
    line-height: 26px;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
    opacity: 70%;
    @media(max-width: 919px) {
        font-size: 15px;
    }
    @media(max-width: 500px) {
        font-size: 12px;
    }
    
`
export default Text;