import BotonGeneral from "../Boton/Boton"
import ItemCard from "./ItemCard"
import { Link } from "react-router-dom"

const links = [
    {
        texto: "Tazas",
        href: "/productos/Tazas"
    },
    {
        texto: "Tazones",
        href: "/productos/Tazones"
    },
    {
        texto: "Platos",
        href: "/productos/Platos"
    },
    {
        texto: "Vasos",
        href: "/productos/Vasos"
    },
    {
        texto: "Jarrones",
        href: "/productos/Jarrones"
    },
    {
        texto: "Limpiar etiquetas",
        href: "/productos"
    }
]

const ItemList = ({ productos }) => {
    return (
        <section className="listC">

            <h2 className="listCTitulo">Lista de productos</h2>

            <hr />

            <div className="divBotones">
                {links.map((link)=>(
                    <Link to={link.href} key={link.href}> <BotonGeneral text= {link.texto} /> </Link>
                ))}
            </div>

            <div className="productos">
                {productos.map((item) => <ItemCard key={item.id} item={item} />)}
            </div>

        </section>
    )
}

export default ItemList