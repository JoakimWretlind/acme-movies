import styled from 'styled-components';

export const MoviesSection = styled.section`
    grid-row: 2;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 7rem 0 11rem;  
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
    font-weight: 200;
    letter-spacing: .3rem;
    font-size: 1.2rem;
    text-transform: capitalize;
`;

export const H5 = styled.h5`
    text-transform: capitalize;
    text-align: center;
    margin: 2rem 0 .5rem;
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: .2rem;
    line-height: 1.1;
`;

export const SliderItem = styled.li`
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    height: 34rem;
    width: 22rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 2rem;
    cursor: grab;
    box-shadow: 0 .3rem 1.2rem rgba(69,69,69,.3);
`;

export const Img = styled.img`
    height: 20rem;
    object-fit: cover;    
    pointer-events: none;    
`;

export const ButtonContainer = styled.div`
    position: absolute;
    width: 96%;
    bottom: 2.5rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.a`
    width: 9.6rem;
    height: 3rem;
    border: .1rem solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 300;
    border-radius: 2rem;
    color: ${props => props.theme.white};
    letter-spacing: .1rem;;
    &.watch{
        background-color: ${props => props.theme.red};
        border: .1rem solid transparent
    }
    &:hover{
        cursor: pointer;
    }
`;