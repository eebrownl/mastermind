import styled from 'styled-components'

const CheckButton = styled.button`
    font-size: 1rem;    
    padding: 1em 2em;
    border: none;
    background: black;
    border-radius: 3px;
    color: white;
`

const CheckContainer = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
`


export { CheckButton, CheckContainer }