import { MdOutlineCancel } from "react-icons/md";

function Presentacion({ isOpen, setIsOpen, datosCita }) {
    const dataConfirm = true;
    function ValidateData(){
        if(dataConfirm !== true){
        
        setIsOpen(null);
        }
    }
    
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
                    <h3>Telefono:</h3>
                    <h3 className="datos-p">{datosCita.numero}</h3> 
                </div>
                <div className="contenedor-data">
                    <h3>Servicio:</h3>
                    <h3 className="datos-p">{datosCita.corte}</h3> 
                </div>
                <div className="contenedor-data">
                    <h3>Hora:</h3>
                    <h3 className="datos-p">{datosCita.hora}</h3> 
                </div>
                <div className="contenedor-data">
                <input type="checkbox"  id="confirmacion" onClick={dataConfirm = false}/>
                <p>Acepto los datos ingresados</p>
                </div>
                <div className="button-e" onClick={ValidateData} >
                    <h2>Confirmar cita</h2>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;