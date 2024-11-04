import React from 'react';
import Logo from '../img/logo3.png';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { useState, useEffect} from "react";
import { useContextGlobal } from '../Util/global.context';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate=useNavigate()

  const{state, dispatch}=useContextGlobal()/*Importacion del contexto global*/

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
      handleOnclickHambur();
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

            <Link to={'/nosotros'} className='nosotross' onClick={handleOnclickHambur}><h4 className='acercaNosotros'>Nosotros</h4></Link>

            <select className='seleccionTratamientos'  value={state.valueSelectNavbar} onChange={handleOnchangeSelect}>
              <option className='servi'  value="" disabled hidden>Tratamientos</option>
              <option className='opcionesServicios'  value="ortodoncia">Ortodoncia</option>
              <option className='opcionesServicios' value="endodoncia">Endodoncia</option>
              <option className='opcionesServicios' value="estetica dental">Estetica Dental</option>
              <option className='opcionesServicios' value="implantologia">Implantologia</option>
              <option className='opcionesServicios' value="Higiene">Higiene</option>
              <option className='opcionesServicios' value="odontologia general">Odontologia General</option>
              <option className='opcionesServicios' value="periodoncia">Periodoncia</option>
              <option className='opcionesServicios' value="operatoria">Operatoria</option>
              <option className='opcionesServicios' value="rehabilitacion oral">Rehabilitacion Oral</option>
              <option className='opcionesServicios' value="cirugía">Cirugía</option>
              <option className='opcionesServicios' value="odontopediatria">Odontepediatria</option>
              
    
            </select>
    
            <Link to={'/centroConocimiento'} onClick={handleOnclickHambur}  className='conocimientoss'><h4 className='centroConocimiento'>Noticias</h4></Link>
            <Link to={'/testimonios'} onClick={handleOnclickHambur}  className='testimonioss'><h4 className='misTestimonios'>Testimonios</h4></Link>
            <Link to={'/pagos'} onClick={handleOnclickHambur}  className='pagoss'><h4 className='misPagos'>Pagos</h4></Link>

          </nav>
    
          <div className='contRedesHamburguesa'>
              <a className="linkfacebook" target='_blank' href="https://www.facebook.com/share/Rieq2o3Xi8fckhij/?mibextid=LQQJ4d" ><i class='bx bxl-facebook-circle'></i></a>
              <a href="https://www.instagram.com/matzudentalaesthetics?igsh=MTJsNmVmZDVvY2J6Yg==" className="linkInstagram" target='_blank'><i class='bx bxl-instagram'></i></a>
              <a href="https://www.tiktok.com/@matzudentalaesthetics?_t=8pwopCDAWBS&_r=1" className="linkTiktok" target='_blank'><i class='bx bxl-tiktok'></i></a>
              <a href="https://wa.me/+573178617206" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>
          </div>

          <h4 className='telHamburguesa'>Comunicate al: 317-8617206</h4>

    </div>
      }
    
      <h4 className='telefono'>Comunicate al: 317-8617206</h4>

      <div className='contenedorRedes'>
          <a className="linkfacebook" target='_blank' href="https://www.facebook.com/share/Rieq2o3Xi8fckhij/?mibextid=LQQJ4d" ><i class='bx bxl-facebook-circle'></i></a>
          <a href="https://www.instagram.com/matzudentalaesthetics?igsh=MTJsNmVmZDVvY2J6Yg==" className="linkInstagram" target='_blank'><i class='bx bxl-instagram'></i></a>
          <a href="https://www.tiktok.com/@matzudentalaesthetics?_t=8pwopCDAWBS&_r=1" className="linkTiktok" target='_blank'><i class='bx bxl-tiktok'></i></a>
          <a href="https://wa.me/+573178617206" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>
      </div>

      <Link to={'/login'} className='cita'><button className='botonCita'>Agenda tu Cita</button></Link>

      <nav className='ContenedorMenu'>

        <Link to={'/nosotros'}  className='nosotross'><h4 className='acercaNosotros'>Nosotros</h4></Link>
        {/* <Link to={'/servicios'}  className='servicioss'><h4 className='misServicios'>Tratamientos</h4></Link> */}
        <select className='seleccionTratamientos' onChange={handleOnchangeSelect} value={state.valueSelectNavbar}>

        <option className='servicioss'  value="" disabled hidden>Tratamientos</option>
        <option className='opcionesServicios' value="ortodoncia">Ortodoncia</option>
        <option className='opcionesServicios' value="endodoncia">Endodoncia</option>
        <option className='opcionesServicios' value="estetica dental">Estetica Dental</option>
        <option className='opcionesServicios' value="implantologia">Implantologia</option>
        <option className='opcionesServicios' value="Higiene">Higiene</option>
        <option className='opcionesServicios' value="odontologia general">Odontologia General</option>
        <option className='opcionesServicios' value="periodoncia">Periodoncia</option>
        <option className='opcionesServicios' value="operatoria">Operatoria</option>
        <option className='opcionesServicios' value="rehabilitacion oral">Rehabilitacion Oral</option>
        <option className='opcionesServicios' value="cirugía">Cirugía</option>
        <option className='opcionesServicios' value="odontopediatria">Odontepediatria</option>

        </select>

        <Link to={'/centroConocimiento'}  className='conocimientoss'><h4 className='centroConocimiento'>Noticias</h4></Link>
        <Link to={'/testimonios'}  className='testimonioss'><h4 className='misTestimonios'>Testimonios</h4></Link>
        <Link to={'/pagos'}  className='pagoss'><h4 className='misPagos'>Pagos</h4></Link>

      </nav>


    </header>
  )
}

export default Navbar


