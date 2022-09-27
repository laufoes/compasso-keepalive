import styled from 'styled-components';
import { corDestaque, corPrincipal } from '../../assets/styles/variables';

interface Props {
    variant: boolean
}

export const Button = styled.button<Props>`
    height: 9.26vh;
    width: 50%;
    font-size: 12px;
    margin-top: 0px;
    border: none;
    cursor: pointer;
    color: ${({variant}) => variant ? corDestaque : corPrincipal };
    background-color: ${({variant}) => variant ? "white" : "transparent"};
    @media screen and (max-width: 480px) {
        height: 8rem;
    }
`