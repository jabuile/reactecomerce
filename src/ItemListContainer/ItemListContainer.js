
import './ItemListContainer.scss'
import ItemList from "../itemList/ItemList"
//import ItemProduct from "../ItemProduct/ItemProduct"
import arrProductos from "../utils/productos.mock"
import { useEffect, useState } from "react"
const ItemListContainer =({section}) =>{

    const [listArrProductos, SetListArrProductos] = useState([])


  const getArrProductos = new Promise((resolve, reject) => {
    setTimeout (()=>{
    resolve (arrProductos)
}, 2000)
  })
useEffect (()=>{


  getArrProductos.then ((res) => {
    //console.log("productos: ",res);
    SetListArrProductos(res)
  })
},[])

    return(
        <div className="list-products">
            <h2>{section}</h2>
            {/* {console.log("state: ", arrProductos)} */}
            <ItemList dataProductos={listArrProductos}/>
            
            
        </div>
    )




}

export default ItemListContainer