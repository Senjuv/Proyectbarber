import { MdOutlineCancel } from "react-icons/md";

function Form({ isOpen, setIsOpen, datam }) {

    return (
        <div className="section-pp">
            <div className="container-ca">
                <MdOutlineCancel onClick={() => setIsOpen(null)} className="cancel" />
            </div>
            <form action="" className="form-d">
                <h2>Nombre:</h2>
                <input type="text" className="input" placeholder="Nombre"/>
                <h2>Numero de telefono:</h2>
                <input type="number" className="input" placeholder="+32" />
            </form>
            <div className="button-e">
                <h2>Enviar</h2>
            </div>
        </div>

    )
}

export default Form;