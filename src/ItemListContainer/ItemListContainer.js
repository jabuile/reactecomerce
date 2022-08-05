
import './ItemListContainer.scss'
import ItemList from "../itemList/ItemList"
//import ItemProduct from "../ItemProduct/ItemProduct"
import arrProductos from "../utils/productos.mock"
import { useEffect, useState } from "react"
const ItemListContainer =({section}) =>{
    // const product1 = {
    //     nombre: "martillo",
    //     precio: 1500,
    //     imagen:"https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW508S_1.jpg",
    //     stock: 6

    // }
    // const product2 = {
    //     nombre: "amoladora",
    //     precio: 8900,
    //     imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3M-aHlhKsLAhyAYkHWJRk523zNU5aa2Au-hQ25gyv4IST3a0OjrLqb6Hbs1LW0iZ_f8s&usqp=CAU",
    //     stock: 8
    // }

    const [listArrProductos, SetListArrProductos] = useState([])


  const getArrProductos = new Promise((resolve, reject) => {
    setTimeout (()=>{
    resolve (arrProductos)
}, 2000)
  })
useEffect (()=>{


  getArrProductos.then ((res) => {
    console.log("productos: ",res);
    SetListArrProductos(res)
  })
},[])

    return(
        <div className="list-products">
            <h2>{section}</h2>
            {console.log("state: ", arrProductos)}
            <ItemList dataProductos={listArrProductos}/>
            
            
        </div>
    )




}

export default ItemListContainer