import React from 'react';
import Logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { useState} from "react";

function Navbar() {

  const [burguerActive, setBurguer] = useState(false);

  const handleOnHambur=()=>{
    setBurguer(!burguerActive);
  }

  return (
    <header className='encabezado'>
      <div className='contenedorLogo'>
        <Link to={'/'} className='linkLogo'> <img className='logo' src={Logo} alt="Matzu"/></Link>
      </div>

      {burguerActive && 
        <div className='hamburguesa'>
           

          <nav className='ContMenuHamburguesa'>
            <Link to={'/nosotros'}  className='nosotross'><h4 className='acercaNosotros'>Nosotros</h4></Link>
            {/* <Link to={'/servicios'}  className='servicioss'><h4 className='misServicios'>Tratamientos</h4></Link> */}
            <select className='seleccionTratamientos'>
    
              <option className='servi'  value="">Tratamientos</option>
              <option className='opcionesServicios' value="ortodoncia">Ortodoncia</option>
              <option className='opcionesServicios' value="endodoncia">Endodoncia</option>
              <option className='opcionesServicios' value="diseño de sonrisa">Diseño de sonrisa</option>
              <option className='opcionesServicios' value="implantologia">Implatologia</option>
              <option className='opcionesServicios' value="Higiene">Higiene</option>
    
            </select>
    
            <Link to={'/centroConocimiento'}  className='conocimientoss'><h4 className='centroConocimiento'>Noticias</h4></Link>
            <Link to={'/testimonios'}  className='testimonioss'><h4 className='misTestimonios'>Testimonios</h4></Link>
            <Link to={'/pagos'}  className='pagoss'><h4 className='misPagos'>Pagos</h4></Link>
          </nav>
    
          <div className='contRedesHamburguesa'>
              <a className="linkFacebook" target='_blank' href="https://wa.me/+573127176418" ><i class='bx bxl-facebook-circle'></i></a>
              <a href="https://boxicons.com/?query=" className="linkInstagram" target='_blank'><i class='bx bxl-instagram'></i></a>
              <a href="https://boxicons.com/?query=tiktok" className="linkTiktok" target='_blank'><i class='bx bxl-tiktok'></i></a>
              <a href="https://wa.me/+573127176418" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>
          </div>
          <h4 className='telHamburguesa'>Comunicate al: 317-8617206</h4>
    </div>
      }
      

      <h4 className='telefono'>Comunicate al: 317-8617206</h4>

      <div className='contenedorRedes'>
          <a className="linkFacebook" target='_blank' href="https://wa.me/+573127176418" ><i class='bx bxl-facebook-circle'></i></a>
          <a href="https://boxicons.com/?query=" className="linkInstagram" target='_blank'><i class='bx bxl-instagram'></i></a>
          <a href="https://boxicons.com/?query=tiktok" className="linkTiktok" target='_blank'><i class='bx bxl-tiktok'></i></a>
          <a href="https://wa.me/+573127176418" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>
      </div>


    
      <div className='hambur' onClick={handleOnHambur}>
        <span className='lineaBurguer'></span>
        <span className='lineaBurguer'></span>
        <span className='lineaBurguer'></span>
      </div>  

   
      
      <Link to={'/login'} className='cita'><button className='botonCita'>Agenda tu Cita</button></Link>

      <nav className='ContenedorMenu'>
        <Link to={'/nosotros'}  className='nosotross'><h4 className='acercaNosotros'>Nosotros</h4></Link>
        {/* <Link to={'/servicios'}  className='servicioss'><h4 className='misServicios'>Tratamientos</h4></Link> */}
        <select className='seleccionTratamientos'>

        <option className='servicioss'  value="">Tratamientos</option>
        <option className='opcionesServicios' value="ortodoncia">Ortodoncia</option>
        <option className='opcionesServicios' value="endodoncia">Endodoncia</option>
        <option className='opcionesServicios' value="diseño de sonrisa">Diseño de sonrisa</option>
        <option className='opcionesServicios' value="implantologia">Implatologia</option>
        <option className='opcionesServicios' value="Higiene">Higiene</option>

        </select>

        <Link to={'/centroConocimiento'}  className='conocimientoss'><h4 className='centroConocimiento'>Noticias</h4></Link>
        <Link to={'/testimonios'}  className='testimonioss'><h4 className='misTestimonios'>Testimonios</h4></Link>
        <Link to={'/pagos'}  className='pagoss'><h4 className='misPagos'>Pagos</h4></Link>
      </nav>


    </header>
  )
}

export default Navbar

