import styled from 'styled-components';


export const Container = styled.div`
    display: none;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;

    padding: 45px 23px;
    height: auto;
    background: var(--black);

    position: fixed;
    top: 80px;
    left: 0;
    right: 0;

    font-weight: normal;
    color: var(--gray);

    transition: .5s;
`;
export const Colmun = styled.article`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: .5s;

    > h1 {
        font-size: 15px;
        color: var(--white);
        letter-spacing:1.87px;
        margin-bottom: 20px;
        &:hover{
            text-decoration: underline;
        }
    }
    > a {
        font-size: 12px;
        line-height: 13px;
        margin-bottom: 10px;
        &:hover{
            color: var(--white);
            text-decoration: underline;
        }
    }
    .bold{
        font-weight: bold;
    }
    .under{
        text-decoration: underline;
    }
    .imageFake{
        width:100%;
        height: 99px;
        background: var(--tertiary);
    }
`;