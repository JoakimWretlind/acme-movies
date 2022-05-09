import styled from 'styled-components';

export const LeftNav = styled.nav`
    position: fixed;
    top: 8rem;
    left: 0;
    height: calc(100vh - 8rem);
    width: 8rem;
    display: flex;
    background-color: rgba(0,0,0,.5);
    border-right: .1rem solid ${props => props.theme.gray};
    z-index: 99;
`;

export const LeftUL = styled.ul`
    height: 50%;
    width: 100%;
    margin-top: 14vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`;

export const Img = styled.img`
    height: 3rem;
    object-fit: contain;    
`;

export const LeftLI = styled.li`
    height: 8rem;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: .1rem solid ${props => props.theme.gray};
    border-right: none;
    transition: .3s;
    &:nth-child(4){
        border-bottom: .1rem solid ${props => props.theme.gray};
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 -.1rem .2rem rgba(255,255,255,.1),
        inset .1rem .2rem rgba(0,0,0,.3);
        background-color: rgba(0,0,0,.7);
        &:hover ${Img}{
            transform: scale(0.99) translateY(.1rem);
        }
    }
`;

