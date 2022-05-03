import styled from 'styled-components';

export const Footer = styled.footer`
    grid-row: 3;
    grid-column: 1 / -1;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const P = styled.p`
    text-transform: capitalize;
    font-size: 1.2rem;
    letter-spacing: .3rem;
    margin: 0 2rem;
`;

export const A = styled.a`
    text-transform: capitalize;
    font-size: 1.2rem;
    letter-spacing: .3rem;
    margin: 0 2rem;
    padding: 1rem;
    &:hover{
        cursor: pointer;
    }
`;