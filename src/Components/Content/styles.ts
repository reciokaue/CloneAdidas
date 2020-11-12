import styled, { css } from 'styled-components';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { FaFootballBall } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import { RiGameFill } from 'react-icons/ri';
import { BiJoystickAlt } from 'react-icons/bi';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--black);
    > img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
        object-position: 100%;
    }
`;

export const TeamRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    max-width: 100vw;
    height: 120px;
    > h1{
        font-size: 10px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 2px;
    }
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1440px;
`;
export const ProductRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 260px 500px;

    grid-template-areas:
    'card1 card2 card3 card4'
    'masc masc fem fem';

    grid-gap: 20px;
    padding: 20px;

    width: 100%;
    @media(max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 260px 260px 500px 500px;

        grid-template-areas:
        'card1 card2'
        'card3 card4'
        'masc masc'
        'fem fem';
    }
    @media(max-width: 500px){
        grid-gap: 10px;
        padding: 10px;
    }
    @media(max-width: 425){
        grid-gap: 5px;
        padding: 5px;
    }
`;
export const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    .card1{
        grid-area: card1;
    }
    .card2{
        grid-area: card2;
    }
    .card3{
        grid-area: card3;
    }
    .card4{
        grid-area: card4;
    }

    width: 100%;
    height: 100%;
    background: var(--primary);

    cursor: pointer;
    h1{
        position: absolute;
        bottom: 20px;
        font-size: 15px;
        line-height: 17px;
        letter-spacing: 2px; 
        text-decoration: underline;
        cursor: pointer;
        &:hover{
            background: var(--white);
            color: var(--black);
        }
    }
    > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const BuyGenre = styled.div`
    background: var(--primary);

    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 100%;
    }

    &.masc{
        grid-area: masc;
    }
    &.fem{
        grid-area: fem;
    }
`;
export const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    bottom: 50px;

    background: var(--black);
    color: var(--white);

    width: 250px;
    height: 50px;   
    padding : 10px 10px;
    flex-shrink: 0;
    transition: .2s;

    &:hover{
        background: var(--white);
        color: var(--black);
        transition: .2s;
        transform: translateX(10px) translateY(-10px);

        &::after{
            border: 1px solid var(--white);
            transform: translateX(-10px) translateY(10px);
            content: '';
        }
        > svg{
            color: var(--black);
        }
    } 
    &::after{
        position: absolute;
        background: transparent;

        margin-top: 4px;
        margin-left: 4px;

        width: 250px;
        flex-shrink: 0;
        height: 50px;     
        border: 1px solid var(--black);
        content: '';
        transition: .2s;
    }
`;

export const ArrowIcon = styled(HiOutlineArrowNarrowRight)`
    width: 25px;
    height: 25px;
    color: var(--white);
`;

const IconCSS = css`
    width: 50px;
    height: 50px;
    color: var(--gray);
    margin: 5px;

    cursor: pointer;
    transition: .2s;
    &:hover{
        color: var(--white);
    }
`;
export const EasyNavigation = styled.div`

`;

export const Brand1 = styled(RiGameFill)`${IconCSS}`;
export const Brand2 = styled(GiSoccerBall)`${IconCSS}`;
export const Brand3 = styled(FaFootballBall)`${IconCSS}`;
export const Brand4 = styled(BiJoystickAlt)`${IconCSS}`;