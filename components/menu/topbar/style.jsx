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
    background-color: rgba(0,0,0,.7);
    z-index: 98;
`;

export const TopUL = styled.ul`
    height: 100%;
    width: 100%;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TopLI = styled.li`
    padding: .5rem;
`;

export const LogoImg = styled.img`
    height: 4rem;
    width: 100%;
    &:hover{
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    position: absolute;
    text-transform: capitalize; 
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.theme.white};
`;

export const AccountInfo = styled.div`
    height: 100%;
    width: 20rem;
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
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