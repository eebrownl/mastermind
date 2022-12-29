import styled from "styled-components"

const handleColorValue = colorValue => {
    switch(colorValue) {
        case 1:
            return "royalBlue";
        case 2:
            return "darkSeaGreen";
        case 3:
            return "pink";
        case 4:
            return "mediumSlateBlue";
        case 5:
            return "gold";
        case 6:
            return "crimson";
        case 7:
            return "darkCyan";
        case 8:
            return "darkOrange";
        default: 
            return "grey"
    }
}

const BoardButton = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: ${({ colorValue }) => handleColorValue(colorValue)};
    border: none;
`
// const styles={
//     height: '50px',
//     width: '50px',
//     borderRadius: '50px'
// }

// function BoardButton({ id, colorValue, isActive, onClick}) {
//     return(
//         <button disabled={!isActive} onClick={onClick} id={id} style={styles}>{colorValue}</button>
//     )
// }

export default BoardButton