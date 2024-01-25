import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import BotonGeneral from "../Boton/Boton"

const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)

    return (
        <section>
            <h2>Tu Compra</h2>
            <hr />

            <ul>
                {
                    cart.map((item) => (
                        <li className="flex gap-3" key={item.id}>
                            <img src={item.img} alt="Carrtio img" />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                            <BotonGeneral text="Borrar" onClick={() => removeItem(item.id)}></BotonGeneral>
                        </li>
                    ))
                }
            </ul>

            <h4>Total: {totalCart()}</h4>
            <BotonGeneral text="Vaciar Carrito" onClick={clearCart}></BotonGeneral>
        </section>
    )
}

export default CartView