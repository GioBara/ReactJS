import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: ""
    });

    const [orederId, setOrderId ] = useState(null); 

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })

    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date()
        }
        
        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, orden)
            .then(doc => {
                setOrderId(doc.id);
                clearCart();
            })

        cart.forEach(item => {
            const docRef = doc(db, 'productos', item.id);
            getDoc(docRef)
                .then(doc => {
                    const stock = doc.data().stock
                    if (stock >= item.cantidad){
                        updateDoc(docRef, {
                            stock: item.stock - item.cantidad
                        });
                    };
                });
        });
    };

    if (orederId) {
        
        return (
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
            <hr />
            <p>Tu codigo de orden es: {orederId}</p>
        </div>
        );
    }
    
    return (
        <>
            <h4>Ingresa tus datos: </h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleImputChange} value={values.nombre} type="text" placeholder="Nombre" name="nombre" />
                <input onChange={handleImputChange} value={values.direccion} type="text" placeholder="Direccion" name="direccion" />
                <input onChange={handleImputChange} value={values.email} type="text" placeholder="Email" name="email" />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Checkout 
