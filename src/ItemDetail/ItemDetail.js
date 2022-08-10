import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom'

 
const ItemDetail = ({data}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)

    return(
        <>
            <div className="item-detail-image">
                <img src={`/assets/${data.foto}`} alt="imagen" />
            </div>
            <div className="item-detail-info">
                
                <h2>{data.nombre}</h2>
                <p className="detail-info__price">$ {data.precio}</p>
                <p className="detail-info__stock">$ {data.stock}</p>
                <ItemCount/>
             
                
                
                {console.log("quantitySelected: ", quantitySelected)}
    {/* {
        quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} productData={data}/>
    } */}
                
                
            </div>
        </>
    )
}

export default ItemDetail