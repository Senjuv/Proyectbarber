import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { supabase } from "../utils/supabase";

function Presentacion({ isOpen, setIsOpen, datosCita, env, setEnv }) {
    const [dataconfirm, setDataConfirm] = useState(false);
    function ValidateData() {
        if (dataconfirm !== false) {
            setEnv(true);
            if(dataconfirm === true && env === true){
            IngresoData()
            console.log("si jajja");
        }else{
            console.log("aun no");
        }
            setIsOpen(null);
        } else {
            console.log("no jala");
        }
    }

        async function IngresoData() {
            const { error } = await supabase
                .from('usuarios')
                .insert([
                    {
                        name: datosCita.nombre,
                        corte: datosCita.corte,
                        hora: datosCita.hora,
                        number: datosCita.numero,
                        horar: datosCita.id
                    }
                ])
            if (error) {
                console.log("Ocurrio un error");
            } else {
                console.log("Producto guardado con exito");
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
                    <input type="checkbox" id="confirmacion" onClick={() => {setDataConfirm(true); setEnv(true)}} />
                    <p className="Accept_btn">Acepto los datos ingresados</p>
                </div>
                <div className="button-e" onClick={ValidateData} >
                    <h2>Confirmar cita</h2>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;