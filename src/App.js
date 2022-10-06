import './App.css';
import { Route, Routes, Router } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home';
import {Products} from './pages/Products';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
import {AboutUs} from './pages/AboutUs';
import {Contact} from './pages/Contact';  
import {Activities} from './pages/Activities';

function App() {
  return (
  <>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path="/Productos" element={<Products/>}/>
          <Route path='/Nosotros' element={<AboutUs/>}/>
          <Route path='/Contacto' element={<Contact/>}/>
          <Route path='/Actividad' element={<Activities/>}/>
        </Routes>
      <Footer/>
  
  
  </>

    
  );
}

export default App;
