

function CheckButton({ isActive, id, onClick }) {
    return(
        <div>
            <button disabled={!isActive} id={id} onClick={onClick}>Check</button>
        </div>
        
    )
}

export default CheckButton