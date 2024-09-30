import React from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Navbar() {
  return (
    <header className='encabezado'>
      <div className='contenedorLogo'>
        <Link to={'/'} className='linkLogo'> <img className='logo' src={Logo} alt="Matzu"/></Link>
       
      </div>

      <nav className='ContenedorMenu'>
        <Link to={'/nosotros'}  className='nosotros'><h4 className='acercaNosotros'>Acerca de nosotros</h4></Link>
        <Link to={'/servicios'}  className='servicios'><h4 className='misServicios'>Servicios</h4></Link>
        <Link to={'/centroConocimiento'}  className='conocimiento'><h4 className='centroConocimiento'>Centro de Conocimientos</h4></Link>
        <Link to={'/testimonios'}  className='testimonioss'><h4 className='misTestimonios'>Testimonios</h4></Link>
      </nav>

      


    </header>
  )
}

export default Navbar

