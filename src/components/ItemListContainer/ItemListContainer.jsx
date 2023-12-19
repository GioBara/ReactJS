
import ItemList from "../ItemList/ItemList";
import useProductos from "../../hooks/useProductos";

const ItemListContainer = () => {
    const {productos,loading} = useProductos()
  
    return(
        <>
            {
                loading 
                    ? <h2>Cargando datos...</h2>
                    : <ItemList productos={productos}/>
            }
        </>
    )
}

export default ItemListContainer