
const styles={
    height: '50px',
    width: '50px',
    borderRadius: '50px'
}

function BoardButton({ id, colorValue, isActive, onClick}) {
    return(
        <button disabled={!isActive} onClick={onClick} id={id} style={styles}>{colorValue}</button>
    )
}

export default BoardButton