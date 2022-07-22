import logodesafio1 from '../logodesafio1.jpg'
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';

const BarMenu = () => {
    return (
        <>
        <div className='navbarP' >
            <img src={logodesafio1} alt="" />
            <ul>
                <li><button>inicio</button></li>
                <li><button>nosotros</button></li>
                <li><button>productos</button></li>
            </ul>
            <CartWidget/>
        </div>
        </>
    );
}
export default BarMenu;
