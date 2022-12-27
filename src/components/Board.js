import BoardButton from "./BoardButton";
import { useState, useEffect } from 'react'
import ColorButton from "./ColorButton";
import CheckButton from "./CheckButton"
import Clue from './Clue'
import _, { forEach, matches } from 'lodash'



function Board() {
    const [boardButtons, setBoardButtons] = useState(createBoardButtons())
    const [colorPicker, setColorPicker] = useState(createColorPicker())
    const [selectedColor, setSelectedColor] = useState(1)
    const [secretCode, setSecretCode] = useState([4,1,4,4])
    const [clues, setClues] = useState()
    const [playerTurn, setPlayerTurn] = useState(1)
    const [activeButtons, setActiveButtons] = useState([0, 1, 2, 3])
    const [arrayToCheck, setArrayToCheck] = useState([])
    const [exactMatches, setExactMatches] = useState([])
    const [numInCode, setNumInCode] = useState([])

    // Generate objects for board elements
    // ================================================
    // function createClues() {
    //     const newClues = []
    //     for (let i = 0; i < 32; i++) {
    //         newClues.push({
    //             id: i,
    //             match: 0,
    //         })
    //     }
    //     return newClues
    // }

    
    
    function createCheckButtons() {
        const newCheckButtons = []
        for (let i = 0; i < 8; i++) {
            newCheckButtons.push({
                id: i,
                isActive: false
            })
        }
        return newCheckButtons
    }
    
    function createColorPicker() {
        const newColors = []
        for (let i = 0; i < 8; i++) {
            newColors.push({
                id: i,
                colorValue: i + 1
            })
        }
        return newColors
    }

    function createBoardButtons() {
        const newBoardButtons = []
        for (let i = 0; i < 32; i++) {
            newBoardButtons.push({
                id: i,
                colorValue: 0,
                isActive: false
            })
        }
        return newBoardButtons
    }

    useEffect(() => {
        setBoardButtons(prevBoardButtons => (
            prevBoardButtons.map(button => {
                return activeButtons.includes(button.id) ?
                {...button, isActive: true} :
                {...button, isActive: false}
            })
        ))
    }, [activeButtons])


    // HandleClicks
    // =================================================================
    function handleBoardClick(id) {
        setBoardButtons(oldButtons => oldButtons.map(button => {
            return button.id === id ? 
            {...button, colorValue: selectedColor, isActive: false} :
            button
    }))
        setArrayToCheck(prevArrayToCheck => [...prevArrayToCheck, selectedColor])
        
    }

    function handleColorClick(colorValue) {
        setSelectedColor(colorValue)
    }

    function handleCheckClick() {
        changeActiveButtons()
        checkEquality()
        checkNumInCode()
        
        //empty out arrays

    }

    function checkEquality() {
        for (let i = 0; i < 4; i++) {
            if (arrayToCheck[i] === secretCode[i]) {
                setExactMatches(prevExactMatches => [...prevExactMatches, 1])
            }
        }
    }

    function checkNumInCode() {
        let set = _.uniq(arrayToCheck)
        set.forEach(item => {
            if (secretCode.includes(item)) {
                setNumInCode(prev => [...prev, 1])
            }
        })
    }

    function changeActiveButtons() {
        setActiveButtons(prev => prev.map(button => {
            return button + 4
        }))
    }

    console.log('arrayToCheck:' + arrayToCheck)
    console.log('exactMatches:' + exactMatches)
    console.log('numInCode:' + numInCode)
    console.log('activeButtons:' + activeButtons)
 
    
    
   
        // a.every((element, index) => element === b[index])
   
    //Elements
    //============================================================
    const boardButtonElements = boardButtons.map(button => (
        <BoardButton key={button.id} id={button.id} colorValue={button.colorValue} isActive={button.isActive} onClick={() => handleBoardClick(button.id)}/>
    ))

    const colorPickerElements = colorPicker.map(button => (
        <ColorButton key={button.id} id={button.id} colorValue={button.colorValue} onClick={() => handleColorClick(button.colorValue)}/>
    ))

    

    // const clueElements = clues.map(clue => (
    //     <Clue key={clue.id} id={clue.id} match={clue.match}/>
    // ))

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
            <button >activate</button>
            <div>
                {colorPickerElements}
            </div>
            <div style={boardContainerStyles}>
                <div style={boardButtonStyles}>
                    {boardButtonElements}
                </div>
                <div>
                    <CheckButton isActive={true} onClick={handleCheckClick}/>
                </div>
                <div>
                    {exactMatches}
                    {numInCode}
                </div>
            </div>
            
            
        </div>
    )
}

export default Board