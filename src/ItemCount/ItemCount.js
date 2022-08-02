import { useState } from 'react'

const ItemCount = ({stock}) => {
    const [contador, setContador]= useState(1)
    //const {nombre, imagen, precio, stock}=data
    const addNumber = () => {
        if (stock>contador){
       setContador(contador + 1) 
       }
    
    }

    const deleteNumber = () => {
        if (contador>1){
        setContador (contador - 1)
    }
    }
    //console.log(data.stock);
    return(
    <div className='countProd'>
        
                <button onClick={deleteNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
)
}
export default ItemCount