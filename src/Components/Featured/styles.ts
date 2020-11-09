import styled, { css } from 'styled-components';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;  
    overflow: hidden;
    padding: 50px 0;
    
    @media(min-width: 1024px){
        max-width: 1024px;
        & > section {
            background: #f0f;
            display: flex!important;
        }
    }
    @media(max-width: 1023px){
        max-width: 768px;
        & > section > span{
            background: #f0f;
        }
    }
    @media(max-width: 767px){
        max-width: 512px;
       & > section > span{
            background: #f0f;
        }
    }
    @media(max-width: 535px){
        max-width: 256px;
        span{
            background: #f0f;
        }
    }

    > h1{
        font-size: 30px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 1.5px;
        margin-bottom: 20px;
    }
    > div{
        display: flex;
        flex-direction: row;
        transition: 1s;
        margin:0 auto;
        
    } 
    > section{
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        max-height: 2px;
        margin: 20px 0px 0px;   
        position: relative;

        > button{
            position: absolute;
            top: -203px;
            
            display: flex;
            justify-content: center;
            align-items: center;

            background: #00000044;
            &.left{
                left: 11px;
            }
            &.right{
                right: 11px;
            }
            &.none{
                display: none;
            }
            &:hover{
                background: var(--white);
                >svg{
                    color: var(--black);
                }
            }
            transition: .2s;
        }
        > span{
            display: flex;
            width: 20px;
            max-height: 20px;
            height: 20px;
            background: transparent;
            border-bottom: 3px solid var(--white);

            cursor: pointer;
            transition: .2s;
            
            &:hover,&.on{
                border-bottom: 7px solid var(--white);
            }
        }
        span + span{margin-left: 10px;}
    }
`;
export const Card = styled.div`
    width: 246px;
    height: 388px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;    
    flex-shrink: 0;
    background: var(--tertiary);
    &:hover{
        border: 1px solid #fff; 
    }
    margin: 0 5px;
`;
const IconCSS = css`
    width: 24px;
    height: 24px;
    color: var(--gray);
`;

export const LeftArrowIcon = styled(MdKeyboardArrowLeft)`${IconCSS}`;
export const RightArrowIcon = styled(MdKeyboardArrowRight)`${IconCSS}`;