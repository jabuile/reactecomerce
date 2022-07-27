
import './App.css';
import BarMenu from './components/NavBar';

//import CartWidget from './CartWidget/CartWidget';
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  return ( 
    <>
    <div className="menu">
      <BarMenu/>
    </div>
    <div>
      <ItemListContainer/>
    </div>
    </>
  );
}

export default App;
