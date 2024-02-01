import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const useProductos = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    

    useEffect(()=>{
        setLoading(true)

        const productosRef = collection(db, "productos");
        const docRef = categoryId 
                        ? query (productosRef, where("category", "==", categoryId) )
                        : productosRef

        getDocs( docRef )
            .then((querySnapshot)=>{
                const docs = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
                console.log(docs);

                setProductos(docs);
            })
            .finally(() => setLoading(false));

    }, [categoryId])

    return {
        productos,
        loading
    }
}

export default useProductos