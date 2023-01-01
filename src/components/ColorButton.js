import styled from "styled-components"

const ColorContainer = styled.div`
    box-sizing: border-box;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    // border: 1px dashed black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(10, 1fr);
    padding: 1em;
`

const handleColorValue = value => {
    switch(value) {
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
            return "grey"
    }
}

const handleHoverValue = value => {
    switch(value) {
        case 1:
            return "#abd8eb";
        case 2:
            return "#bad9ba";
        case 3:
            return "#fcd7dd";
        case 4:
            return "#9e90f0";
        case 5:
            return "#fae152";
        case 6:
            return "#d93b5a";
        case 7:
            return "#3aa1a1";
        case 8:
            return "#f7a643";
        default: 
            return "grey"
    }
}
const Label = styled.label`
    box-sizing: border-box;    
    display: inline-block;    
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background: ${({ value }) => handleColorValue(value)};
    border: none;
    // margin: .5em;
    justify-self: center;

    &:hover,
    &:focus {
        background: ${({ value }) => handleHoverValue(value)};
    } 

    &:has(input:checked) {
        border: 2px solid black;
    }

    
`

const Input = styled.input`
    appearance: none;
    

`

export {Label, Input, ColorContainer}