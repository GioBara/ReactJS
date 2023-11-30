import Carta from "./Carta"

const ItemListContainer = () => {
    return (
        <section className="listC">

            <h2 className="listCTitulo">Lista de productos</h2>

            <hr />

            <div className="productos">
                <Carta img="/imgs/logo.png" nombre="Taza 1" precio={100} />
                <Carta img="/imgs/logo.png" nombre="Taza 2" precio={200} />
                <Carta img="/imgs/logo.png" nombre="Taza 3" precio={300} />
                <Carta img="/imgs/logo.png" nombre="Taza 4" precio={400} />
            </div>

        </section>
    )
}

export default ItemListContainer