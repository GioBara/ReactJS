import { Link } from "react-router-dom"
import cartIcon from "../../assets/cart.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)

    return(
        <Link to="/Cart" className="flex item-center gap-1">
            <img src={cartIcon} alt="icono de carrito" className="w-8"/>
            <span className="text-white text-xl">{ itemsInCart() }</span>   
        </Link>
    )
}

export default CartWidget