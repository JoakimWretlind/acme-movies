import styled from 'styled-components';

export const TopNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.8);
    z-index: 98;
`;

export const TopUL = styled.ul`
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 418px){
        padding: 0 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

// padding only for easier targeting
export const TopLI = styled.li`
    padding: .5;
`;

export const LogoImg = styled.img`
    height: 4rem;
    margin-left: 3rem;
    &:hover{
        cursor: pointer;
    }
    @media (min-width: 418px){
        margin-left: 0;
    }
`;

export const Title = styled.h1`
    position: absolute;
    padding-top: .2rem;
    text-transform: capitalize; 
    left: 50%;
    font-family: "alexbrush";
    font-size: 3.4rem;
    letter-spacing: .3rem;
    transform: translateX(-50%);
    color: ${props => props.theme.white};
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`;

export const AccountInfo = styled.div`
    height: 100%;
    width: max-content;
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    margin-right: 3rem;
    @media (min-width: 418px){
        width: 20rem;
        margin-right: 0;
    }
`;

export const P = styled.p`
    font-size: 1.2rem;
`;

export const Avatar = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-left: 1rem;
`;