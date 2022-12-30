import styled from "styled-components"

const ColorContainer = styled.div`
    padding: 1em;
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    display: flex;
    justify-content: center;
`

const handleColorValue = value => {
    switch(value) {
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

const handleHoverValue = value => {
    switch(value) {
        case 1:
            return "#7494f2";
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
    display: inline-block;    
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: ${({ value }) => handleColorValue(value)};
    border: none;
    margin: .5em;

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