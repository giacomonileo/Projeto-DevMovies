import styled from 'styled-components'

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    background: #000;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    padding: 50px;
    max-width: 1200px;

    iframe{
        border: none;
    }
    button{
        cursor: pointer;
        height: 30px;
        width: 60px;
        border-radius: 8px;
        font-size: 15px;
        opacity: 0.7;

    }
`