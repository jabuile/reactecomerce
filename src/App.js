
//import './App.css';
import './App.scss'
import BarMenu from './components/NavBar';
//import ItemListContainer from './ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './Detail/Detail';


function App() {
  return (
    <BrowserRouter> 
      <>
        <div className="menu">
          <BarMenu/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contacto' element={<Contact/>}/>
          <Route path='/Productos' element={<h1>Productos</h1>}/>
          <Route path='Productos/:id' element={<Detail/>}/>

        </Routes>
        
       
      </>
    </BrowserRouter>
  );
}

export default App;
