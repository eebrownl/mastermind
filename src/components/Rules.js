import styled from 'styled-components'

const RulesButton = styled.button`
    background: white;
    color: black;
    border: none;
    padding: 1em 2em;
    font-weight: 600;
`



const RulesInfo = styled.p`
    font-family: 'Karla', sans-serif;
    text-align: center;
`

const RulesContainer = styled.div`
    grid-row: 1 / 4;
    grid-column: 1 / 2;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

function Rules() {
    return(
        <RulesInfo>I have created a secret code of 4 colored pegs. You have 10 guesses to put the right colored pegs in the right order. After each round I will tell you how many of your pegs are exact matches and how many of the colors you used exist in my code. Good luck!</RulesInfo>
    )
}


export { RulesButton, Rules, RulesContainer}