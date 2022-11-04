
// import './App.css';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Saldo from './pages/Saldo';
import Autor from './pages/Autor';
import Contenido from './pages/Contenido';
import Categoria from './pages/Categoria';
<<<<<<< HEAD
import Test from './pages/testing';
=======
import Tienda from "./pages/Tienda"




>>>>>>> 852403cf8ed2caabcbedc6f8e8987c46a9ee34b8
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
        <Route path='/CrearSaldo' element={<Saldo/>}></Route>
        <Route path='/CrearContenido' element={<Contenido/>}></Route>
        <Route path='/CrearCategoria' element={<Categoria/>}></Route>
        <Route path='/CrearAutor' element={<Autor/>}></Route>
<<<<<<< HEAD
        <Route path='/testing' element={<Test/>}></Route>
=======
        <Route path='/Tienda' element={<Tienda/>}></Route> 
>>>>>>> 852403cf8ed2caabcbedc6f8e8987c46a9ee34b8
      </Routes> 
    </Router> 
    </div>
  );
}

export default App;
