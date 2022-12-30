import styled from "styled-components"

const CluesContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    align-items: center;
    grid-row: 2 / 3;
    grid-column: 3 / 4;
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