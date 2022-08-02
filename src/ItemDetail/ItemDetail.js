import ItemCount from "../ItemCount/ItemCount";
 
const ItemDetail =({productos}) => {

    const {nombre, precio, imagen, stock}=productos
    
    return (
        <>
        <div className="item-product">
            <img src={`${imagen}`} alt="Imagen producto"/>
            <p>{nombre}</p>
            <span>$ {precio}</span>
            <p>stock: {stock}</p>
            <ItemCount stock={stock}/>
            <button>Comprar</button>
        </div>
        </>
    )
} 

export default ItemDetail