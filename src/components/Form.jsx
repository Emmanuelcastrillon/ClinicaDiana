import { useState } from 'react';
import { useContextGlobal } from '../Util/global.context';
import '../Styles/formulario.css';


function Form() {

    const{state, dispatch}=useContextGlobal()/*Importacion del contexto global*/

    const [formData, setFormData] = useState({
        name: '',
        apellido:'',
        email: '',
        telefono: '',
        tipoId:'',
        numeroId:'',
        tratamiento: '',
        });

    /*Manejo del onchange del select*/

    const handleOnchangeSelect=(event)=>{
      const selectValue= event.target.value; /*Constante que toma el valor del evento en los option del select*/
      if(selectValue){ 
        dispatch({type: 'set_valueSelectNavbar', payload:event.target.value}) /*Activo el disparador para que cambie el valor del estado del select*/
      }
    }

    /*Manejo del onchange de los input*/
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };
    
    /*******Envio del formulario*********/

        //   const handleSubmit = (e) => {
        //     e.preventDefault();
        //     // Aquí puedes manejar el envío de datos
        //     console.log('Datos enviados:', formData);
        //     // Restablecer el formulario si es necesario
        //     setFormData({ name: '', email: '', numero: '', tratamiento: '' });
        //   };
        
    return (
      <form className='formularioUsuario'>
        <h4 className="tituloFormulario">Envia tus datos y nos pondremos en contacto</h4>
      <div className='contenedorInput'>
        <label className='labelFormulario'>Nombre *</label>
        <input className='inputFormulario' name="name" value={formData.name} onChange={handleChange} required/>
      </div>

      <div className='contenedorInput'>
        <label className='labelFormulario'>Apellido *</label>
        <input className='inputFormulario' name="apellido" value={formData.apellido} onChange={handleChange} required/>
      </div>

      <div className='contenedorInput'>
        <label className='labelFormularioEmail'>Email *</label>
        <input className='inputFormulario'  name="email"  value={formData.email}  onChange={handleChange} required />
      </div>

      <div className='contenedorInput'>
        <label className='labelFormulario'>Telefono *</label>
        <input className='inputFormulario' name="telefono" value={formData.telefono} onChange={handleChange} required/>
      </div>

      <div className='contenedorInput'>
      <label className='labelFormularioSelect'>Tipo de identificacion *</label>
        <select className='selectIdentificacionFormulario' value={state.valueSelectNavbar} onChange={handleOnchangeSelect}>
            <option className='serviIdentificacionFormulario'  value="" disabled hidden>Selecciona</option>
            <option className='opcionesIdentificacionFormulario' value="C.C.">C.C.</option>
            <option className='opcionesIdentificacionFormulario' value="P.A.">P.A.</option>
            <option className='opcionesIdentificacionFormulario' value="C.E.">C.E.</option>
            <option className='opcionesIdentificacionFormulario' value="T.I.">T.I.</option>
            <option className='opcionesIdentificacionFormulario' value="R.C.">R.C.</option>
            <option className='opcionesIdentificacionFormulario' value="A.S.">A.S.</option>
            <option className='opcionesIdentificacionFormulario' value="M.S">M.S.</option>
            <option className='opcionesIdentificacionFormulario' value="C.D.">C.D.</option>
        </select>
      </div>

      <div className='contenedorInput'>
        <label className='labelFormulario'>Numero de documento *</label>
        <input className='inputFormulario' name="numeroId" value={formData.numeroId} onChange={handleChange} required/>
      </div>

      <div className='contenedorInputSelect'>
        <label className='labelFormularioSelect'>Tratamientos *</label>
        <select className='selectTratamientosFormulario' value={state.valueSelectNavbar} onChange={handleOnchangeSelect}>
            <option className='serviFormulario'  value="" disabled hidden>Selecciona</option>
            <option className='opcionesServiciosFormulario' value="ortodoncia">Ortodoncia</option>
            <option className='opcionesServiciosFormulario' value="endodoncia">Endodoncia</option>
            <option className='opcionesServiciosFormulario' value="estetica dental">Estetica Dental</option>
            <option className='opcionesServiciosFormulario' value="implantologia">Implantologia</option>
            <option className='opcionesServiciosFormulario' value="Higiene">Higiene</option>
            <option className='opcionesServiciosFormulario' value="odontologia general">Odontologia General</option>
            <option className='opcionesServiciosFormulario' value="periodoncia">Periodoncia</option>
            <option className='opcionesServiciosFormulario' value="operatoria">Operatoria</option>
            <option className='opcionesServiciosFormulario' value="rehabilitacion oral">Rehabilitacion Oral</option>
            <option className='opcionesServiciosFormulario' value="cirugía">Cirugía</option>
            <option className='opcionesServiciosFormulario' value="odontopediatria">Odontepediatria</option>
        </select>
       </div>

      <button className='botonFormulario'>Enviar</button>
    </form>
    )
}

export default Form