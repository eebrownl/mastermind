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
    height: 45px;
    width: 45px;
    border-radius: 45px;
    background: ${({ colorValue }) => handleColorValue(colorValue)};
    border: 1px solid grey;
    margin: 0 1em;
`

export { CodePeg } 