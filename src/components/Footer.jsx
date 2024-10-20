import React from 'react';
import '../Styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="pieDePagina">
      
        <div className="informacion">
          <a href="https://www.google.com/maps/place/Cl.+11+%2315-40,+Pereira,+Risaralda/@4.8064905,-75.6909149,17z/data=!3m1!4b1!4m6!3m5!1s0x8e38873f18405837:0x7b74047df77a6a81!8m2!3d4.8064905!4d-75.68834!16s%2Fg%2F11j25m5hmy?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D" className="linkGeogleMaps" target='_blank'>
            <h4 className="direccion">Calle 11 # 15-40 los Alpes</h4> 
            <h4 className='ciudad'>Pereira Colombia</h4>
          </a>
          <Link to={'/politicas'} className='linkPoliticas'><h4 className='politicas'>Politicas</h4></Link>
          <h4 className="derechos">Todos los derechos reservados 2024<i class='bx bx-copyright'></i></h4>
        </div>

        <div className="navegacionRedes">
          <a className="linkFacebook" target='_blank' href="https://wa.me/+573127176418" ><i class='bx bxl-facebook-circle'></i></a>
          <a href="https://boxicons.com/?query=" className="linkInstagram" target='_blank'><i class='bx bxl-instagram'></i></a>
          <a href="https://boxicons.com/?query=tiktok" className="linkTiktok" target='_blank'><i class='bx bxl-tiktok'></i></a>
          <a href="https://wa.me/+573127176418" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>
        </div>

    </footer>
    
   
  )
}

export default Footer