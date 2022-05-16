import styled from 'styled-components';

export const MoviesSection = styled.section`
    grid-row: 2;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 7rem 0 5rem;  
`;

export const Container = styled.div`
    overflow: hidden;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 4rem;
`;

export const H3 = styled.h3`
    text-transform: uppercase;
    font-size: 2.4rem;
    margin: 0rem 0 0rem 7rem;
    font-weight: 300;
    letter-spacing: 1rem;
`;