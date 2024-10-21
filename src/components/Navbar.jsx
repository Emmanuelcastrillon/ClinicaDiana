import React from 'react';
import Logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { useState, useEffect} from "react";
import { useContextGlobal } from '../Util/global.context';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate=useNavigate()

  const{state, dispatch}=useContextGlobal()/*Importacion el contexto global*/

/*Manejo del onclick de la hamburguesa*/

  const handleOnclickHambur=()=>{
    dispatch({type: 'set_isBurguer', payload:!state.isBurguer}) /*Activo el disparador para que cambie el valor del estado isBurguer*/
  }

/*Manejo del onchange del select*/

  const handleOnchangeSelect=(event)=>{
    const selectValue= event.target.value; /*Constante que toma el valor del evento en los option del select*/
    if(selectValue){ 
      navigate(`/${selectValue}`); /*si el select toma un valor valido navega a la ruta que toma el valor del option en el select*/
      dispatch({type: 'set_valueSelectNavbar', payload:""}) /*Activo el disparador para que cambie el valor del estado del select*/
    }
  }

  return (
    <header className='encabezado'>

      {/********************Logo***********************/}

      <div className='contenedorLogo'>
        <Link to={'/'} className='linkLogo'> <img className='logo' src={Logo} alt="Matzu"/></Link>
      </div>

       {/* if ternario que valida el estado de la hamburguesa si es true renderiza el icono hambur inicial, si es falso renderiza el icono hambur para cerrar*/}

       {state.isBurguer ? 

        <div className='hambur' onClick={handleOnclickHambur}>
          <h2 className='burguerActivado'>X</h2>
        </div>:
        
        <div className='hambur' onClick={handleOnclickHambur}>
        <span className='lineaBurguer'></span>
        <span className='lineaBurguer'></span>
        <span className='lineaBurguer'></span>
        </div>  
      }

      {/* if ternario que valida el estado de la hamburguesa si es true renderiza la hamburguesa*/}

      {state.isBurguer && 
        <div className='hamburguesa'>
          
          <nav className='ContMenuHamburguesa'>

            <Link to={'/nosotros'}  className='nosotross'><h4 className='acercaNosotros'>Nosotros</h4></Link>

            <select className='seleccionTratamientos' value={state.valueSelectNavbar} onChange={handleOnchangeSelect}>
              <option className='servi'  value="" disabled hidden>Tratamientos</option>
              <option className='opcionesServicios' value="ortodoncia">Ortodoncia</option>
              <option className='opcionesServicios' value="endodoncia">Endodoncia</option>
              <option className='opcionesServicios' value="diseñoSonrisa">Diseño de sonrisa</option>
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
    
      <h4 className='telefono'>Comunicate al:  317-8617206</h4>

      <div className='contenedorRedes'>
          <a className="linkFacebook" target='_blank' href="https://wa.me/+573127176418" ><i class='bx bxl-facebook-circle'></i></a>
          <a href="https://boxicons.com/?query=" className="linkInstagram" target='_blank'><i class='bx bxl-instagram'></i></a>
          <a href="https://boxicons.com/?query=tiktok" className="linkTiktok" target='_blank'><i class='bx bxl-tiktok'></i></a>
          <a href="https://wa.me/+573127176418" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>
      </div>

      <Link to={'/login'} className='cita'><button className='botonCita'>Agenda tu Cita</button></Link>

      <nav className='ContenedorMenu'>

        <Link to={'/nosotros'}  className='nosotross'><h4 className='acercaNosotros'>Nosotros</h4></Link>
        
        <select className='seleccionTratamientos'  value={state.valueSelectNavbar} onChange={handleOnchangeSelect}>
          <option className='servi'  value="" disabled hidden>Tratamientos</option>
          <option className='opcionesServicios' value="ortodoncia">Ortodoncia</option>
          <option className='opcionesServicios' value="endodoncia">Endodoncia</option>
          <option className='opcionesServicios' value="diseñoSonrisa">Diseño de sonrisa</option>
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


