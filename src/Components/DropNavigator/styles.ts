import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 100%;
    padding: 10px 0px;
    @media(min-width: 1024px){
        display: none
    }
`;
