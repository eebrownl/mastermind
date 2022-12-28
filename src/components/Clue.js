


function Clue( { exactMatches, numInCode }) {
    return(
        <div>
            <div>{`exact matches: ${exactMatches}`}</div>
            <div>{`numbers in code: ${numInCode}`}</div>
        </div>
    )
}

export default Clue