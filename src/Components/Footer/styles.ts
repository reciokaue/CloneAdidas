import styled from "styled-components";
import { GiBrazilFlag } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const History = styled.div`
  width: 100%;
  background: var(--quarternary);

  > div {
    @media(max-width: 500px){
        max-width: 100%;
        width: 100%;
        flex-direction: column;

        padding: 20px;
    }
    margin: 0 auto;
    display: flex;
    justify-content: center;
    
    padding: 80px 0px;
    max-width: 1024px;
    width: 100%;

    >div {
        width: 100%;
        text-align: flex-start;
        margin-bottom: 20px;
            
        &:first-child{
            margin-right: 20px;
        }
        > h1 {
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }
        > p {
            font-size: 14px;
            line-height: 20px;
            color: var(--gray);
        }
    }
  }
`;
export const NewsLetter = styled.div`
    background: #ede734;
    width: 100%;
    max-height: 150px;
    height: 100%;
    @media(max-width: 500px){
        max-height: 100%;

        div{
            max-width: 100%;
            width: 100%;
            height: 100%;
            flex-direction: column;
            > div:nth-child(1) {
                margin-top: 40px;
                width: 300px!important;
            }
            > div:nth-child(2){
                justify-content: center;
                align-items: center;
            > button{
                width: 300px!important;
                &::after {
                width: 300px!important;
                }
            }
            }
        }
    }
  > div {
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:nth-child(1) {
      font-weight: bold;
      width: 440px;
      font-size: 30px;
      line-height: 28px;
      text-align: left;
      color: var(--black);
    }
    > div:nth-child(2){
      display: flex;
      justify-content: flex-end;
      padding-top: 40px;

      > button {
        margin-right: 4px;
        position: relative;
        margin-top: 60px;
        width: 355px;
        &::after {
          width: 355px;
        }
      }
    }
  }
`;
export const LinkMap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0px 50px;
  @media(max-width: 960px){
      display: none;
  }
  > div {
    @media(max-width: 500px){
        max-width: 100%;
        width: 100%;
        flex-direction: column;
        padding: 20px;
    }
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const Columns = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width:100%;
    
    >a > h1 {
        font-size: 18px;
        color: var(--white);
        line-height: 23px;
        text-align: left;
        letter-spacing:1.87px;
        margin: 10px 0px;
        text-transform: uppercase;
    }
    > a {
        font-size: 13px;
        line-height: 23px;
        text-align: left;
        color: var(--gray);
        margin-bottom: 10px;
        cursor: pointer;
    }
    > h1:hover, a:hover{
            color: var(--white);
            text-decoration: underline;
    }
    .bold{
        font-weight: bold;
    }
`;
export const Payment = styled.div`
    width: 100%;
    height: 125px;
    > div{
        margin: 0 auto;
        max-width: 1024px;
        width: 100%;

        display: flex;
        align-items: center;
        flex-direction: column;

        > h1 {
            @media(max-width: 630px){ padding: 10px;}
            width: 100%;
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            text-align: start;
            color: var(--gray);
        }
        > div{
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            border-bottom: 1px solid var(--gray);
            padding-bottom: 5px;
            max-height: 24px;
            overflow-y: visible;
            transform: translateY(40px)
        }
        section{
            background: transparent;
            margin-left: 10px;
            &:first-child{
                margin-left: 0;
            }
            > span{
                /* display: none; */
                font-size: 0;
                justify-content: center;
                transition: 0s;
                transform: translateY(-100px); 
            }
            &:hover {
                > span{
                    display: flex;
                    font-size: 25px;

                    transform: translateY(-148px); 
                    transition: .5s;
                    @media(max-width: 630px){
                        font-size: 15px;
                        transform: translateY(-5px); 
                    }
                }
                > svg{
                    color: var(--white);
                    
                    @media(max-width: 630px){
                        width: 70px;
                        height: 70px;
                        margin: 0px 5px 0 5px!important;
                        transform: translateY(-5px);
                    }
                    width: 120px;
                    height: 120px;
                    margin: 0px 20px 0 20px!important;
                    
                    transform: translateY(-50px);
                    transition: .3s;
                }
            }
        }
    }
`;
export const Bureaucratic = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 125px;
    background: var(--black);
    @media(max-width: 750px){
        padding: 10px;
        height: 100%;
        width: 100%;
    }
    @media(max-width: 1024px){
        padding: 10px;
    }
    
    > div{
        margin: 0 auto;
        max-width: 1024px;
        width: 100%;

        display: flex;
        align-items:  space-between;
        justify-content: center;
        flex-direction: column; 
        
        padding:13px 0px;
        color: var(--gray);
        > p{
            text-align: right;
            font-size: 12px;
            line-height: 20px;
        }
        > h1{
            @media(max-width: 750px){
                justify-content: center;
            }
            
           font-size: 12px;
           line-height: 12px;
           text-align: start; 

           display: flex;
           align-items: center;
           &:hover{
               cursor: pointer;
                color: var(--white);
                >svg{
                    color: var(--white);
                }
            }
        }
    }
`;

export const BrasilIcon = styled(GiBrazilFlag)`
    width: 23px;
    height: 23px;
    color: var(--gray);

    margin-right: 5px;
`;
export const CreditCardIcon = styled(FaCreditCard)`
    width: 23px;
    height: 23px;
    color: var(--gray);
    transition: .6s;
    cursor: pointer;
    /* &:hover{
        color: var(--white);
        transform: translateY(-50px);
        width: 120px;
        height: 120px;
        margin: 0px 20px 0 20px!important;
        transition: .2s;
    }   
    &+&{
        margin-left: 10px;
    } */
`;
