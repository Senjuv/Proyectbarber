import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

function Form({ isOpen, setIsOpen, dataUS }) {

    const [nombre, setNombre] = useState('');
    const [number, setNumber] = useState('');

    const manejarCN = (e) => {
        setNombre(e.target.value);
    };
    const manejarCM = (e) => {
        setNumber(e.target.value);
    };

    function validateData() {
        if (nombre !== null && nombre.trim() !== '') {
        dataUS(nombre, number); 
        setIsOpen('present');
        console.log(isOpen);
        }else{
            console.log("No hay datos en el nombre")
        }
    }
    return (
        <div className="section-pp">
            <div className="container-ca">
                <MdOutlineCancel onClick={() => setIsOpen(null)} className="cancel" />
            </div>
            <form action="" className="form-d">
                <h2>Nombre:</h2>
                <input type="text" className="input" value={nombre} onChange={manejarCN} placeholder="Nombre" />
                <h2>Numero de telefono:</h2>
                <input type="number" className="input" value={number} onChange={manejarCM} placeholder="+32" />
            </form>
            <div className="button-e" onClick={validateData} >
                <h2>Enviar</h2>
            </div>
        </div>

    )
}

export default Form;