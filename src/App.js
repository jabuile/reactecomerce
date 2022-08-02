
import './App.css';
import BarMenu from './components/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return ( 
    <>
    <div className="menu">
      <BarMenu/>
    </div>
    <div>
      <ItemListContainer section="Productos en oferta"/>
    </div>
    </>
  );
}

export default App;
