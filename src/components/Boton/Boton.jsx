
const BotonGeneral = ( { text, onClick } ) =>{
    
    return(
        <button className="botonGeneral" onClick={onClick} >{text}</button>
    )
}

export default BotonGeneral