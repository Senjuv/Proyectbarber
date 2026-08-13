import { MdOutlineCancel } from "react-icons/md";

function Modal1({isOpen, setIsOpen, dataC}) {

    return (
        <div className="section-pp">
            <div className="container-ca">
                <MdOutlineCancel onClick={() => setIsOpen(null)} className="cancel" />
            </div>
            <div className="container-pp">
                <div className="container-cp1" id="Corte+Barba" onClick={() => {dataC('Corte+Barba'); setIsOpen('dia')}}>
                    <h3>Corte + Barba</h3>
                    <p>$200</p>
                </div>
                <div className="container-cp1" id="Corte+Lavado" onClick={() => {dataC('Corte+Lavado'); setIsOpen('dia')}}>
                    <h3>Corte + Lavado</h3>
                    <p>$145</p>
                </div>
                
                <div className="container-cp1" id="Corte+Barba+Lavado" onClick={() => {dataC('Corte+Barba+Lavado'); setIsOpen('dia')}}>
                    <h3>Corte + Barba + Lavado</h3>
                    <p>$220</p>
                </div>
                <div className="container-cp1" id="Corte+ceja" onClick={() => {dataC('Corte+Ceja'); setIsOpen('dia')}}>
                    <h3>Corte + Ceja</h3>
                    <p>$150</p>
                </div>
            </div>
        </div>
    )
}

export default Modal1;