
const styles={
    height: '50px',
    width: '50px',
    borderRadius: '50px'
}

function BoardButton({ id, colorValue, isActive}) {
    return(
        <button disable={!isActive} id={id} style={styles}>{id}</button>
    )
}

export default BoardButton