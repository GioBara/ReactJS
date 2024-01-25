import { useEffect, useState } from "react"
import pedirDatos from "../utils/utils"
import { useParams } from "react-router-dom"

const useProductos = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then((data)=>{
                const items = categoryId 
                                ? data.filter(prod => prod.category === categoryId)
                                : data

                setProductos(items)
                setLoading(false)
            })
    },[categoryId])

    return {
        productos,
        loading
    }
}

export default useProductos