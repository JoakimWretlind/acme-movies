import styled from 'styled-components';

// MAIN HERO SCREEN
export const Hero = styled.section`
    position: relative;
    grid-row: 1;
    grid-column: 1 / -1;    
`;

// This one is needed for swiper to be able
// to hold a full page image instead of using
// a background-image
export const MainContainer = styled.div`   
    width: 100%;
    min-height: 70vh;
    @media (min-width: ${props => props.theme.medium}){
        height: 100vh;            
    }
`;

// HERO MAIN IMAGE SETTINGS
export const Img = styled.img`
    margin-top: 8rem;
    width: 100%;
    min-height: 35vh;
    height: auto !important; 
    object-fit: cover;
    @media (min-width: ${props => props.theme.medium}){
        margin-top: 0;
        height: 100vh;
        object-fit: cover;
    }
`;

// CONTAINER FOR THE INFORMATION
export const Container = styled.div`
    position: absolute;
    top: 17vh;
    left: 15%;    
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; // flex-start to easier calculate margins
    align-items: flex-start;
    z-index: 3;  
    @media (min-width: ${props => props.theme.medium}){
        top: 26vh;
    }
`;

// GENRE
export const H5 = styled.h5`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    letter-spacing: .3rem;
    font-size: clamp(2rem, 2vw, 3rem);
    color: ${props => props.theme.white};
    @media (min-width: ${props => props.theme.medium}){
        font-weight: 500;
    }
`;

export const Border = styled.div`
    border-bottom: .1rem solid white;
    height: .1rem;
    width: 60vw;
    max-width: 20rem;
    margin-top: .5rem;
    @media (min-width: ${props => props.theme.medium}){
        width: 30rem;
    }
`;

// VIDEO TITLE
export const H2 = styled.h2`
    color: ${props => props.theme.white};
    text-transform: uppercase;
    white-space: nowrap;
    font-family: 'Antonio', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: .3rem;
    @media (min-width: ${props => props.theme.small}){
        font-family: 'anton', sans-serif;
        font-size: clamp(3rem, 6vw, 9rem);        
        letter-spacing: .5rem;
        margin-top: .0rem;
    }
    @media (min-width: ${props => props.theme.large}){
        margin-top: -1rem;
    }
`;

// This container is to keep the text in the same heigth,
// so that the buttons will be placed at the same place
// regardless of which video is showing
export const TextContainer = styled.div`    
    width: 55%;
    @media (min-width: ${props => props.theme.medium}){
        margin-left: -3rem;
        width: 80%;
    }
    @media (min-width: ${props => props.theme.medium}){
        height: 20vh;
        width: 100%;
    }
`;

export const P = styled.p`
    color: ${props => props.theme.white};
    font-size: 1.4rem;
    letter-spacing: .2rem;    
    font-weight: 200;
    line-height: 1.1;
    margin-top: 2rem;
    @media (min-width: ${props => props.theme.medium}){
        margin: 0;
        font-size: 2rem;
        font-weight: 300;
        letter-spacing: .2rem;
        line-height: 1.2;
    }
`;

// TO ALIGN THE BUTTONS HORIZONTALLY
export const ButtonContainer = styled.div`
    margin-top: 5rem;
    height: 4rem;
    width: 40rem;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
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
    &.watch{
        background-color:  ${props => props.theme.red};
        border: .1rem solid transparent;
    }
    &:hover{
        cursor: pointer;
    }
`;