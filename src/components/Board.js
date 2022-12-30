import { BoardButton, BoardButtonContainer } from "./BoardButton";
import { useState, useEffect } from 'react'
import { Label, Input, ColorContainer } from "./ColorButton";
import { CheckButton, CheckContainer} from "./CheckButton"
import { Clue, CluesContainer } from './Clue'
import BoardContainer from "./BoardContainer";
import _ from 'lodash'




function Board() {
    const [boardButtons, setBoardButtons] = useState(createBoardButtons())
    const [colorPicker, setColorPicker] = useState(createColorPicker())
    const [selectedColor, setSelectedColor] = useState(1)
    const [secretCode, setSecretCode] = useState([4,1,4,4])
    const [clues, setClues] = useState(createClues())
    const [playerTurn, setPlayerTurn] = useState(1)
    const [activeButtons, setActiveButtons] = useState([0, 1, 2, 3])
    const [arrayToCheck, setArrayToCheck] = useState([])
    const [exactMatches, setExactMatches] = useState([])
    const [numInCode, setNumInCode] = useState([])
    const [youWin, setYouWin] = useState(false)
    const [youLose, setYouLose] = useState(false)

    // Generate objects for board elements
    // ================================================
    function createClues() {
        const newClues = []
        for (let i = 0; i < 8; i++) {
            newClues.push({
                id: i + 1,
                exactMatches: 0,
                numInCode: 0
            })
        }
        return newClues
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

    useEffect(() => {
        setClues(prevClues => prevClues.map(clue => {
            return clue.id === playerTurn -1 ? 
            {...clue, exactMatches: exactMatches.length, numInCode: numInCode.length} :
            {...clue}
        }))
    }, [activeButtons])

    useEffect(() => {
        setExactMatches([])
    }, [activeButtons])

    useEffect(() => {
        setNumInCode([])
    }, [activeButtons])

    useEffect(() => {
        const currentButtonObjects = []
        boardButtons.map(button => {
            return activeButtons.includes(button.id) &&
            currentButtonObjects.push(button)
        })
        setArrayToCheck(currentButtonObjects.map(obj => obj.colorValue))
    }, [boardButtons])

    useEffect(() => {
        if (exactMatches.length > 3) {
            setYouWin(true)
        }
    }, [exactMatches])

    useEffect(() => {
        if(activeButtons[0] >= boardButtons.length){
            setYouLose(true)
        }
    }, [activeButtons, boardButtons])
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
        checkEquality()
        checkNumInCode()
        updatePlayerTurn()
        changeActiveButtons()
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

    function updatePlayerTurn() {
        setPlayerTurn(prev => prev + 1)
    }

   
    
    console.log('secretCode' + secretCode)
    console.log('arrayToCheck:' + arrayToCheck)
    console.log('Win:' + youWin)
    console.log('Lose:' + youLose)
    console.log('activeButtons: ' + activeButtons)
   
    //Elements
    //============================================================
    const boardButtonElements = boardButtons.map(button => (
        <BoardButton key={button.id} id={button.id} colorValue={button.colorValue} active={button.isActive} disabled={!button.isActive} onClick={() => handleBoardClick(button.id)}/>
    ))

    const colorPickerElements = colorPicker.map(button => (
        
        <Label key={button.id} value={button.colorValue}>
            <Input type='radio' name='colorPicker' id={button.id} value={button.colorValue} checked={selectedColor === button.colorValue} onChange={() => handleColorClick(button.colorValue)} />
        </Label>
        
    ) )
    

    const clueElements = clues.map(clue => (
        <Clue key={clue.id} id={clue.id} exactMatches={clue.exactMatches} numInCode={clue.numInCode}/>
    ))

    //Styles
    //===========================================================
    // const boardButtonStyles= {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(4, 1fr)',
    //     width: '300px',
    //     margin: '0 auto'
    // }

    // const boardContainerStyles = {
    //     display: 'grid',
    //     gridTemplateColumns: '3fr 1fr 2fr',
    // }
    // Fetch
    // ============================================================
    let url = 'https://www.random.org/integers/?num=4&min=1&max=8&col=1&base=10&format=plain&rnd=new'

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => setSecretCode((data.replace(/\r?\n|\r/g, '').split('')).map(str => parseInt(str))))
    }, [url])
    

    return(
        <BoardContainer>
            <ColorContainer>
                {colorPickerElements}
            </ColorContainer>
            <BoardButtonContainer>
                {boardButtonElements}
            </BoardButtonContainer>
            <CluesContainer>
                {clueElements}
            </CluesContainer>
            <CheckContainer>
                <CheckButton isActive={true} onClick={handleCheckClick}>Check</CheckButton>
            </CheckContainer>
        </BoardContainer>
    )
}

export default Board