import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 0vh;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: ${props => props.theme.red}; */
    background-color: yellow;
`;

export const InnerWrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 150rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

export const Info = styled.div`
    display: none;
`;

export const ImageWrapper = styled.div`    
    width: 50vh;
`;

// Use keyframes here becaus that's the most effective way
const stagger = keyframes`
   0% {
        opacity: 0;
        height: 50vh;
        width: 20%;
        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    }
    11% {
        opacity: 0;
        height: 50vh;
        width: 20%;
        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    }
    51%{
      opacity: 1;
    }
    70%{
        width: 100vw;
    }
    74%{
        height: 50vh;
    }
    100% {
        height: 100vh;
        opacity: 1;
  } 
`

export const Img = styled.img`      
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    animation: 1.7s  ${stagger};
`;

export const H2 = styled.h2`
    text-transform: capitalize;
    font-weight: 400;
    font-size: clamp(2rem, 2vw, 3rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
    color: #333;
`;

export const H3 = styled.h3`
    text-transform: capitalize;
    font-weight: 300;
    font-size: clamp(1.4rem, 2vw, 2rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
    color: #333;
`;

export const UL = styled.ul`
    height: 50vh;
    min-height: 22rem;
    width: 100%;
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const LI = styled.li`
    padding: .5rem;
`;

export const A = styled.a`
    text-transform: capitalize;
    font-weight: 200;
    font-size: clamp(2rem, 2vw, 3rem);
    letter-spacing: clamp(.1rem, 2vw, .3rem);
   
    color: #333;
    &:hover{
        cursor: pointer; 
    }
`;

export const MotionOverlay = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: transparent;
`;

export const Panel = styled.div`
    height: 100vh;
    background-color: red;
`;
