import { Link } from "react-router-dom"
import BotonGeneral from "../Boton/Boton"

const ItemDetail = ({item})=>{

    return(
        <div className="itemDetail">
            <img src={item.img} alt="img de producto" className="imgDetail" />
            <h2 className="titleDetail">{item.name}</h2>
            <p className="priceDetail">{item.price}</p>
            <p className="priceDetail">{item.category}</p>
            <div className="divBotones">
                <Link to={`/item/${item.id}`}>
                    <BotonGeneral text="Agregar al Carrito"/>
                </Link>
            </div>
        </div>
    )
}

export default ItemDetail