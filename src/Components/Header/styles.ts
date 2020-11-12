import styled from 'styled-components';
import { CgAdidas } from 'react-icons/cg'
import { FaShoppingBasket, FaSearch } from 'react-icons/fa'

export const Container = styled.div`
    width: 100%;
    position: fixed;
    z-index: 10;
    padding: 0 40px;

    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 32px 47px;

    grid-template-areas: 'logo brandRow'
                         'logo productRow';
    background: var(--black);
    @media(max-width: 960px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }
`;
export const BrandRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: brandRow;
    
    @media(max-width: 960px){
        display: none;
    }
    > a{
        display: flex;
        align-items: center;
        padding: 0 10px;

        text-decoration: none;
        color: var(--gray);
        font-size: 13px;
        text-transform: lowercase;
        cursor: pointer;
    }
`;
export const ItemRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: productRow;
`;
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: logo;
`;
export const Products = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    > a{
        display: flex;
        align-items: center;
        padding: 3px 20px;
        height: 47px;
        
        letter-spacing:1.87px;
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 14px;
        color: var(--gray);
        cursor: pointer;

        &:nth-child(1),:nth-child(2),:nth-child(3){
            font-weight: bold;
            color: var(--white);
        }
        &:hover{
            border-bottom: 3px solid var(--white);
            transition: .2s;
        }
        &:hover div{
            display: grid;
        }
    }  
    @media(max-width: 960px){
        display: none;
    }
`;
export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: fit-content;
    min-width: 140px;
    max-width: 300px;
    @media(max-width: 960px){
        > div > input{display: none;}
        &{
            min-width: 0;
        }
    }
    > div{
        display: flex;
        align-items: center;
        position: relative;
    >input{
        padding: 0px 10px;
        background: var(--primary);
        color: var(--senary);
        font-size: 13px;
        height: 32px;
        
    }
    }
    
`;

export const AdidasIcon = styled(CgAdidas)`
    width: 90px;
    height: 57px;
    color: var(--white);
    flex-shrink: 0;
    cursor: pointer;
`;
export const SearchIcon = styled(FaSearch)`
    width: 24px;
    height: 24px;
    fill: var(--white);
    flex-shrink: 0;
    position: absolute;
    right: 5%;
    cursor: pointer;
    opacity: 0.7;
`;
export const BasketIcon = styled(FaShoppingBasket)`
    width: 24px;
    height: 24px;
    color: var(--white);
    margin-left: 10px;
    flex-shrink: 0;
    opacity: 0.7;
    cursor: pointer;
`;