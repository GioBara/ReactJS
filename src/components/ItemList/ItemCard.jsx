import { Link } from "react-router-dom"
import BotonGeneral from "../Boton/Boton"

const ItemCard = ({item})=>{

    return(
        <div className="carta">
            <img src={item.img} alt="img de producto" className="cartaImg" />
            <h2 className="cartaTitulo">{item.name}</h2>
            <p className="cartaPrecio">{item.price}</p>
            <p className="cartaPrecio">{item.category}</p>
            <div className="divBotones">
                <Link to={`/item/${item.id}`}>
                    <BotonGeneral text="Ver mas"/>
                </Link>
            </div>
        </div>
    )
}

export default ItemCard