import styled from 'styled-components'

const CheckButton = styled.button`
    font-size: 1rem;    
    padding: 1em 2em;
    border: none;
    background: black;
    border-radius: 3px;
    color: white;

    &:hover, 
    &focus {
        background: white;
        color: black;
        border: 1px solid black;
    }

    &:active {
        background: black;
        color: white;
    }

    &:disabled {
        background: lightGrey;
        color: darkGrey;
        border: 1px solid black;
    }
`

const CheckContainer = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
`


export { CheckButton, CheckContainer }