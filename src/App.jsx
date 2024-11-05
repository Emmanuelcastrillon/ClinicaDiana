import PieDePagina from './components/Footer';
import Encabezado from './components/Navbar';
import Nosotros from './Routes/Nosotros';
import Home from './Routes/Home';
import { Route, Routes } from 'react-router';
import CentroConocimiento from './Routes/CentroConocimiento';
import Testimonios from './Routes/Testimonios';
import Ortodoncia from './Routes/Ortodoncia';
import Endodoncia from './Routes/Endodoncia';
import './Styles/sitio.css';
import Pagos from './Routes/Pagos';
import Login from './components/Login';
import Politicas from './Routes/Politicas';
import DiseñoSonrisa from './Routes/DiseñoSonrisa';
import Implantologia from './Routes/Implantologia';
import Higiene from './Routes/Higiene';
import Rehabilitacion from './Routes/Rehabilitacion';

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
        <Route path='/Pagos' element={<Pagos/>}/>
        <Route path='/login' element={<Login/>}/>  
        <Route path='/politicas' element={<Politicas/>}/> 
        <Route path='/ortodoncia' element={<Ortodoncia/>}/>
        <Route path='/endodoncia' element={<Endodoncia/>}/>
        <Route path='/diseñoSonrisa' element={<DiseñoSonrisa/>}/> 
        <Route path='/implantologia' element={<Implantologia/>}/>  
        <Route path='/higiene' element={<Higiene/>}/>
        <Route path='/rehabilitacion' element={<Rehabilitacion/>}/>  
      

  
      </Routes>

      <PieDePagina/> 


      </body>
   
  </div>
  )

}

export default App
