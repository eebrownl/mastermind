import BoardButton from "./BoardButton";
import { useState } from 'react'
import ColorButton from "./ColorButton";


function Board() {
    const [boardButtons, setBoardButtons] = useState(createBoardButtons())
    const [colorPicker, setColorPicker] = useState(createColorPicker())
    const [selectedColor, setSelectedColor] = useState()

    function createColorPicker() {
        const newColors = []
        for (let i = 0; i < 8; i++) {
            newColors.push({
                id: i + 1,
                colorValue: i + 1
            })
        }
        return newColors
    }

    function createBoardButtons() {
        const newBoardButtons = []
        for (let i = 0; i < 32; i++) {
            newBoardButtons.push({
                id: i+1,
                colorValue: 1,
                isActive: true,
            })
        }
        return newBoardButtons
    }

    function handleColorClick() {
        
    }
    //Elements
    //============================================================
    const boardButtonElements = boardButtons.map(button => (
        <BoardButton key={button.id} id={button.id} colorValue={button.colorValue} isActive={button.isActive} />
    ))

    const colorPickerElements = colorPicker.map(button => (
        <ColorButton key={button.id} id={button.id} colorValue={button.colorValue}/>
    ))

    //Styles
    //===========================================================
    const boardButtonStyles= {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
    }

    
    
    return(
        <div>
            <div>
                {colorPickerElements}
            </div>
            <div style={boardButtonStyles}>
                {boardButtonElements}
            </div>
            
        </div>
    )
}

export default Board