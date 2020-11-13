import styled from 'styled-components';
import { VscMenu, VscChromeClose  } from 'react-icons/vsc'
import { CgAdidas } from 'react-icons/cg'
import { GiBrazilFlag} from 'react-icons/gi'

export const Container = styled.div`
    display: flex;
    > span{
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media(min-width: 960px){
        display: none;
    }
`;
export const DragContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--black);

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    flex-direction: column;
    z-index: 1;

    &.open{transform: translateX(0vw);}
    &.closed{transform: translateX(-100vw);}
    transition: .8s;

    overflow-y: scroll;
`;
export const Utility = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding: 10px 20px;

        border-top: 1px solid var(--primary);
        width: 100%;
        > a{
            font-size: 18px;
            height: 45px;
            justify-content: space-between;
            width: 100%;
            color: var(--gray);
            font-weight: 300;
            cursor: pointer;
            > label{
                font-size: 12px;
                text-transform: uppercase;
                opacity: .7;
            }
            > span{
                font-size: 15px;
                font-weight: bold;
                color: var(--white);
                margin-left: 10px;
            }
        }
`;
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 10px;
    > button, span{
        width: 44px;
        height: 44px;
        cursor: pointer;
        background: transparent;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    border-bottom: 1px solid var(--primary);
`;
export const CountryRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;   
    padding: 20px 10px; 

    font-weight: 300;
    color: var(--gray);
`;

export const  HamburgerIcon = styled(VscMenu)`
    width: 24px;
    height: 24px;
    color: var(--white);
    cursor: pointer;
`;
export const AdidasIcon = styled(CgAdidas)`
    width: 55px;
    height: 60px;
    color: var(--white);
`;
export const CloseIcon = styled(VscChromeClose)`
    width: 24px;
    height: 24px;
    color: var(--white);
`;
export const BrazilIcon = styled(GiBrazilFlag)`
    width: 20px;
    height: 20px;
    color: var(--white);
    margin-right: 15px;
`;