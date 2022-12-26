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
    const [secretCode, setSecretCode] = useState([1,2,3,4])
    const [checkButtons, setCheckButtons] = useState(createCheckButtons())
    const [clues, setClues] = useState(createClues())
    const [playerTurn, setPlayerTurn] = useState(1)
    const [activeButtons, setActiveButtons] = useState([1, 2, 3, 4])
    const [arrayToCheck, setArrayToCheck] = useState([])
    const [matches, setMatches] = useState([])

    // Generate objects for board elements
    // ================================================
    function createClues() {
        const newClues = []
        for (let i = 0; i < 32; i++) {
            newClues.push({
                id: i+1,
                match: 0,
            })
        }
        return newClues
    }

    
    
    function createCheckButtons() {
        const newCheckButtons = []
        for (let i = 0; i < 8; i++) {
            newCheckButtons.push({
                id: i + 1,
                isActive: false
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
                isActive: false
            })
        }
        return newBoardButtons
    }

    function activateButtons() {
        setBoardButtons(prevBoardButtons => (
            prevBoardButtons.map(button => {
                return activeButtons.includes(button.id) ?
                {...button, isActive: !button.isActive} :
                button
            })
        ))
        setCheckButtons(prevCheckButtons => (
            prevCheckButtons.map(button => {
                return button.id === playerTurn ?
                {...button, isActive: !button.isActive} :
                button
            })
        ))
        console.log(secretCode)
    }


    // HandleClicks
    // =================================================================
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

    function handleCheckClick() {
        let boardButtonsCopy = [...boardButtons]
        let activeObjects = (boardButtonsCopy.filter(button => activeButtons.includes(button.id)))
        setArrayToCheck(activeObjects.map(obj => obj.colorValue))

        let matchArray = []
        let secretCodeCopy = secretCode
        for (let i = 0; i < 4; i++) {
            if (arrayToCheck[i] === secretCodeCopy[i]) {
                matchArray.push(1)
                secretCodeCopy[i] = 0
            }else if (secretCodeCopy.includes(arrayToCheck[i])) {
                matchArray.push(2)
                let index = secretCodeCopy.indexOf(arrayToCheck[i])
                secretCodeCopy[index] = 0
            }else {
                matchArray.push(3)
            }
        }
        setMatches(matchArray.sort())

        setClues(prevClues => {
            prevClues.map(clue => {
                if (activeButtons.includes(clue.id)) {
                    
                }
            })
        })
    }

    
   

   

   
        // a.every((element, index) => element === b[index])
   
    //Elements
    //============================================================
    const boardButtonElements = boardButtons.map(button => (
        <BoardButton key={button.id} id={button.id} colorValue={button.colorValue} isActive={button.isActive} onClick={() => handleBoardClick(button.id)}/>
    ))

    const colorPickerElements = colorPicker.map(button => (
        <ColorButton key={button.id} id={button.id} colorValue={button.colorValue} onClick={() => handleColorClick(button.colorValue)}/>
    ))

    const checkButtonElements = checkButtons.map(button => (
        <CheckButton key={button.id} id={button.id} isActive={button.isActive} onClick={handleCheckClick}/>
    ))

    const clueElements = clues.map(clue => (
        <Clue key={clue.id} id={clue.id} match={clue.match}/>
    ))

    //Styles
    //===========================================================
    const boardButtonStyles= {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: '300px',
        margin: '0 auto'
    }

    const boardContainerStyles = {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 2fr',
    }
    // Fetch
    // ============================================================
    let url = 'https://www.random.org/integers/?num=4&min=1&max=8&col=1&base=10&format=plain&rnd=new'

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => setSecretCode((data.replace(/\r?\n|\r/g, '').split('')).map(str => parseInt(str))))
    }, [])
    

    return(
        <div>
            <button onClick={activateButtons}>activate</button>
            <div>
                {colorPickerElements}
            </div>
            <div style={boardContainerStyles}>
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
            
            
        </div>
    )
}

export default Board