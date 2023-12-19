import { Navigate } from "react-router-dom"
import MOCK_DATA from "../MockData/data"

const pedirDatos = ()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(MOCK_DATA)
        }, 3000)

    })
}

export default pedirDatos
