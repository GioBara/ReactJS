import BotonGeneral from "../Boton/Boton";

const SelectorDeCantidad = ({cantidad, stock, setCantidad}) => {
    const handleSumar = () => {
       cantidad < stock && setCantidad(cantidad + 1);
    }

    const  handleRestar = () => {
       cantidad > 1 && setCantidad(cantidad - 1);
    }

    return( 
        <div>
            <BotonGeneral text="-" onClick={handleRestar}></BotonGeneral>
            <span>{cantidad}</span>
            <BotonGeneral text="+" onClick={handleSumar}></BotonGeneral>
        </div>
    )
}

export default SelectorDeCantidad;