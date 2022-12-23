
const styles={
    height: '50px',
    width: '50px',
    borderRadius: '50px'
}

function ColorButton({ id, colorValue }) {
    return(
        <button id={id} style={styles}>{colorValue}</button>
    )
}

export default ColorButton