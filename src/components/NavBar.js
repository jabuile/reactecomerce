import logodesafio1 from '../logodesafio1.jpg'
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const BarMenu = () => {
    return (
        <>
        <div className='navbarP' >
            <img src={logodesafio1} alt="" />
            <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to="/Contacto"><li><button>Contacto</button></li></Link>
                <Link to="/Productos"><li><button>Productos</button></li></Link>
            </ul>
            <CartWidget/>
        </div>
        </>
    );
}
export default BarMenu;
