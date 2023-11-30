const Carta = ({ img, nombre, precio }) => {
    
    return (

        <div className="carta">

            <img src={img} alt="img de producto" className="cartaImg" />
            <h2 className="cartaTitulo">{nombre}</h2>
            <p className="cartaPrecio">{precio}</p>
            <button className="cartaBoton">Agregar al carrito</button>

        </div>

    )
}

export default Carta