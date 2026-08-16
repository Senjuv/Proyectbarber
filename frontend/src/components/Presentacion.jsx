import { MdOutlineCancel } from "react-icons/md";

function Presentacion({ isOpen, setIsOpen, datosCita }) {
    return (
        <div className="section-pp">
            <div className="container-ca">
                <MdOutlineCancel onClick={() => setIsOpen(null)} className="cancel" />
            </div>
            <h1>Confirmacion de cita</h1>
            <div className="container-d">
                <div className="contenedor-data">
                    <h3>Nombre:</h3>
                    <h3 className="datos-p">{datosCita.nombre}</h3> 
                </div>
                <div className="contenedor-data">
                    <h3>Numero de telefono:</h3>
                    <h3 className="datos-p">{datosCita.numero}</h3> 
                </div>
                <div className="contenedor-data">
                    <h3>Corte:</h3>
                    <h3 className="datos-p">{datosCita.corte}</h3> 
                </div>
                <div className="contenedor-data">
                    <h3>Hora:</h3>
                    <h3 className="datos-p">{datosCita.hora}</h3> 
                </div>
                <div className="button-e" onClick={() => setIsOpen(null)} >
                    
                    <h2>Confirmar cita</h2>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;