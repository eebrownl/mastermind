import styled from "styled-components"

const CluesContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    align-items: center;
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    // border: 1px dashed black;
    padding: .6em;
    font-family: 'Karla', sans-serif;
    font-weight: 300;
`


function Clue( { exactMatches, numInCode }) {
    return(
        <div>
            <div>{`exact matches: ${exactMatches}`}</div>
            <div>{`colors in code: ${numInCode}`}</div>
        </div>
    )
}

export { Clue, CluesContainer}