import Item from "../Item/Item";

const ItemList = ({dataProductos})=> {
    return (
        <>
        {dataProductos.map ((productos) => {
            return <Item key={productos.id} data={productos}/>
            
        })}
        </>
    )
}

export default ItemList