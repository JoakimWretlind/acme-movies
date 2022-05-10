import styled from 'styled-components';

// We use two wrappers.
// The first one to set outer peremiters and to center the second wrapper
export const GenreWrapper = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

// The second is to place the cards and to set max
// width
export const InnerWrapper = styled.div`
    height: min-content;
    width: 100%;
    max-width: 156rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

/****** CARD *******/
export const CardItem = styled.li`
    position: relative;
    overflow: hidden;
    width: clamp(12rem, 25vw, 40rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    transition: .25s ease-out;
    &:hover{
        transform: scale(1.1);
    }
`;

export const Img = styled.img`
    /* height: 100%; */
    width: 100%;
    object-fit: cover;
    &:hover{
        cursor: pointer;
    }
`;

/******* TEXT *******/
export const H3 = styled.h3`
    text-align: left;
    text-transform: uppercase;
    font-size: 2rem;
    margin: 5rem 0 3rem;
    font-weight: 300;
    letter-spacing: 1rem;
`;

export const H5 = styled.h5`
    position: absolute;    
    bottom: 0;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-size: 1.2rem;
    letter-spacing: clamp(.1rem, 2vw, .3rem);
    width: 100%;
    background-color: rgba(0,0,0,.5);
`;