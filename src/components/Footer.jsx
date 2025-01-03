import React from 'react';
import '../Styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <hr className='lineaFooter'/>
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
          <a target='_blank' href="https://www.facebook.com/share/Rieq2o3Xi8fckhij/?mibextid=LQQJ4d" ><i class='bx bxl-facebook-circle'></i></a>
          <a href="https://www.instagram.com/matzudentalaesthetics?igsh=MTJsNmVmZDVvY2J6Yg==" className="linkInstagram" target='_blank'><i class='bx bxl-instagram'></i></a>
          <a href="https://www.tiktok.com/@matzudentalaesthetics?_t=8pwopCDAWBS&_r=1" className="linkTiktok" target='_blank'><i class='bx bxl-tiktok'></i></a>
          <a href="https://wa.me/+573178617206" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>
        </div>

    </footer>

    </div>
   
   
    
   
  )
}

export default Footer