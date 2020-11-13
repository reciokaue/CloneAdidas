import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
    
     & + & + & + & > span h1{
        font-weight: 300;
        opacity: 0.8;
    }
    &:nth-child(3){
        border-bottom: 1px solid var(--primary);
    }
    span{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: var(--white);
        > h1, span{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 20px;
            text-transform: uppercase;
        }
        > h1{
            line-height: .9;
            padding: 14px 20px 14px 20px;
            font-size: 18px;
            font-weight: 600;
            transition: .3s;
            letter-spacing: 2px;
        }
        > span{
            border-top: 1px solid var(--primary);
            line-height: 1.1;
            font-size: 16px;
            font-weight: 400;
            color: var(--white);
            opacity: 0.8;
        }
    }
    
    .droped{
        background: var(--tertiary);
        & > svg{
            transform: rotate(180deg);
        }
    }
`;
export const Arrow = styled(MdKeyboardArrowDown)`
    width: 25px;
    height: 25px;
    color: var(--white);
    cursor: pointer;
`;
export const DropContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    flex-direction: column;
    height: 0;
    overflow: hidden;
    width: 100%;

    &.ContainerDroped{
        height: fit-content!important;
        margin-bottom: 10px;
    }

    transition: .2s;
    > h2{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        line-height: 1.1;
        padding: 14px 20px;
        text-transform: uppercase;
        font-size: 16px;
        color: var(--gray);
        font-weight: 400;
        border-top: 1px solid var(--primary);

        text-decoration: none;
        &.lv1A{
            font-size: 14px;
            line-height: 1.4;
            padding: 14px 20px 14px 33px;
            font-weight: 400;
            color: var(--senary);
            border-top: 1px solid var(--primary);
        }
    }
`;