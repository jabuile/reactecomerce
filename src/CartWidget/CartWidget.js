import imgcarrito from '../imgcarrito.png'
import './CartWidget.scss'
const CartWidget = () =>{
    return(
        <div className='imgCarrito'>
        <button><img src={imgcarrito } alt=""/></button>
        </div>
    )
}

export default CartWidget