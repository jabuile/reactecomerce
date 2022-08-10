//import { useState, useEffect } from "react";
import './Item.scss'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item =({data}) =>{
    const {nombre, foto, precio, stock, codigo}=data
    return(
         <Link to={`/Productos/${codigo}`}>
        <div className="item-product">
            {/* <div className='float-options'>
                <p>ENVIO GRATIS</p>
                <button><FavoriteBorderIcon /></button>
            </div> */}
            
            <img src={`${foto}`} alt="Imagen producto"/>
            <p>{nombre}</p>
            <span>$ {precio}</span>
            <p>stock: {stock}</p>
            <ItemCount stock={stock}/>
            <button>Comprar</button>
        </div>
         </Link>
    )
}

export default Item