import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 0vh;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.red};    
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

// Use keyframes here becaus that's the most effective way
const growImage = keyframes`
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
    animation: 1.7s  ${growImage};
`;

