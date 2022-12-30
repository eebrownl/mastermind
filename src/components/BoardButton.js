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
            return "dimGrey"
    }
}

const BoardButton = styled.button`
    &:enabled {
        background: lightGrey;
    }

    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: ${({ colorValue }) => handleColorValue(colorValue)};
    border: 1px solid grey;

    

`

const BoardButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: .4em;
    width: 300px;
    margin: 0 auto;
    grid-row: 2 /3;
    grid-column: 2 / 3;
`

export { BoardButton, BoardButtonContainer }