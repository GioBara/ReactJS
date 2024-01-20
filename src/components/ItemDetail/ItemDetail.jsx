import { Link } from "react-router-dom"
import BotonGeneral from "../Boton/Boton"
import { useContext, useState } from "react";
import SelectorDeCantidad from "./SelectorDeCantidad";
import SelectorDeColor from "./SelectorDeColor";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({item})=>{
    const [ cantidad, setCantidad ] = useState(1);
    const [ color, setColor ] = useState("");
    const { addToCart } = useContext(CartContext);

    const handleAgregar = () =>{
        const itemToCart ={
            ...item,
            cantidad,
            color
        }
        
        addToCart(itemToCart);
    }

    return(
        <div className="itemDetail">
            <img src={item.img} alt="img de producto" className="imgDetail" />
            <h2 className="titleDetail">{item.name}</h2>
            <p className="priceDetail">Precio: {item.price}</p>
            <p className="priceDetail">Stock disponible: {item.stock}</p>
            <p className="priceDetail">Categoria: {item.category}</p>
           
            <div className="divBotones">
                <>
                    <SelectorDeCantidad
                        cantidad = {cantidad}
                        stock = {item.stock}
                        setCantidad={setCantidad}
                    />
                    <SelectorDeColor setColor={setColor}/>    
                    <BotonGeneral text="Agregar al Carrito" onClick={handleAgregar}/>
                </>
                <>
                <Link to="/cart"><BotonGeneral text="Terminar Compra"></BotonGeneral></Link>
                </>
                
            </div>
        </div>
    )
}

export default ItemDetail