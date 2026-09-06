import { MdOutlineCancel } from "react-icons/md";

function Modal1({ isOpen, setIsOpen, dataC }) {

    return (
        <div className="section-pp">
            {/* Botón de cierre */}
            <div className="container-ca">
                <MdOutlineCancel onClick={() => setIsOpen(null)} className="cancel" />
            </div>

            {/* Encabezado del modal de combos */}
            <div className="modal-header">
                <h2>Combos Especiales</h2>
                <p className="sub-title">Selecciona el paquete de tu preferencia</p>
            </div>

            {/* Grilla de tarjetas de combos */}
            <div className="container-pp">
                <div className="container-cp" id="Corte+Barba" onClick={() => { dataC('Corte+Barba'); setIsOpen('dia'); }}>
                    <span className="service-name">Corte + Barba</span>
                    <span className="service-price">$200</span>
                </div>

                <div className="container-cp" id="Corte+Lavado" onClick={() => { dataC('Corte+Lavado'); setIsOpen('dia'); }}>
                    <span className="service-name">Corte + Lavado</span>
                    <span className="service-price">$145</span>
                </div>

                <div className="container-cp" id="Corte+Barba+Lavado" onClick={() => { dataC('Corte+Barba+Lavado'); setIsOpen('dia'); }}>
                    <span className="service-name">Corte + Barba + Lavado</span>
                    <span className="service-price">$220</span>
                </div>

                <div className="container-cp" id="Corte+ceja" onClick={() => { dataC('Corte+Ceja'); setIsOpen('dia'); }}>
                    <span className="service-name">Corte + Ceja</span>
                    <span className="service-price">$150</span>
                </div>
            </div>
        </div>
    )
}

export default Modal1;