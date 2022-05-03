import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 0vh;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: ${props => props.theme.red};     */
    background-color: #E6E6E3;
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
        height: 0vh;
        width: 0;
        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    }
    57%{
        opacity: 1;
        height: 50vh;
        width: 100vw;
        animation-timing-function: cubic-bezier(.13,.45,.93,.71);
    }
    100% {
        height: 100vh;
  } 
`

export const Img = styled.img`      
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    animation: 1.2s  ${growImage};
`;

