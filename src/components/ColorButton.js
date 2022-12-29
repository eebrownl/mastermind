import styled from "styled-components"

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

const Label = styled.label`
    display: inline-block;    
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: ${({ value }) => handleColorValue(value)};
    border: none;
`

const Input = styled.input`
    appearance: none;
    

`

export {Label, Input}