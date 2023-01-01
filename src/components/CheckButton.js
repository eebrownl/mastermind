import styled from 'styled-components'

const CheckButton = styled.button`
    font-size: 1rem;    
    padding: .8em 1.8em;
    border: none;
    background: black;
    border-radius: 3px;
    color: white;
    font: 'Karla', sans-serif;

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
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
`


export { CheckButton, CheckContainer }