
const styles={
    height: '50px',
    width: '50px',
    borderRadius: '50px'
}

function ColorButton({ colorValue, onClick}) {
    return(
        <button onClick={onClick} style={styles}>{colorValue}</button>
    )
}

export default ColorButton