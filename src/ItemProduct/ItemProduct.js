//import { useState, useEffect } from "react";
import './ItemProduct.scss'
import ItemCount from "../ItemCount/ItemCount"

const ItemProduct =({data}) =>{
    const {nombre, imagen, precio, stock}=data
    return(
        <div className="item-product">
            <img src={`${imagen}`} alt="Imagen producto"/>
            <p>{nombre}</p>
            <span>$ {precio}</span>
            <p>stock: {stock}</p>
            <ItemCount stock={stock}/>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct