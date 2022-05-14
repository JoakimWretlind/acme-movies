import styled, { keyframes } from 'styled-components';

/**  ToSlug **/
// Set the grid-template-columns to repeat the same amount of panels in 
// '/components/animations/toDetailsTransition', 1fr will make them even
export const MotionOverlay = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    z-index: 99;
`;

export const Panel = styled.div`
    height: 100vh;
    /* background-color: ${props => props.theme.red}; */
    /* background-color: ${props => props.theme.offWhite}; */
    animation: 0.3s ${bg};
`;