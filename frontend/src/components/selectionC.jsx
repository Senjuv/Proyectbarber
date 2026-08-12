import { MdOutlineCancel } from "react-icons/md";
import { useRef, useState } from "react";


function Selectionc() {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);

    return (
        <div className="section-c">
            <h3>Catalogo de servicios</h3>
            <div className="container-c">
                <div className="container-cp">
                    <h3>Corte de cabello (hombre)</h3>
                    <p>$130</p>
                </div>
                <div className="container-cp">
                    <h3>Corte de cabello (Mujer)</h3>
                    <p>$130</p>
                </div>
                <div className="container-cp">
                    <h3>Barba (Incluye spa)</h3>
                    <p>$100</p>
                </div>
                <div className="container-cp">
                    <h3>Ceja</h3>
                    <p>$50</p>
                </div>
                <div className="container-cp">
                    <h3>Greca sencilla</h3>
                    <p>$30</p>
                </div>
                <div className="container-cp">
                    <h3>Greca elaborada</h3>
                    <p>$50</p>
                </div>
                <div className="container-cp" onClick={() => setIsOpen(true)}>
                    <h3>Combos</h3>
                    <p></p>
                </div>

                {isOpen && (
                    <div className="section-pp">
                        <div className="container-ca">
                            <MdOutlineCancel onClick={() => setIsOpen(false)} className="cancel" />
                        </div>
                        <div className="container-pp">
                            <div className="container-cp1">
                                <h3>Corte + Barba</h3>
                                <p>$200</p>
                            </div>
                            <div className="container-cp1">
                                <h3>Corte + Lavado</h3>
                                <p>$145</p>
                            </div>
                            <div className="container-cp1">
                                <h3>Corte + Barba + Lavado</h3>
                                <p>$220</p>
                            </div>
                            <div className="container-cp1">
                                <h3>Corte + Ceja</h3>
                                <p>$150</p>
                            </div>
                        </div>
                    </div>
                )}
                <p>Cada uno de estos servicios tiene un tiempo promedio de duracion, haciendo exepcion en los combos</p>
            </div>

        </div>
    )
}

export default Selectionc;