import React from 'react';
import '../Styles/home.css';
import consultorio from '../img/mercado1.png'; 
import pasillo from '../img/mercado2.png';
import equipo from '../img/mercado3.png';
import { Link } from 'react-router-dom';


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
       
      
    </main>
  )
}

export default Home