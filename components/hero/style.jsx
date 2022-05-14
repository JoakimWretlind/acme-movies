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
    height: 100vh;
    width: 100%;    
`;

// HERO MAIN IMAGE SETTINGS
export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100vh;
    min-width: 100%;
    object-fit: cover;    
`;

// CONTAINER FOR THE INFORMATION
export const Container = styled.div`
    position: absolute;
    top: 26vh;
    left: 15%;    
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; // flex-start to easier calculate margins
    align-items: flex-start;
    z-index: 3;  
`;

// GENRE
export const H5 = styled.h5`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    letter-spacing: .3rem;
    font-size: 3rem;
    color: ${props => props.theme.white};
`;

export const Border = styled.div`
    border-bottom: .1rem solid white;
    height: .1rem;
    width: 30rem;
    margin-top: .5rem;
`;

// VIDEO TITLE
export const H2 = styled.h2`
    color: ${props => props.theme.white};
    font-family: 'anton', sans-serif;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: clamp(3rem, 6vw, 9rem);
    letter-spacing: .5rem;
    margin-top: -1rem;
`;

// This container is to keep the text in the same heigth,
// so that the buttons will be placed at the same place
// regardless of which video is showing
export const TextContainer = styled.div`
    height: 20vh;
    width: 100%;
`;

export const P = styled.p`
    color: ${props => props.theme.white};
    font-size: 2rem;
    letter-spacing: .2rem;    
    font-weight: 300;
    line-height: 1.2;
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