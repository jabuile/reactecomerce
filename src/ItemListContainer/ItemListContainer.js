
import { useEffect, useState } from "react"
import productos from "../utils/productos"
const ItemListContainer =({section}) =>{
    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                //console.log("Productos: ", res)
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llama fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            //setSpinner(false) 
            })
    }, [])
    return(
        <div className="produc">
            <h1>{section}</h1>
        </div>
    )
}

export default ItemListContainer