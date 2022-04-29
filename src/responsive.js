import {css} from 'styled-components';

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 380px) {
        ${props}
    }
    `;
} 

export const tablet = (props) => {
    return css`
    @media only screen and (min-width: 381px) and (max-width: 768px) {
        ${props}
    }
    `;
}

export const laptop = (props) => {
    return css`
    @media only screen and (min-width: 769px) and (max-width: 1250px) {
        ${props}
    }
    `;
}

export const large = (props) => {
    return css`
    @media only screen and (min-width: 1250px) and (max-width: 1550px) {
        ${props}
    }
    `;
}