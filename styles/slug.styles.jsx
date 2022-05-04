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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

export const Info = styled.div`
    position: absolute;
    top: 26vh;
    left: 10%;
    width: 46%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; // flex-start to easier calculate margins
    align-items: flex-start;
    z-index: 3;
    backdrop-filter: blur(.3rem);
    background: rgba(0,0,0,.3);
    padding: 1rem 3rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 .4rem 1.2rem rgba(66,66,66,.3);    
`;

export const H2 = styled.h2`
    font-family: 'anton', sans-serif;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: clamp(3rem, 4vw, 9rem);
    letter-spacing: .7rem;
    margin-bottom: -2rem;
`;

export const H3 = styled.h3`
    text-transform: uppercase;
    margin: 0.5rem 0 1.5rem;
    font-weight: 300;
    font-size: 1.2rem;
    letter-spacing: 1rem;
`;

export const H5 = styled.h5`
    text-transform: capitalize;
    font-size: 2.2rem;
    letter-spacing: .2rem;
    font-weight: 500;
    margin: 0 0 3rem;
`;

export const P = styled.p`
    font-size: 1.8rem;
    letter-spacing: .2rem;
    font-weight: 300;
    line-height: 1.2;
    padding: 0 4.5rem;
`;

export const ButtonContainer = styled.div`
    margin-top: 6rem;
    height: 4rem;
    width: 40rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.a`
    height: 4rem;
    width: 16rem;
    background-color: transparent;
    outline: none;
    border-radius: 2rem;
    border: .1rem solid ${props => props.theme.white};
    color:  ${props => props.theme.white};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2rem;
    letter-spacing: .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &.play {
        background-color: ${props => props.theme.red};
    }
    &.back {
        background-color: rgba(0,0,0,.7);
    }
`;

/** VIDEO **/
export const VideoPlayer = styled.video`
    position: absolute;
    top: 53vh;
    left: 52%;
    height: 20vh;
    border-radius: 1rem;
    opacity: .5;
    z-index: 3;
`;

/******* THEM IMAGE *******/
// Use keyframes here because that's the most effective way
// to make this transition smooth.
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

// This is to make the overlay as 'invisible' as possible
// when being added to the image
const overlayImg = keyframes`
   0% {
        opacity: 0;
        height: 0;        
    }
    50%{
        opacity: 0;  
    }
    100% {
        opacity: 1
        height: 100vh;
  } 
`

// This is needed for the overlay
export const ImageWrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;  
    &::after{
        content: ""; // ::before and ::after both require content
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background-image: radial-gradient(rgba(0,0,0,.1), rgba(0,0,0,.7));
        opacity: .7;
        z-index: 2;
        animation: 1.5s  ${overlayImg};
    }
`;


export const Img = styled.img`   
    height: 100vh;
    /* width: 100vw; */
    object-fit: cover;
    animation: 1.2s  ${growImage};
    z-index: 0;  
    @media (min-aspect-ratio: 16/9) {
        width: 100vw;
        object-fit: cover;
        animation: 1.2s  ${growImage};
        z-index: 0;
    }
`;
