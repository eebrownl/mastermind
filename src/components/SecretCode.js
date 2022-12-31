import styled from "styled-components"

const handleColorValue = colorValue => {
    switch(colorValue) {
        case 1:
            return "skyBlue";
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

const CodePeg = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: ${({ colorValue }) => handleColorValue(colorValue)};
    border: 1px solid grey;
    margin: 1em;
`

export { CodePeg } 