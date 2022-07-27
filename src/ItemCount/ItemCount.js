import { useState, useEffect } from 'react'
import './ItemCount.scss'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemCount = ({data, action}) => {
    const [contador, setContador] = useState(1)

    const {nombre, foto, precio, stock} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }
    
    useEffect( () => {
        console.log("Actualizacion")
        
    }, [contador])



    return(
        <div className="item-product">
            <div className='float-options'>
                <p>ENVIO GRATIS</p>
                <button><FavoriteBorderIcon /></button>
            </div>
            <img src={`/assets/${foto}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{nombre}</p>
                <p><CreditCardIcon /> 6 Cuotas sin interes</p>
                <p><DeliveryDiningIcon />Envio fratis a partir de $6000</p>
                <span>$ {precio}</span>
               {/* <div className='countProd'>
                    <button onClick={removeNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </div> */}
            </div>
        </div> 
    )
}

export default ItemCount