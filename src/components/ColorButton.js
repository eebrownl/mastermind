
const styles={
    height: '50px',
    width: '50px',
    borderRadius: '50px'
}

function ColorButton({ id, colorValue, onClick}) {
    return(
        <button onClick={onClick} id={id} style={styles}>{colorValue}</button>
    )
}

export default ColorButton