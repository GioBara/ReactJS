import { useEffect, useState } from "react"
import pedirDatos from "../../utils/utils"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)
        pedirDatos()
            .then(data =>{
                setItem(data.find(item => item.id === Number(itemId)))
            })
            .finally(()=>setLoading(false))
    },[])

    return(
        <>
            {
                loading 
                    ? (<h2>Cargando datos...</h2>)
                    : (<ItemDetail item={item}/>)
            }
        </>

    )
}

export default ItemDetailContainer