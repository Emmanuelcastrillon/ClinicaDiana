import React, {useState, useEffect} from 'react';
import '../Styles/home.css';
import consultorio from '../img/DSC02477.JPG'; 
import pasillo from '../img/Copia de DSC02581.JPG';
import equipo from '../img/pan.png';
import { Link } from 'react-router-dom';
import Formulario from '../components/Form';
import imageFormulario from '../img/DSC02484.JPG';
import Contador from '../components/Contador';
import imageOrtodoncia from '../img/imageIconoOrtodoncia.jpeg';
import imageDiseño from '../img/imageIconoDiseño.jpeg';
import imageEndodoncia from '../img/imageIconoEndodoncia.jpeg';
import imageRehabilitacion from '../img/imageIconoRehabilitacion.jpeg';





function Home() {
  
  return (
    <main className='elHome'>

      <div className='contenedorCarrusel'>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-interval="5000" >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src={consultorio} className="d-block w-100 imageCarrusel" alt="consultorio" />
                
              </div>
              
              <div className="carousel-item">
                <img src={pasillo} className="d-block w-100 imageCarrusel" alt="pasillo" />
              
              </div>
              <div className="carousel-item">
                <img src={equipo} className="d-block w-100 imageCarrusel" alt="equipo" />
               
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div>

      <div className="porQueElegirnos">
        <h1 className="tituloPorQueElegirnos">Por que Elegirnos?</h1>
        <p className="parrafoElegirnos">Nuestro equipo está compuesto por odontólogos con diversas especialidades, 
          como ortodoncia y periodoncia, todos con una sólida experiencia y en constante formación. 
          Nuestros higienistas se enfocan en la limpieza y prevención, educando a los pacientes sobre la importancia de la higiene oral. El personal de recepción y administración se encarga de crear un ambiente acogedor y gestionar citas de manera eficiente, mientras que los asistentes brindan apoyo durante los procedimientos, asegurando que los pacientes se sientan cómodos. Fomentamos una cultura de empatía y comunicación clara, lo que garantiza que cada paciente se sienta valorado y atendido en cada etapa de su experiencia en la clínica. La formación continua en atención al cliente es clave para mantener un alto estándar de servicio.</p>
      </div>

      <div className="contenedorPilares">

        <div className="comunicacion">
          <h3 className="tituloComunicacion">Comunicacion Efectiva</h3>
          <p className="parrafoCuminicacion">Con una gran actitud Nos aseguramos de comunicarnos claramente y con una postura positiva.</p>
        </div>

        <div className="confianza">
          <h3 className="tituloConfianza">Generar confianza y seguridad</h3>
          <p className="parrafoConfianza">Nuestra prioridad es hacer que nuestros pacientes se sientan seguros y confiados en nuestros cuidados.</p>
        </div>

        <div className="equipo">
          <h3 className="tituloEquipo">Equipo armonioso y talentoso</h3>
          <p className="parrafoEquipo">Fomentamos la colaboración y el talento entre todos los miembros de nuestro equipo.</p>
        </div>

      </div>

      <div className="contenedorFormulario">
          <Formulario/>
         <img src={imageFormulario} alt="" className='imageFormulario' />
      </div>

      <div className='contenedorCantidadTratamientos'>

          <h2 className='tituloContenedorCantidadTratamientos'>El total de casos certifican nuestra experiencia</h2>
          <Link className='linkTratamientosHome' to={'/ortodoncia'}>
            <div className="tratamientoOrtodoncia">
                  <img className='imageContador' src={imageOrtodoncia} alt="imageOrtodoncia" />
                  <Contador limite={100} />
                  <h4 className="tituloOrtodoncia">Ortodoncia</h4>
            </div>
          </Link>

          <Link className='linkTratamientosHome' to={'/diseñoSonrisa'}>
          <div className="tratamientoDiseño">
            <img className='imageContador' src={imageDiseño} alt="imageDiseño" />
            <Contador limite={100} />
            <h4 className="tituloDiseño">Diseño de sonrisa</h4>
          </div>
          </Link>

          <Link className='linkTratamientosHome' to={'/endondoncia'}>
          <div className="tratamientoEndodoncia">
            <img className='imageContador' src={imageEndodoncia} alt="imageEndodoncia" />
            <Contador limite={100} />
            <h4 className="tituloEndodoncia">Endodoncia</h4>
          </div>
          </Link>

          <Link className='linkTratamientosHome' to={'/rehabilitacion'}>
          <div className="tratamientoRehabilitacion">
            <img className='imageContador' src={imageRehabilitacion} alt="imageRehabilitacion" />
            <Contador limite={100} />
            <h4 className="tituloRehabilitacion">Rehabilitacion</h4>
          </div>
          </Link>

         
          

          

         
       
      </div>



       
      
    </main>
  )
}

export default Home