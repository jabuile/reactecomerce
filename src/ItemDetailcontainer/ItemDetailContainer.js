import arrProductos from "../utils/productos.mock";
import ItemDetail from "../ItemDetail/ItemDetail";
//import { useEffect } from "react";

const ItemDtailContainer =({}) => {

const Itemid = productos.filter((productos)=> productos.id === Number(id))

const getItem =() => new Promise ((resolve, reject) =>{
    setTimeout (()=>{
    
        resolve (Itemid [0])
    
    }, 2000)
    })

    useEffect (() => {

    },[])

}

return (
    <div className="ItemDetail-container">
        <ItemDetail productos={}/>
    </div>
)

export default ItemDtailContainer