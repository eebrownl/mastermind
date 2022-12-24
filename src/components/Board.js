import BoardButton from "./BoardButton";
import { useState, useEffect } from 'react'
import ColorButton from "./ColorButton";
import CheckButton from "./CheckButton"
import Clue from './Clue'



function Board() {
    const [boardButtons, setBoardButtons] = useState(createBoardButtons())
    const [colorPicker, setColorPicker] = useState(createColorPicker())
    const [selectedColor, setSelectedColor] = useState(1)
    const [currentTurn, setCurrentTurn] = useState(1)
    const [secretCode, setSecretCode] = useState([])
    const [checkButtons, setCheckButtons] = useState(createCheckButtons())
    const [clues, setClues] = useState(createClues())

    function createClues() {
        const newClues = []
        for (let i = 0; i < 32; i++) {
            newClues.push({
                id: i+1,
                match: '',
            })
        }
        return newClues
    }
    
    function createCheckButtons() {
        const newCheckButtons = []
        for (let i = 0; i < 8; i++) {
            newCheckButtons.push({
                id: i + 1,
                isActive: true
            })
        }
        return newCheckButtons
    }
    
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
                colorValue: 0,
                isActive: true,
            })
        }
        return newBoardButtons
    }

    function handleBoardClick(id) {
        setBoardButtons(oldButtons => oldButtons.map(button => {
            return button.id === id ? 
            {...button, colorValue: selectedColor, isActive: false} :
            button
    }))
    }

    function handleColorClick(colorValue) {
        setSelectedColor(colorValue)
    }

   
    //Elements
    //============================================================
    const boardButtonElements = boardButtons.map(button => (
        <BoardButton key={button.id} id={button.id} colorValue={button.colorValue} isActive={button.isActive} onClick={() => handleBoardClick(button.id)}/>
    ))

    const colorPickerElements = colorPicker.map(button => (
        <ColorButton key={button.id} id={button.id} colorValue={button.colorValue} onClick={() => handleColorClick(button.colorValue)}/>
    ))

    const checkButtonElements = checkButtons.map(button => (
        <CheckButton key={button.id} id={button.id} isActive={button.isActive} />
    ))

    const clueElements = clues.map(clue => (
        <Clue id={clue.id} match={clue.match}/>
    ))

    //Styles
    //===========================================================
    const boardButtonStyles= {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: '300px',
        margin: '0 auto'
    }

    // Fetch
    // ============================================================
    let url = 'https://www.random.org/integers/?num=4&min=1&max=8&col=1&base=10&format=plain&rnd=new'

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => setSecretCode(data.replace(/\r?\n|\r/g, '').split('')))
    }, [])
    

    return(
        <div>
            <div>
                {colorPickerElements}
            </div>
            <div style={boardButtonStyles}>
                {boardButtonElements}
            </div>
            <div>
                {checkButtonElements}
            </div>
            <div>
                {clueElements}
            </div>
            
        </div>
    )
}

export default Board