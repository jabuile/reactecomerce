import logodesafio1 from '../logodesafio1.jpg'

const BarMenu = () => {
    return (
        <>
        <div>
            <img src={logodesafio1} alt="" />
            <ul>
                <li><button>inicio</button></li>
                <li><button>nosotros</button></li>
                <li><button>productos</button></li>
            </ul>
        </div>
        </>
    );
}
export default BarMenu;
