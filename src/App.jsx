import PieDePagina from './components/Footer';
import Encabezado from './components/Navbar';
import Nosotros from './Routes/Nosotros';
import Home from './Routes/Home';
import { Route, Routes } from 'react-router';
import CentroConocimiento from './Routes/CentroConocimiento';
import Testimonios from './Routes/Testimonios';
import './Styles/sitio.css';
import Servicios from './Routes/Servicios';
import Pagos from './Routes/Pagos';
import Login from './components/Login';
import Politicas from './Routes/Politicas';

function App() {
  return (
    <div>
      <body className="miPagina">
      <Encabezado/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/centroConocimiento' element={<CentroConocimiento/>}/>
        <Route path='/testimonios' element={<Testimonios/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/Pagos' element={<Pagos/>}/>
        <Route path='/login' element={<Login/>}/>  
        <Route path='/politicas' element={<Politicas/>}/>  

    
   
   

      </Routes>

      <PieDePagina/> 


      </body>
   
  </div>
  )

}

export default App
