import ItemProduct from "../ItemProduct/ItemProduct";

const ItemList = ({dataProductos})=> {
    return (
        <>
        {dataProductos.map ((productos) => {
            return <ItemProduct key={productos.id} data={productos}/>
            
        })}
        </>
    )
}

export default ItemList